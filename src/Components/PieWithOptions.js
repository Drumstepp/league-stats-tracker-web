import React, { Component } from 'react'
import {  Doughnut } from "react-chartjs-2";

export default class Lane extends Component {

    
    render() {

        return (
            <Doughnut options={{radius: "80%"}} data={this.props.data} />
        )
    }
}
