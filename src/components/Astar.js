/*    eslint id-length: 0 */

import * as layerActionCreator from '../actions/LayerAction.js';
import { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

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

        let openList = [{
            x: startX,
            y: startY,
            g: 0,
            f: 0 + getH(startX, startY)
        }];

        let closedList = [];

        // while (openList.length > 0) {
        //     var minF = _.sortBy($scope.openList, 'f')[0];
        //     _.remove($scope.openList, minF);
        //     $scope.closedList.push(minF);

        //     if (minF.x === $scope.endX && minF.y === $scope.endY) {
        //         break;
        //     }

        //     for (var row = minF.x - 1; row <= minF.x + 1; row++) {
        //         for (var col = minF.y - 1; col <= minF.y + 1; col++) {
        //             if (row < 0 || col < 0 || !$scope.world[row] || !$scope.world[row][col] || $scope.world[row][col] === 0) {
        //                 continue;
        //             }
        //             if (row !== minF.x && col !== minF.y) {
        //                 continue;
        //             }
        //             if (_.find($scope.closedList, {
        //                     x: row,
        //                     y: col
        //                 })) {
        //                 continue;
        //             }
        //             var thisNode = _.find($scope.openList, {
        //                 x: row,
        //                 y: col
        //             });

        //             var gFromParent = (row === minF.x) ? 1 : (col === minF.y) ? 1 : 2;
        //             var thisG = gFromParent + minF.g;
        //             var thisF = thisG + getH(row, col);

        //             if (thisNode && thisF < thisNode.f) {
        //                 thisNode.g = thisG;
        //                 thisNode.f = thisF;
        //                 thisNode.parentx = minF.x;
        //                 thisNode.parenty = minF.y;
        //             } else {
        //                 $scope.openList.push({
        //                     x: row,
        //                     y: col,
        //                     g: thisG,
        //                     f: thisF,
        //                     parentx: minF.x,
        //                     parenty: minF.y
        //                 });
        //             }
        //             setTimeout(function(r, c, g, f) {
        //                 $('#box-' + r + '-' + c).html('(' + r + ',' + c + ')' + g + ', ' + f);
        //             }.bind(null, row, col, thisG, thisF), 100);

        //         }
        //     }
        // }

        console.log(_.size(openList));
    }
}
