import React from 'react';
import './Login.css'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            formControl: {
                email: {
                    value: ''
                },
                password: {
                    value: ''
                }
            },
            submitted: false
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
            }
        })
    }
    handleSubmit = () => {
        axios.get('http://localhost:3010/api/users/login/' + this.state.formControl.email.value + '&' + this.state.formControl.password.value)
            .then( resp => {
                localStorage.setItem('token',resp.data.token)
                this.setState({submitted: true})
            });
    }
    render() {
        let redirect = null
        if (this.state.submitted) {
            redirect = <Redirect to="/timesheet" />
        }
        return (
            <div className="Login">
                {redirect}
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <FormControl type="text" placeholder="Email" name="email" className="mr-sm-2" onChange={this.handleChange} />
                                <FormControl type="text" placeholder="Password" name="password" className="mr-sm-2" onChange={this.handleChange} />
                                <Button variant="outline-primary" className="Button" onClick={this.handleSubmit}>Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Login