import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment'
import Timerow from '../Timerow/Timerow';

class Timesheet extends Component {
    state = {
        days: []
    }
    componentDidMount() {
        console.log('Initializing Component ' + this.constructor.name)
        this.getDays()
    }
    getDays() {
        let startdate = moment().format('YYYY-MM-01');
        const numberOfDays = moment().daysInMonth();
        let joined = [...this.state.days]
        for (let i = 0; i < numberOfDays; i++) {
            let new_date = moment(startdate, "YYYY-MM-DD").add(i , 'days');
            let dayOfWeek = new_date.weekday()
            let dayFlag = false
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                dayFlag = true
            }
            joined.push({
                    index: i,
                    dayName: dayOfWeek,
                    date: new_date.format('YYYY-MM-DD'),
                    isHolyDay: dayFlag,
                    amStart: '09:00',
                    amEnd: '13:00',
                    pmStart: '14:00',
                    pmEnd: '18:00' 
            })
        }
        this.setState({days: joined})
    }
    callbackFromParent = (childData) => {
        
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
                {this.state.days.map( day => {
                        return (
                            <Timerow
                                key={day.index}
                                id={day.index}
                                dayName={day.dayName}
                                date={day.date}
                                isHolyDay={day.isHolyDay}
                                amStart={day.amStart}
                                amEnd={day.amEnd}
                                pmStart={day.pmStart}
                                pmEnd={day.pmEnd}
                                value={day}
                                callbackFromParent={this.callbackFromParent}
                            />
                        )
                    })}
            </Container>
        );
    }
}
export default Timesheet;