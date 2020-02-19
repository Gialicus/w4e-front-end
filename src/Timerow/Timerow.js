import React, { Component } from 'react'
import { Row, Col, FormControl, Form } from 'react-bootstrap';


class Timerow extends Component {
    state = {
        dayName: this.props.dayName,
        date: this.props.date,
        isHolyDay: this.props.isHolyDay,
        amStart: this.props.amStart,
        amEnd: this.props.amEnd,
        pmStart: this.props.pmStart,
        pmEnd: this.props.pmEnd
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
                break;
            default:
                break;
        }
        return day
    }
    handleChange = e => {
        let newOne = { ...this.state }
        newOne[e.target.name] = e.target.value
        this.setState(newOne)
    }

    render() {
        return (
            <Row>
                <Col>
                    <div style={this.props.dayName === 0 || this.props.dayName === 6 ? { color: 'red' } : { color: 'black' }} >
                        {this.createDayOfWeek(this.state.dayName)}
                    </div>
                </Col>
                <Col>
                    <Form>
                        <FormControl
                            type="date"
                            defaultValue={this.state.date}
                            name="date" 
                            className="mr-sm-2"
                            readOnly
                            style={this.props.dayName === 0 || this.props.dayName === 6 ? { color: 'red' } : { color: 'black' }} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl 
                            type="time" 
                            defaultValue={this.props.dayName === 0 || this.props.dayName === 6 ? null : this.state.amStart} 
                            name="amStart" 
                            className="mr-sm-2" 
                            onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl 
                            type="time" 
                            defaultValue={this.props.dayName === 0 || this.props.dayName === 6 ? null : this.state.amEnd} 
                            name="amEnd" 
                            className="mr-sm-2" 
                            onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl 
                            type="time" 
                            defaultValue={this.props.dayName === 0 || this.props.dayName === 6 ? null : this.state.pmStart} 
                            name="pmStart" 
                            className="mr-sm-2" 
                            onChange={this.handleChange} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <FormControl 
                            type="time" 
                            defaultValue={this.props.dayName === 0 || this.props.dayName === 6 ? null : this.state.pmEnd} 
                            name="pmEnd" 
                            className="mr-sm-2" 
                            onChange={this.handleChange} />
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Timerow