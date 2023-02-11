import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Resume from '../../assets/images/Salma_Loum_CV.pdf'

export default function About() {
  return (
    <div className="body-color">
      <h2>
        <pre> {'<Resume /> '} </pre>
      </h2>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <ListGroup>
          <h4>SKILLS: </h4>

          <ListGroup.Item action variant="dark">
            HTML
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            CSS
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Javascript
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            SQL
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Python, Pandas
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Mongodb, Mongoose
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            React
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Markdown
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Git & Github
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" animation="glow" a href={Resume}>
          Download My Resume
        </Button>
      </div>
      <br /> <br />
      <div className="column">
        <iframe
          className="portfolio"
          src={Resume}
          style={{
            width: '100%',
            height: 'calc(100vh - 20px)',
            overflow: 'auto',
          }}
        ></iframe>
      </div>
    </div>
  )
}
