/*    eslint indent: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Layer, Astar } from '../components';
import * as layerActionCreator from '../actions/LayerAction.js';

@connect(
    null,
    layerActionCreator
)
export default class IndexPage extends Component {

    constructor(properties) {
        super(properties);
        this.canvasWidth = 1052;
        this.canvasHeight = 580;
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
            return ( < div >
                < Link to = "/todos" > other < /Link>
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
    ref = "canvas" >
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
        // imageToMat[row][col] = 'rgba(' + imageData[++count] + ', ' + imageData[++count] + ', ' + imageData[++count] + ', ' + imageData[++count] + ')';
        for (let col = 0; col < canvasHeight; col++) {
            if (imageData[++count] + imageData[++count] + imageData[++count] + imageData[++count] > 0) {
                imageToMat[row][col] = 1;
            } else {
                imageToMat[row][col] = 0;
            }
        }
    }
    this.props.consumeSvgArr(imageToMat);
}
}
