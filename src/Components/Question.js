import React, { Component } from 'react';

class Questions extends Component {
    constructor(props){
        super(props);
        this.state = {
            quizQuestions: [
                {   Id:1,
                    Quest: ""

                }

            ]
        }
    }
    render() {
        return <h1>{this.state.test}</h1>;
    }
}
export default Questions;