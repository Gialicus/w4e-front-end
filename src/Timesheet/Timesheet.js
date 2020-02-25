import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment'
import Timerow from '../Timerow/Timerow';
import axios from 'axios'
import jsonwebtoken from 'jsonwebtoken'

class Timesheet extends Component {
    state = {
        days: []
    }
    componentDidMount() {
        console.log('Initializing Component ' + this.constructor.name)
        this.populateDays()
    }
    populateDays() {
        let startdate = moment().format('YYYY-MM-01');
        const numberOfDays = moment().daysInMonth();
        let joined = [...this.state.days]
        for (let i = 0; i < numberOfDays; i++) {
            let new_date = moment(startdate, "YYYY-MM-DD").add(i, 'days');
            let dayOfWeek = new_date.weekday()
            let dayFlag = false
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                dayFlag = true
                joined.push({
                    id: i,
                    dayName: dayOfWeek,
                    date: new_date.format('YYYY-MM-DD'),
                    isHolyDay: dayFlag,
                    amStart: '00:00',
                    amEnd: '00:00',
                    pmStart: '00:00',
                    pmEnd: '00:00'
                })
            }
            else {
                dayFlag = false
                joined.push({
                    id: i,
                    dayName: dayOfWeek,
                    date: new_date.format('YYYY-MM-DD'),
                    isHolyDay: dayFlag,
                    amStart: '09:00',
                    amEnd: '13:00',
                    pmStart: '14:00',
                    pmEnd: '18:00'
                })
            }
        }
        this.setState({ days: joined })
    }
    callbackFromParent = (childData) => {
        let joined = [...this.state.days]
        joined.splice(childData.id, 1, childData)
        this.setState({ days: joined })
    }
    handleSubmit = () => {
        const list = [...this.state.days]
        const token = localStorage.getItem('token')
        const decoded = jsonwebtoken.decode(token)
        const dto = {
            user_id: decoded.id,
            token: token,
            email: decoded.email,
            timesheet: list
        }
        const data = JSON.stringify(dto)
        const url = 'http://localhost:3020/api/timesheet'
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data,
            url,
        };
        axios(options).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
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
                {this.state.days.map(day => {
                    return (
                        <Timerow
                            key={day.id}
                            id={day.id}
                            dayName={day.dayName}
                            date={day.date}
                            isHolyDay={day.isHolyDay}
                            amStart={day.amStart}
                            amEnd={day.amEnd}
                            pmStart={day.pmStart}
                            pmEnd={day.pmEnd}
                            callbackFromParent={this.callbackFromParent}
                        />
                    )
                })}
                <Button variant="outline-primary" className="Button" onClick={this.handleSubmit}>Submit</Button>
            </Container>
        );
    }
}
export default Timesheet;