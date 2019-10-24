import React, { Component } from 'react'
import PImgPoint from './PImgPoint'

class PlayImgPoints extends Component {
    createLi = () => {
        let array = [];
        for (let i = 0; i < 6; i++) {
            if (i == this.props.num) {
                let style = { color: 'deepskyblue' };
                array.push(<PImgPoint key={i} style={style} id={i} onPoint={this.props.onPoint} start={this.props.start} />);
            } else {
                let style = { color: 'black' }
                array.push(<PImgPoint key={i} style={style} id={i} onPoint={this.props.onPoint} start={this.props.start} />);
            }
        }
        return array;
    }
    render() {
        return (
            <div className='points'>
                {this.createLi()}
                <style jsx>{`
                .points{
                    letter-spacing: 40px;
                    display: flex;
                    margin-top: 20px;
                    justify-content: center;
                }
            `}</style>
            </div>
        )
    }
}

export default PlayImgPoints;
