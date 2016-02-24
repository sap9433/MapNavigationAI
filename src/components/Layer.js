/*    eslint indent: 0 */
import React from 'react';
import styles from 'styles/main.scss';
import { connect } from 'react-redux';

const Layer = (props) => {
    return ( < div className = {
        styles.imgLayer
        } > {

        // props.shortestPath.map(function(eachBox, index) {
        //     return ( < div style = {
        //         {
        //             marginLeft: eachBox.x,
        //             marginTop: eachBox.y
        //         }
        //         }
        //         key = { index }
        //         className = { styles.eachBoxPath } > < /div>);
        // })
        // this code tests map generation.

        props.svgArrAcess.slice(0, 200).map(function(eachrow, index) {
            return ( < div style={{height: 1}} key={index}> 
                {
                eachrow.slice(0, 200).map(function(elem, k) {
                    return (<span 
                        key = { k } 
                        style={{
                            width: 1,
                            height: 1,
                            display: 'inline-block',
                            background: elem === 1 ? '#222' : '#fff'
                        }}>< /span>);

                })

                } < /div>);
        })
     }
    < /div>);
};

export default connect((state) => {
    return {
        shortestPath: state.optimalPath,
        svgArrAcess: state.svgArrAcess
    };
})(Layer);
