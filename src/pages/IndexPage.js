/*    eslint indent: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { Layer, Astar } from '../components';
import * as layerActionCreator from '../actions/LayerAction.js';

@connect(
    null,
    layerActionCreator
)
export default class IndexPage extends Component {

    constructor(properties) {
        super(properties);
        this.canvasWidth = 500;
        this.canvasHeight = 290;
    }

    componentDidMount() {
        const mapCanvas = this.refs.canvas;
        const ctx = mapCanvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            this.arrayFromSvg();
        }.bind(this);
        img.src = 'World.svg';
    }

    render() {
            return ( < div style={{border: '1px solid green'}}>
                {/* < Link to = "/todos" > other < /Link>*/}
                < Astar / >
                < Layer canvasWidth = {
                    this.canvasWidth
                }
                canvasHeight = {
                    this.canvasHeight
                }
                /> < div styles={{
                width: this.canvasWidth,

                height: this.canvasHeight
            }
        } >
        < canvas width = {
            this.canvasWidth
        }
    height = {
        this.canvasHeight
    }
    ref = "canvas" 
    style={{border: '1px solid black'}}>
        < /canvas> < /div >
        < /div>
);
}

arrayFromSvg() {
    const mapCanvas = this.refs.canvas;
    const ctx = mapCanvas.getContext('2d');
    const canvasWidth = mapCanvas.width;
    const canvasHeight = mapCanvas.height;
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;
    const imageToMat = [];

    for (let row = 0, count = -1; row < canvasWidth; row++) {
        imageToMat[row] = [];
        let col = 0;
        // imageToMat[row][col] = 'rgba(' + imageData[++count] + ', ' + imageData[++count] + ', ' + imageData[++count] + ', ' + imageData[++count] + ')';
        for (; col < canvasHeight; col++) {
            if (imageData[++count] + imageData[++count] + imageData[++count] + imageData[++count] > 0) {
                imageToMat[row][col] = 0;
            } else {
                imageToMat[row][col] = 1;
            }
        }
        // padding to make it x * x matrix
        for (; col < canvasWidth; col++) {
            imageToMat[row][col] = 0;
        }
    }

    this.props.consumeSvgArr(imageToMat);
}
}
