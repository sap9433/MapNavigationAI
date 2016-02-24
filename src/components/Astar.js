/*    eslint id-length: 0 */

import * as layerActionCreator from '../actions/LayerAction.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { astar, Graph } from '../lib/Algo';

@connect((state) => {
    return {
    svgArrAcess: state.svgArrAcess
    };
    }, layerActionCreator)
export default class Astar extends Component {

            constructor(props) {
                    super(props);
                    this.startX = 0;
                    this.startY = 2;

                    this.endX = 10;
                    this.endY = 10;
                }

                componentDidUpdate() {
                    this.computeShortestPath();
                }

                render() {
                    return (
                        <div>{
                        [[this.startX, this.startY], [this.endX, this.endY]].map(function(el, i) {
                            return (
                                <div style={{
                                    width: 20,
                                    height: 20,
                                    marginLeft: el[0],
                                    marginTop: el[1],
                                    color: 'black',
                                    borderRadius: 10,
                                    position: 'fixed'
                                    }} key={i}>
                                .
                                </div>
                            );
                        })
                      }</div>
                    );
                }

                computeShortestPath() {
                    const world = this.props.svgArrAcess;
                    const graph = new Graph(world, {
                        diagonal: true
                    });

                    if (world[this.endX][this.endY] === 0) {
                        alert('end should be waterLand');
                        return;
                    }

                    const start = graph.grid[this.startX][this.startY];
                    const end = graph.grid[this.endX][this.endY];
                    const optimalPath = astar.search(graph, start, end);
                    this.props.shortestPath(optimalPath);
                }

                // iterateBack(parentx, parenty, optimalPath = []) {
                //     const node = _.find(this.closedList, {
                //         x: parentx,
                //         y: parenty
                //     });

                //     if (!node || (node.x === this.startX && node.y === this.startY)) {
                //         // Found optimal path , update store.
                //         this.props.shortestPath(optimalPath);
                //         return;
                //     }
                //     if (!(node.x === this.endX && node.y === this.endY)) {
                //         optimalPath.push(node);
                //     }
                //     this.iterateBack(node.parentx, node.parenty, optimalPath);
                // }

                // computeShortestPath() {
                //     this.startX = 0;
                //     this.startY = 2;

                //     this.endX = 100;
                //     this.endY = 200;

                //     const world = this.props.svgArrAcess;

                //     if (world[this.endY][this.endX] === 0) {
                //         alert('end should be waterLand');
                //         return;
                //     }

                //     const getH = (posx, posy) => {
                //         return Math.ceil(((this.endY - posy) ** 2) + ((this.endX - posx) ** 2));
                //     };

                //     const openList = [{
                //         x: this.startX,
                //         y: this.startY,
                //         g: 0,
                //         f: 0 + getH(this.startX, this.startY)
                //     }];

                //     const closedList = [];

                //     while (openList.length > 0) {
                //         // Elelemt having minimum F value in openList.
                //         const minF = _.sortBy(openList, 'f')[0];
                //         _.remove(openList, minF);
                //         closedList.push(minF);

                //         if (minF.x === this.endX && minF.y === this.endY) {
                //             break;
                //         }

                //         // Following nestedLoop computes g and f cost of each cell immediately surrounding 
                //         // the minF node found above, were we can go from this minF node.

                //         for (let row = minF.y - 1; row <= minF.y + 1; row++) {
                //             for (let col = minF.x - 1; col <= minF.x + 1; col++) {
                //                 // If the box in question is out of array or untraversable.
                //                 if (!world[row] || typeof world[row][col] === 'undefined' || world[row][col] === 0) {
                //                     continue;
                //                 }
                //                 // No diagonal movement. So don't compute diagonal boxes.
                //                 if (row !== minF.y && col !== minF.x) {
                //                     continue;
                //                 }
                //                 // If that element already exists in closed list. Dont recompute that box
                //                 if (_.find(closedList, {
                //                         x: col,
                //                         y: row
                //                     })) {
                //                     continue;
                //                 }

                //                 // Find this node in open list if already exists.
                //                 const thisNode = _.find(openList, {
                //                     x: col,
                //                     y: row
                //                 });
                //                 // Parent if here minF element. No Diagonal movement
                //                 // So gFromParent is always 1.
                //                 const gFromParent = 1;
                //                 const thisG = gFromParent + minF.g;
                //                 const thisF = thisG + getH(col, row);

                //                 if (thisNode && thisF < thisNode.f) {
                //                     thisNode.g = thisG;
                //                     thisNode.f = thisF;
                //                     thisNode.parentx = minF.x;
                //                     thisNode.parenty = minF.y;
                //                 } else {
                //                     openList.push({
                //                         x: col,
                //                         y: row,
                //                         g: thisG,
                //                         f: thisF,
                //                         parentx: minF.x,
                //                         parenty: minF.y
                //                     });
                //                 }
                //             }
                //         }
                //     }

                //     // make closedList available to other functins. 

            //     this.closedList = closedList;
            //     // Iterate back on closedList to find the optimal path.
            //     const lastNode = _.last(closedList);
            //     this.iterateBack(lastNode.x, lastNode.y);
            // }
            }
