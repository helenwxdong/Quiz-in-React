import React, { Component } from 'react';
import Questions from './Components/Question';

class App extends Component {
    render() {
        return (<div>
            <h1>React Quiz</h1>
            <Questions />
        </div>
        );
    }
}
export default App;