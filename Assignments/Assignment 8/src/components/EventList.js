import React from 'react'
import Event from './Event'
import PropTypes from 'prop-types'

class EventList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Events on the {this.props.theDate}</h1>
                <div className="row">
                    {this.props.events.map((event) => {
                        if (event.date === this.props.theDate) {
                            return (
                                <div className="col-sm-4">
                                    <Event name={event.name} description={event.description} date={event.date} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    theDate: PropTypes.string.isRequired
}
