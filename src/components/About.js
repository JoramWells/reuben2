import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import reuben from './img/reuben.jpg'


export default function About() {
    return (
        <Container>
            
            <Row>
                <Col xs={8}><h3>Hi, I am Reuben Wanjala</h3>
                <p>I'm a Fullstack Web Developer who is addicted to learning and loves working with people. I live by the motto Learn Build Teach, so I’m excited to share the things I learn with you!</p>
                </Col>
                <Col xs={4}>
                    <img src={reuben} alt="reubenpic" style={{width:"250px"}} className="rounded-circle"/>
                </Col>

            </Row>
        </Container>
    )
}
