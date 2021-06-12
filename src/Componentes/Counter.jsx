import React, {Component} from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.valorInicial
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        }

    handleDecrement = () => {
        this.setState({count: this.state.count});
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type="button" class="btn btn-danger" onClick={this.handleIncrement}>Incrementar</button>
                
            </div>
        );
    }
}

export default Counter;