import * as React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        Raven.captureException(error, {extra: info});
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div
                    className="snap"
                    onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
                    {/*<img src={oops}/>*/}
                    <p>We're sorry — something's gone wrong.</p>
                    <p>Our team has been notified, but click here fill out a report.</p>
                </div>);
        }
        return this.props.children;
    }
}