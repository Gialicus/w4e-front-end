import React, { Component } from "react"
import moment from "moment";



class Dailytime extends Component {
    state = {
    }
    render() {
        return (
            <tr>
                <td>{moment(this.props.date).format("DD/MM/YYYY")}</td>
                <td>{this.props.amStart}</td>
                <td>{this.props.amEnd}</td>
                <td>{this.props.pmStart}</td>
                <td>{this.props.pmEnd}</td>
            </tr>
        )
    }
}

export default Dailytime;