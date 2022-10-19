import React from "react";
import PropTypes from 'prop-types'

class DateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeDate(event.target.value);
        this.setState({date: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <form>
                    <label>
                        <input type="text" value={this.state.date} onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

DateForm.propTypes = {
    date: PropTypes.string.isRequired,
    changeDate: PropTypes.func.isRequired,
}

export default DateForm