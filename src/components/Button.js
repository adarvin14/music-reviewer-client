import React, { Component } from 'react'

class Button extends Component {

    state = {
        count: 0,
        text: "",
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + this.state.text.length
        })
    }

    render() {
        return (
        <div>
            {/* keep track of the number of characters in the text box */}
            {/* update state whenever text is changed so that the button adds the correct # of char */}
            <input type={this.text} onChange={e => this.setState({ text: e.target.value })} />

            <button type="submit" onClick= {this.increaseCount}> Count!: {this.state.count} </button>
            {/* use this.state.count so that the button keeps the current count */}
        
        </div>
        )
    }
}

export default Button