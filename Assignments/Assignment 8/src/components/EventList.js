import React from 'react'
import Event from './Event'
import PropTypes from 'prop-types'

class EventList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Events on the {this.props.theDate}</h1>
                <div className="row">
                    {this.props.events.map((event, index) => {
                        if (event.date === this.props.theDate) {
                            return (
                                <div key={index} className="col-sm-4">
                                    <Event event={event} />
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

export default EventList