import React, { Component } from 'react'
import { Row, Col, FormControl, Form } from 'react-bootstrap';
import moment from 'moment'


class Timerow extends Component {
    state = {
        formControl: {
            amStart: '09:00',
            amEnd: '13:00',
            pmStart: '14:00',
            pmEnd: '18:00'
        }
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            formControl: {
                ...this.state.formControl,
                [name]: {
                    ...this.state.formControl[name],
                    value
                }
            }
        })
    }
    createDayOfWeek(number) {
        let day = ''
        switch (number) {
            case 0:
                day = "Domenica";
                break;
              case 1:
                day = "Lunedi";
                break;
              case 2:
                 day = "Martedi";
                break;
              case 3:
                day = "Mercoledi";
                break;
              case 4:
                day = "Giovedi";
                break;
              case 5:
                day = "Venerdi";
                break;
              case 6:
                day = "Sabato";
        }
        return day

    }
    render() {
        return (
            <Row>
                <Col>
                    <p>{this.createDayOfWeek(this.props.day)}</p>
                </Col>
                <Col>
                    <Form>
                        <FormControl type="date" value={this.props.dateValue.format('YYYY-MM-DD')}name="day" className="mr-sm-2" onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl type="time" defaultValue="09:00" name="amStart" className="mr-sm-2" onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl type="time" defaultValue="13:00" name="amStart" className="mr-sm-2" onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl type="time" defaultValue="14:00" name="amStart" className="mr-sm-2" onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl type="time" defaultValue="18:00" name="amStart" className="mr-sm-2" onChange={this.handleChange} />
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Timerow