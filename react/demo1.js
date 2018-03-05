// primer codifo ract muestra un boton en pantalla 
// y cada ves que lo presionamos 
// suma 2 al contador 
// si el contador llega a 20
// comienza  a sumar 1


class Button extends React.Component {
    state = { counter: 0 };

    handleClick = () => {
        if (this.state.counter < 20) {
            this.setState({ counter: this.state.counter + 2 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    };

    render() {
        return (
            <button onClick={this.handleClick}> {this.state.counter} </button>

        );
    }
}

ReactDOM.render(<Button />, mountNode);
