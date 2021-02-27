import React from 'react'
import Col from 'react-bootstrap/Col'

export default function Header() {
    return (
        <div className="name">
            <h1>Reuben Wanjala</h1>
            <h3 style={{textAlign:"center"}}>Reporter.Blogger.News</h3>
            <Col xs={5} className="mr-auto ml-auto">
                <ul className="nav0">
                    <li>BLOG</li>
                    <li>VIDEOS</li>
                    <li>CATEGORIES</li>
                    <li>CONTACT</li>

                </ul>

            </Col>
            <Col  xs={5} className="mr-auto ml-auto">
            <hr />
            </Col>
        </div>
    )
}
