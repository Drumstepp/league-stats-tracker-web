import React, { Component } from 'react'
import { Doughnut, Pie } from "react-chartjs-2";

export default class Lane extends Component {

    
    render() {

        return (
            <Pie options={{radius: "80%"}} data={this.props.data} />
        )
    }
}
