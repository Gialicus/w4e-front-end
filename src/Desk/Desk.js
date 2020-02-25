import React,{ Component } from "react"
import { Row, Col,  Container  } from "react-bootstrap";
import Deskcard from "../Deskcard/Deskcard";

class Desk extends Component {
    state = {

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Deskcard title="Mountly Report" 
                        actionName="CREATE"
                        description="add new mounthly report"></Deskcard>
                    </Col>
                    <Col>
                        <Deskcard title="View Reports" 
                        actionName="VIEW"
                        description="view all mounthly report"></Deskcard>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Desk;