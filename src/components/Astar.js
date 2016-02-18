/*    eslint id-length: 0 */

import * as layerActionCreator from '../actions/LayerAction.js';

import { Component } from 'react';
import { connect } from 'react-redux';

@connect((state) => {
    return {
        svgArrAcess: state.svgArrAcess
    };
}, layerActionCreator)
export default class Astar extends Component {
    componentWillUpdate() {
        this.computeShortestPath();
        this.props.shortestPath([
            [1, 2, 3, 4],
            [1, 2, 3],
            [2, 3],
            [2, 3]
        ]);
    }
    render() {
        console.log(this.props.svgArrAcess);
        return null;
    }
    computeShortestPath() {
        const startX = 2;
        const startY = 0;

        const endX = 12;
        const endY = 13;

        const getH = (posx, posy) => {
            return Math.ceil(((endY - posy) ** 2) + ((endX - posx) ** 2));
        };

        const openList = [{
            x: startX,
            y: startY,
            g: 0,
            f: 0 + getH(startX, startY)
        }];

        console.log(openList);
    }
}
