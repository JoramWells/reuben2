import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import news from './img/news.jpg'

export default function Work() {
    return (
        <Container>
            <h2>I write blog posts</h2>

            <Card className="flex-row flex-wrap" style={{border:"none"}}>
        <Card.Header className="border-0">
            <img src={news} alt="" style={{width:"300px"}} />
        </Card.Header>
        <Card.Body className="px-2">
            <Card.Title>Title</Card.Title>
            <Card.Text className="card-text">Descrition</Card.Text>
        </Card.Body>
        <div className="w-100"></div>
    </Card>
            
        </Container>
    )
}
