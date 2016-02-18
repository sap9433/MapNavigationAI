import { ConsumeSvgArr, ShortestPath } from '../constants/ActionTypes';

export function consumeSvgArr(svgArr) {
  return {
    type: ConsumeSvgArr,
    payload: svgArr
  };
}

export function shortestPath(path) {
  return {
    type: ShortestPath,
    payload: path
  };
}
