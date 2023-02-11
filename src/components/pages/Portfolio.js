import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import SAK from '../../assets/images/topper-600.gif'
import Headlines from '../../assets/images/headlines.png'
import Water from '../../assets/images/water.png'
import Voting from '../../assets/images/voting.png'
import Bloggy from '../../assets/images/blog.png'
import Kindly from '../../assets/images/kindly.png'
import Face from '../../assets/images/facetheday.png'

export default function Blog() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div id="portfolio" className="horizontal-box body-color">
      <h2>
        <pre>{' <Projects />'}</pre>
      </h2>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <p>
          Click on the side arrows to swipe through my latest work.
          <br />
          You can view the app and the Github repo by clicking on the links on
          the bottom of each image
        </p>
        <hr />
      </Container>

      <Container style={{ justifyContent: 'center' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SAK}
              alt="figures surrounded with flowers changing colors"
            />
            <Carousel.Caption>
              <a href=" https://www.latimes.com/projects/what-to-do-after-a-sexual-assault/">
                After sexual assault : A guide to your rights and choices
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Headlines} alt="Second image" />
            <Carousel.Caption>
              <a href=" https://www.latimes.com/california/story/2022-10-28/fym-puppets-kids-mental-health-news-show-bob-baker-marionette">
                Head-lines: a mental health news show run by puppets
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Kindly} alt="Fifth image" />
            <Carousel.Caption>
              <a href="https://immense-ridge-33507.herokuapp.com/">
                Kindly application
              </a>{' '}
              | {''}
              <a href="https://github.com/SalmaLoum/kindly"> GitHub repo </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Bloggy} alt="Sixth image" />
            <Carousel.Caption>
              <a href=" https://radiant-eyrie-09127.herokuapp.com/">Bloggy</a> |{' '}
              {''}
              <a href=" https://github.com/SalmaLoum/bloggy"> GitHub repo </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Face} alt="Seventh image" />
            <Carousel.Caption>
              <a href="https://bka-2cycle.github.io/face-the-day">
                Face The Day app
              </a>{' '}
              | {''}
              <a href="https://github.com/SalmaLoum/face-the-day">
                GitHub repo
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Voting} alt="Fourth image" />
            <Carousel.Caption>
              <a href=" https://www.latimes.com/projects/2022-california-primary-election-polling-places-voting-center-ballot-drop-boxes/#nt=0000016a-0e43-dffa-a76b-3f6bfa3f0002-showMedia-liI3promoMedium-contentFooter">
                Where to vote in Southern California
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Water} alt="Third image" />
            <Carousel.Caption>
              <a href=" https://www.salmaloum.com/">
                {' '}
                Tracking the California drought{' '}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}
