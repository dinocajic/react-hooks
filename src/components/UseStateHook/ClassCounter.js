import React, { Component } from 'react'

class ClassCounter extends Component {

    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState( prevState => (
            {count: prevState.count + 1}
        ));
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>
                    Clicked: {this.state.count}
                </button>
            </div>
        )
    }
}

export default ClassCounter
