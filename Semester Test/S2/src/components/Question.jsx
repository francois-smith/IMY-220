import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
    render() {
        return (
            <div id={this.props.question.name}>
                <h3>{this.props.question.question}</h3>
                <ul>
                    {this.props.question.answers.map((item, i) => (
                        <li key={i} data-correct={item.correct}>{item.answer}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
}

export default Question;