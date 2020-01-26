import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment'
import Timerow from '../Timerow/Timerow';

class Timesheet extends Component {
    getDays(listOfDays) {
        let startdate = moment().format('YYYY-MM-01');
        const numberOfDays = moment().daysInMonth();
        for (let i = 0; i < numberOfDays; i++) {
            let new_date = moment(startdate, "YYYY-MM-DD").add(i , 'days');
            let dayOfWeek = new_date.weekday()
            listOfDays.push(
                <Timerow day={dayOfWeek}dateValue={new_date} key={i}/>
            )
            console.log(dayOfWeek)
        }
    }
    render() {
        const listOfActiveDay = [];
        this.getDays(listOfActiveDay)
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>Day</h5>
                    </Col>
                    <Col>
                        <h5>Date</h5>
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
                {listOfActiveDay}
            </Container>
        );
    }
}
export default Timesheet;