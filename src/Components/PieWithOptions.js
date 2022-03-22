import React, { Component } from 'react'
import {  Pie } from "react-chartjs-2";

export default class Lane extends Component {

    
    render() {

        return (
            <Pie options={{radius: "50%"}} data={this.props.data} />
        )
    }
}
