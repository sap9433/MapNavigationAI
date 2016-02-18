/*    eslint indent: 0 */

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
        console.log(this.props.svgArrAcess);
        this.props.shortestPath([[1, 2, 3, 4], [1, 2, 3], [2, 3], [2, 3]]);
    }
    render() {
        console.log(this.props.svgArrAcess);
        return null;
    }
}

