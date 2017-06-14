import React from 'react';
import '../../sass/homeStyle.scss';

export default class home extends React.Component {
    render () {
        return (
            <div id="component-home">
                <h1>React Node Starter App</h1>
                <div id="component-home__subtitle">
                    This is the home page.
                </div>
            </div>
        )
    }
}
