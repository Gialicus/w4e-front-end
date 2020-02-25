import React, { Component } from "react"
import { Row, Col, Container, Table } from "react-bootstrap";
import axios from "axios";
import jsonwebtoken from "jsonwebtoken"
import Timeitem from "../Timeitem/Timeitem";


class Timegroup extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const decoded = jsonwebtoken.decode(token)
        const email = decoded.email
        console.log(token)
        axios.get('http://localhost:3020/api/timesheet/report', {
            params: {
                email: email,
                token: token
            }
        })
            .then(resp => {
                this.setState({
                    items: resp.data
                })
            });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Mounth</th>
                                    <th>Total</th>
                                    <th>Overtime</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map((item, index) => {
                                    return (
                                        <Timeitem key={index} 
                                        displayName={item.timesheet.report[0].date}
                                        number={index + 1}
                                        dto={item.timesheet}/>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Timegroup;