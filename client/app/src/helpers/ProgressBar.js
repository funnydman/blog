import * as React from "react";

export default function (ComposedComponent) {
    class ProgressBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {loading: true};
        }

        renderProgressBar() {
            if (this.state.loading) {
                return (
                    <p>Loading...</p>
                );
            }
        }


        render() {
            return (
                <div>
                    {this.renderProgressBar()}
                    <ComposedComponent
                        {...this.props}
                    />
                </div>
            );
        }
    }

    return ProgressBar;
}