import React from 'react';

import './TodoErrorBoundary.css'


export default class TodoErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // log error with an external service
        console.info('logging error with my external service...');
        console.info(info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="boundary-container">
                    Cannot render todo list
                </div>
            )
        }
        return this.props.children;
    }
}
