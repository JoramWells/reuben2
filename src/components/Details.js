import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import news2 from './img/news2.png'

export default function Details() {
    return (
        <Container>
            <Col md={5} className="mr-auto ml-auto">
            <img src={news2} alt="amazingImage" style={{width:"400px"}}/>

            </Col>
            <Col className="mt-4">
            <h1>Uhuru Ruto Raila</h1>
            <h6>Posted date</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            
        </Container>
    )
}
