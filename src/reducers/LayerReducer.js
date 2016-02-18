/*    eslint indent: 0 */
import { ConsumeSvgArr, ShortestPath } from '../constants/ActionTypes';

export function svgArrAcess(state = [], action = null) {
  const {type, payload} = action;
  switch (type) {
    case ConsumeSvgArr:
      return payload;
    default:
      return state;
  }
}

export function optimalPath(state = [], action = null) {
  const {type, payload} = action;
  switch (type) {
    case ShortestPath:
      return payload;
    default:
      return state;
  }
}
