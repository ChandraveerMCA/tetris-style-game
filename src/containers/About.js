

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '@material-ui/core/Button';

import { getHighScore } from '../config/SaveScore';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class About extends Component {

    render() {

        return (
            <div className={css(styles.container)}>
                <h2>{`Score : ${this.props.score}`}</h2>

            </div>
        );
    }
}




