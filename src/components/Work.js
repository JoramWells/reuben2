import React from "react";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'
import Card from "react-bootstrap/Card";
import news from "./img/news.jpg";

export default function Work() {
  return (
    <Container>
      <h2>Recent Blogs</h2>
      <Link to="/post">
      <Card className="flex-row flex-wrap mt-4 mb-4" style={{ border: "none" }}>
        <Card.Header className="border-0">
          <img src={news} alt="" style={{ width: "300px" }} />
        </Card.Header>
        <Card.Body className="px-2">
          <Card.Title>Title</Card.Title>
          <Card.Text className="card-text">Descrition</Card.Text>
        </Card.Body>
        <div className="w-100"></div>
      </Card>
      </Link>


      <Card className="flex-row flex-wrap mt-4 mb-4" style={{ border: "none" }}>
        <Card.Header className="border-0">
          <img src={news} alt="" style={{ width: "300px" }} />
        </Card.Header>
        <Card.Body className="px-2">
          <Card.Title>Title</Card.Title>
          <Card.Text className="card-text">Descrition</Card.Text>
        </Card.Body>
        <div className="w-100"></div>
      </Card>
      <Card className="flex-row flex-wrap mt-4 mb-4" style={{ border: "none" }}>
        <Card.Header className="border-0">
          <img src={news} alt="" style={{ width: "300px" }} />
        </Card.Header>
        <Card.Body className="px-2">
          <Card.Title>Title</Card.Title>
          <Card.Text className="card-text">Descrition</Card.Text>
        </Card.Body>
        <div className="w-100"></div>
      </Card>
      <Card className="flex-row flex-wrap mt-4 mb-4" style={{ border: "none" }}>
        <Card.Header className="border-0">
          <img src={news} alt="" style={{ width: "300px" }} />
        </Card.Header>
        <Card.Body className="px-2">
          <Card.Title>Title</Card.Title>
          <Card.Text className="card-text">Descrition</Card.Text>
        </Card.Body>
        <div className="w-100"></div>
      </Card>
    </Container>
  );
}
