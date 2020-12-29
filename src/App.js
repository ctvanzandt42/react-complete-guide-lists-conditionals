import React, {Component} from 'react';
import './App.css';
import Validation from "./components/validation";
import Char from "./components/char";

class App extends Component {
    state = {
        inputText: ''
    }

    inputTextHandler = (event) => {
        this.setState({inputText: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <ol>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                <input
                    type='text'
                    onChange={this.inputTextHandler}/>
                <p>{this.state.inputText.length}</p>
                <Validation
                    input={this.state.inputText} />
                <Char />
                <Char />
                <Char />
                <Char />
            </div>

        );
    }
}

export default App;
