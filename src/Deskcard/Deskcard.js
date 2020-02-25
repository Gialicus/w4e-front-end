import React, { Component } from "react"
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import  img1  from '../assets/img1.jpg'
import { Redirect } from 'react-router-dom';

class Deskcard extends Component {
    state= {
        isActive: false
    }
    handleClick = () => {
        this.setState({isActive: true})
    }
    render() {
        let redirect = null
        if (this.state.isActive) {
            if (this.props.actionName === 'CREATE') redirect = <Redirect to="/timesheet" />
            if (this.props.actionName === 'VIEW') redirect = <Redirect to="/timegroup" />
        }
        return (
            <Container>
            {redirect}
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    {this.props.description}
                                </Card.Text>
                                <Button variant="primary" onClick={this.handleClick}>{this.props.actionName}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Deskcard;