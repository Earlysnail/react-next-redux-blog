import React,{ Component } from 'react'
class Draw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            revolveAngle: 0,
            addAngle: 10,
            isRevolve: false
        }
    }
    componentDidMount(){
        this.initDraw();
        this.intervalId = setInterval(this.graphRevolve, 20);
    }
    commnentWillUnmount(){
        if(this.intervalId){
            clearInterval(this.intervalId);
        }
    }
    //初始化图形
    initDraw = () => {
        //设置圆心:centreCircle
        var centreCircle = {
            x: 200,
            y: 200
        }
        //设置雷达网属性(最内环半径,环间距,环层数)
        var radiusArray = this.createRadius(2, 5, 25);
        //添加数(据源数据, 数据数量)
        var data = this.formatData(null, 20);
        //绘制数据图(数据数组,圆心坐标,雷达图半径数组,边数,数据区域填充颜色)
        this.drawDataGraph(data, centreCircle, radiusArray, 20, '#7cefe4');
    }
    //生成等差半径数组:createRadius(最内环半径,环间距,环层数) => 半径数组:radiusArray
    createRadius = (inRadius, gap, ringNum) => {
        var radiusArray = [];
        for(var i = 0; i < ringNum; i++){
            radiusArray.push(inRadius + i * gap);
        }
        return radiusArray;
    }
    //格式化数据formatData(源数据, 数据数量)
    formatData = (data, dataNum) => {
        if(data){
            //在这里进行格式化操作
            return data;
        }else{
            var dataArray = [];
            for(var i = 0; i < dataNum; i++){
                dataArray.push(parseInt(Math.random() * dataNum))
            }
            return dataArray;
        }
        return
    }
    //转换旋转
    setRevolve = () => {
        this.setState((state) => ({
            isRevolve: !state.isRevolve,
        }))
    }
    //图像旋转graphRevolve(每次旋转角度)
    graphRevolve = () => {
        if(this.state.isRevolve){
            this.setState((state) => ({
                revolveAngle: state.revolveAngle + state.addAngle
            }))
        }
    }
  
    //绘制数据图 drawDataGraph(数据数组,圆心坐标,雷达图半径数组,边数,数据区域填充颜色)
    drawDataGraph = (data, centreCircle, radiusArray, n, fillColor) => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //抗锯齿效果
        var width = canvas.width;
        var height = canvas.height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        canvas.width = width * 4;
        canvas.height = height * 4;
        ctx.scale(4,4);

        var dataPoint = {};
        let dataPoints = [];
        radiusArray.forEach((r, index) => {
            for(var i = 1; i <= n; i++){
                dataPoint.x = centreCircle.x + r * Math.cos(i * 2 * Math.PI / n);
                dataPoint.y = centreCircle.y + r * Math.sin(i * 2 * Math.PI / n);
                if(data[i % n] == index){
                    dataPoints.push({
                        key: i,
                        x: dataPoint.x,
                        y: dataPoint.y
                    })
                }
            }  
        })
        //绘制数据图像区域
        dataPoints.sort((a, b) => {return (a.key - b.key)})
        ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
        ctx.beginPath();
        dataPoints.forEach((dataPoint) => {
            ctx.lineTo(dataPoint.x, dataPoint.y);
        })
        ctx.lineTo(dataPoints[0].x, dataPoints[0].y);
        ctx.fillStyle = fillColor;
        ctx.fill();
        //绘制雷达网
        radiusArray.forEach((r) => {
            for(var i = 1; i <= n; i++){
                dataPoint.x = centreCircle.x + r * Math.cos(i * 2 * Math.PI / n);
                dataPoint.y = centreCircle.y + r * Math.sin(i * 2 * Math.PI / n);
                ctx.moveTo(dataPoint.x, dataPoint.y);
                ctx.lineTo(centreCircle.x + r * Math.cos(((i % n) + 1) * 2 * Math.PI / n ), centreCircle.y + r * Math.sin(((i % n) + 1) * 2 * Math.PI / n))
                ctx.stroke()
                //连线
                // if(index == radiusArray.length - 1){
                //     ctx.lineTo(centreCircle.x, centreCircle.y)
                //     ctx.stroke()
                // }
            }  
        })
    }
    
    //绘制雷达网drawBasePage(圆心坐标,雷达图半径数组,边数)
    drawBasePage = (centreCircle, radiusArray, n) => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //抗锯齿效果
        var width = canvas.width;
        var height = canvas.height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        canvas.width = width * 4;
        canvas.height = height * 4;
        ctx.scale(4,4);

        var point = {};
        radiusArray.forEach((r, index) => {
            for(let i=1; i<=n; i++){
                point.x = centreCircle.x + r * Math.cos(i * 2 * Math.PI / n);
                point.y = centreCircle.y + r * Math.sin(i * 2 * Math.PI / n);
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(centreCircle.x + r * Math.cos(((i % n) + 1) * 2 * Math.PI / n ), centreCircle.y + r * Math.sin(((i % n) + 1) * 2 * Math.PI / n));
                ctx.stroke();
                if(index == radiusArray.length - 1){
                    ctx.lineTo(centreCircle.x, centreCircle.y);
                    ctx.stroke();
                }
            }  
        })
    }
    //绘制圆点
    drawCircle = (point, r, fillColor, lineWidth) => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = fillColor;
        ctx.moveTo(point.x, point.y);
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.arc(point.x, point.y, r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
    render(){
        return(
            <div className="draw">
                <canvas id="myCanvas" width="400" height="400" ></canvas>
                <div onClick={this.setRevolve}>{this.state.isRevolve ? "停止旋转" : "开始旋转"}</div>
                <style jsx>{`
                    .draw{
                        display:flex;
                        justify-content: center;
                    }
                    #myCanvas{
                        transform: rotate(${this.state.revolveAngle}deg);
                    }
                
                `}
                </style>
            </div>
        )
    }
}

export default Draw

