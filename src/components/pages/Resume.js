import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Resume from '../../assets/images/Salma_Loum_CV.pdf'

export default function About() {
  return (
    <div className="body-color">
      <h2>
        <pre> {'<Resume /> '} </pre>
      </h2>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="row">
          <ListGroup>
            <h4>SKILLS: </h4>

            <ListGroup.Item action variant="primary">
              HTML
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              CSS
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Javascript
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              SQL
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Python, Pandas
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Mongodb, Mongoose
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              React
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Markdown
            </ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Git & Github
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
      <br /> <br />
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
  )
}
