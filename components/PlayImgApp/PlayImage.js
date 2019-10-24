import React, { Component } from 'react'
const image1 = '../../static/1.jpg'
const image2 = '../../static/2.jpg'
const image3 = '../../static/3.jpg'
const image4 = '../../static/4.jpg'
const image5 = '../../static/5.jpg'
const image6 = '../../static/6.jpg'

class PlayImage extends Component {

    render() {
        let images = [image1, image2, image3, image4, image5, image6]
        const src = 'img/' + this.props.num + '.jpg';
        return (
            <div>
                <img className='graph' src={images[this.props.num]} />
                <style jsx>{`
                    .graph{
                        margin-top: 30px;
                        width: 80%;
                        height: 480px;
                        border-radius: 8px/8px;
                    }
                `}</style>
            </div>
        )
    }
}

export default PlayImage