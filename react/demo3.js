// igula a los anteriores pero ahora colocando multiples botones
// con valores distintos 
// emulando una calculadora pero que solo suma en 1 10 100 1000


class Button extends React.Component {

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Sumar + {this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));

    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Button incrementValue={1000} onClickFunction={this.incrementCounter} />

                <Result counter={this.state.counter} />
            </div>
        );
    }
}