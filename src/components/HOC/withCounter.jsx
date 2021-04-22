import React from 'react';

let withCounter = (OrinalCommponent) => {
    class CounterComponent extends React.Component {
        state = {
            count : 0,
        }

        incrementCounter = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        }

        render() {
            let {count} = this.state;
            return  <OrinalCommponent count={count} incrementCounter={this.incrementCounter} ></OrinalCommponent>
        }
    }
    return CounterComponent;
}

export default withCounter;