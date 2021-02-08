import React, {Component} from 'react';
import './App.css';
import Validation from "./components/validation";
import Char from "./components/char";

class App extends Component {
    state = {
        inputText: ''
    }

    inputTextHandler = ( event ) => {
        this.setState({inputText: event.target.value});
    }

    deleteCharHandler = ( index ) => {
        const text = this.state.inputText.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({inputText: updatedText});
    }

    render() {
        const charList = this.state.inputText.split('').map((ch, index) => {
            return <Char
                key={index}
                letter={ch}
                clicked={() => this.deleteCharHandler(index)}/>;
        });

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
                    onChange={this.inputTextHandler}
                    value={this.state.inputText}/>
                <p>{this.state.inputText}</p>
                <Validation
                    inputLength={this.state.inputText.length} />
                {charList}
            </div>

        );
    }
}

export default App;
