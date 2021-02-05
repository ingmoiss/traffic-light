import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TrafficLight extends Component {
    constructor(){
        super();
        this.state = {
            lightActive : null
        };
    }

    activeRed = () =>{
        this.setState({
            lightActive: "red"
        });
    }

    activeYellow = () =>{
        this.setState({
            lightActive: "yellow"
        });
    }

    activeGreen = () =>{
        this.setState({
            lightActive: "green"
        });
    }

    colorLight = () =>{
        
    }

    render() {
        console.log(this.state);
        let redLight = '';
        if(this.state.lightActive == 'red') redLight = 'active';
        let yellowLight = '';
        if(this.state.lightActive == 'yellow') yellowLight = 'active';
        let greenLight = '';
        if(this.state.lightActive == 'green') greenLight = 'active';
        
        return (
            <div>
                <div className="top"/>
                <div className="trafficBody">
                    <div className={"red light " + redLight}onClick={this.activeRed}> </div>
                    <div className={"yellow light " + yellowLight} onClick={this.activeYellow}> </div>
                    <div className={"green light " + greenLight} onClick={this.activeGreen}> </div>
                </div>
            </div>
        )  
    };
}

export default TrafficLight;
