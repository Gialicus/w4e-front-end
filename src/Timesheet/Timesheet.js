import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment'

class Timesheet extends Component {

    render() {
        let data = moment().daysInMonth();
        return (
            <Container>
                {data}
                <Row>
                    <Col>
                        <h5>Day</h5>
                    </Col>
                    <Col>
                        <h5>AM Start</h5>
                    </Col>
                    <Col>
                        <h5>AM End</h5>
                    </Col>
                    <Col>
                        <h5>PM Start</h5>
                    </Col>
                    <Col>
                        <h5>PM End</h5>
                    </Col>
                </Row>
                {this.listOfActiveDay}
            </Container>
        );
    }
}
export default Timesheet;