import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function Header() {
    return (
        <Container className="name">
            <h1>Reuben Wanjala</h1>
            <h3 style={{textAlign:"center"}}>Reporter.Blogger.News</h3>
            <Col md={8} className="mr-auto ml-auto">
                <ul className="nav0">
                    <li>POLITICS</li>
                    <li>EDUCATION</li>
                    <li>MUSIC</li>
                    <li>RELATIONSHIPS</li>
                    <li>SEX</li>
                    <li>TRADITION</li>
                    <li>LIFESTYLE</li>



                </ul>
                <hr />

            </Col>

        </Container>
    )
}
