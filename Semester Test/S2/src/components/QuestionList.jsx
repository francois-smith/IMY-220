import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';

class QuestionList extends React.Component {
    render() {
        return (
            <div>
                <h1>IMY 220 - Questions</h1>
                {this.props.questions.map(question => (
                    <Question key={question.name} question={question} />
                ))}
            </div>
        );
    }
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired
}

export default QuestionList;