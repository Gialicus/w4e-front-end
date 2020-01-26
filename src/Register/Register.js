import React from 'react'

import { Form, Container, Row, Col } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            formControl: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                email: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }
    }
    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            formControl: {
                ...this.state.formControl,
                [name]: {
                    ...this.state.formControl[name],
                    value
                }
            },
            submitted: false
        })
    }
    handleSubmit = () => {
        const user = {
            firstName: this.state.formControl.firstName.value,
            lastName: this.state.formControl.lastName.value,
            email: this.state.formControl.email.value,
            password: this.state.formControl.password.value
        }
        const data = JSON.stringify(user);
        const url = 'http://localhost:3010/api/users';
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data,
            url,
        };
        axios(options).then(res => {
            console.log(res);
            this.setState({submitted: true})
        }).catch(err => {
            console.log(err);
        });

    }
    backToMain = () => {
        this.setState({submitted: true})
    }
    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/" />
        }
        return (
            <div className="Login">
                {redirect}
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <FormControl type="text" placeholder="Name" name="firstName" className="mr-sm-2" onChange={this.handleChange} />
                                <FormControl type="text" placeholder="Last Name" name="lastName" className="mr-sm-2" onChange={this.handleChange} />
                                <FormControl type="text" placeholder="Email" name="email" className="mr-sm-2" onChange={this.handleChange} />
                                <FormControl type="text" placeholder="Password" name="password" className="mr-sm-2" onChange={this.handleChange} />
                                <Button variant="outline-primary" className="Button" onClick={this.handleSubmit}>Sign Up</Button>
                                <Button variant="outline-primary" className="Button" onClick={this.backToMain}>Back</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Register;