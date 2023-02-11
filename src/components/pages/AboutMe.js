import React from 'react'
import ProfilePic from '../../assets/images/Salma-Loum-2.jpg'
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
    <div className="body-color">
      <h2>
        <pre>{' <About Me /> '}</pre>
      </h2>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={ProfilePic}
          className="img-thumbnail rounded-circle"
          width="300"
          alt="Salma Loum's profile picture"
        />
      </Container>

      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <p>
          Salma moved from Cairo to Los Angeles after covering the Egyptian
          Revolution and Muslim Brotherhood unrest between 2011 and 2013. During
          that time, she was a freelance war-zone camera operator working with
          Sky News Arabia and BBC Arabia among other local Egyptian news
          stations.
          <br />
          <br />
          Loum graduated from Stanford University with a master’s degree in
          journalism with a focus on computational projects involving women’s
          rights.
          <br />
          <br />
          Her most recent bylines are with the Los Angeles Times covering
          diverse topics from sexual assault to mental health in youth. Before
          that, she was at the Minneapolis Star Tribune data team covering the
          reverberations following George Floyd’s murder and the effects of the
          pandemic on domestic violence.
          <br />
          <br />
          Her interests include hot yoga, hiking, traveling the world, and
          everything cameras. She is based in California, yet traveling the
          world and working with people who challenge her is her number one
          drive. Her passport is always ready for a new adventure!
        </p>
      </Container>
    </div>
  )
}
