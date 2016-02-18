/*    eslint indent: 0 */
import React from 'react';
import styles from 'styles/main.scss';
import {
    connect
}
from 'react-redux';

const Layer = (props) => {
    console.log(props);
    return ( < div className = {
        styles.imgLayer
    } > {
        props.shortestPath.map(function(eachrow, index) {
            return ( < div key={index}> {
                eachrow.map(function(elem, k) {
                    return (<div className = {
                        styles.pathUnit
                    } key={k}>{elem}< /div>);
                })
            } < /div>);
        })
    } < /div>);
};

export default connect((state) => {
    return {
        shortestPath: state.optimalPath
    };
})(Layer);
