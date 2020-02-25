import React, { Component } from "react"
import { Button, Modal, ButtonToolbar, Table, } from "react-bootstrap"
import * as moment from "moment"
import Dailytime from "../Dailytime/Dailytime"
class Timeitem extends Component {
    state = {
        modalShow: false
    }
    handleClick = (input) => {
        this.setState({ modalShow: input })
    }
    render() {
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>
                    {moment(this.props.displayName).format("MMM/YYYY")}
                </td>
                <td>
                    {this.props.dto.total}
                </td>
                <td>
                    {this.props.dto.totalExtra}
                </td>
                <td>
                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => this.handleClick(true)}>
                            View
                        </Button>
                        <MyVerticallyCenteredModal
                            show={this.state.modalShow}
                            onHide={() => this.handleClick(false)}
                            report={this.props.dto.report}
                        />
                    </ButtonToolbar>
                </td>
            </tr>

        )
    }
}

export default Timeitem;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Report of {moment(props.report[0].date).format("MMMM-YYYY")}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start AM</th>
                            <th>End AM</th>
                            <th>Start PM</th>
                            <th>End PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.report.map( (rep,index) => {
                            return (
                                <Dailytime
                                key={index}
                                date={rep.date} 
                                amStart={rep.amStart} 
                                amEnd={rep.amEnd} 
                                pmStart={rep.pmStart} 
                                pmEnd={rep.pmEnd} 
                                />
                            )
                        })}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}