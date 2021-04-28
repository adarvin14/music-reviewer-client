import React, { Component } from 'react'

class Button extends Component {

    state = {
        count: 0,
        text: ""
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + this.state.text.length,
            text: ""
        })
    }



    render() {
        return (
        <div>
            {/* keep track of the number of characters in the text box */}
            {/* update state whenever text is changed so that the button adds the correct # of char */}
                <input type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})} />

                <button type="submit" onClick= {this.increaseCount}> Count!: {this.state.count} </button>
        </div>
        )
    }
}



// 1. React Only
// 2. It will need to be it’s own class component
// 3. You can render it anywhere
// 4. You can google, but you cannot google how to make an incrementor button in react.
// 5 .You can google syntax but no direct walkthroughs

export default Button