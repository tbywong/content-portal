import React from 'react';
import styles from './contentPortal.scss';
import Navigation from '../Navigation/Navigation.jsx';

export default class ContentPortal extends React.Component {
    render () {
        return (
            <div className={styles.contentPortal}>
              <Navigation />
              <h1 className={styles.title}>CONTENT PORTAL</h1>
            </div>
        )
    }
}
