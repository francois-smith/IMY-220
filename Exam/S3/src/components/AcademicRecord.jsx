import React from "react";
import PropTypes from "prop-types";
import ModuleCard from "./ModuleCard.jsx";
import ModuleInformation from "./ModuleInformation.jsx";

class EnrolmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModule: -1
        };
    }

    setActivedModule = (index) => { 
        this.setState({activeModule: index}, () => { 
            Array.from(document.querySelectorAll(".card")).map((card, i) => {
                card.classList.remove("bg-success");
                if(i === index){
                    card.classList.add("bg-success");
                }
            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1>{`${this.props.record.name} ${this.props.record.surname}`}</h1>
                <div className="row">
                    <div className="col-3 d-flex flex-column">
                        {this.props.record.results && this.props.record.results.map((module, index) => {
                            return <ModuleCard setActivedModule={this.setActivedModule} key={index} index={index} code={module.code} />
                        })}
                    </div>
                    <div className="col-9">
                        {
                            this.state.activeModule == -1 ? 
                            <h3>No module selected</h3>
                            :
                            <ModuleInformation module={this.props.record.results[this.state.activeModule]} />
                        }
                    </div>
                </div>  
            </div>
        );          
    }
}

EnrolmentList.propTypes = {
    record: PropTypes.object.isRequired
};

export default EnrolmentList;