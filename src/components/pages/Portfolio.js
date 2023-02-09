import React from 'react'
import image1 from '../../assets/images/topper-600.gif'

export default function Blog() {
  return (
    <div id="portfolio" className="horizontal-box">
      <h2>
        <pre>{' <Projects />'}</pre>
      </h2>
      <figure>
        {/* <!--First project section --> */}
        <img className="large-image" src={image1} />
        <figcaption>
          <a href=" https://www.latimes.com/projects/what-to-do-after-a-sexual-assault/">
            <pre>
              {' '}
              After sexual assault : A guide to your rights and choices{' '}
            </pre>
          </a>
        </figcaption>
      </figure>
      <div>
        {/* <!--The rest of projects section --> */}
        <figure className="lower-images">
          <img
            className="small-image"
            src="assets/images/button-1.png"
            alt=""
          />
          <figcaption>
            <a href=" https://www.latimes.com/projects/2022-california-primary-election-polling-places-voting-center-ballot-drop-boxes/#nt=0000016a-0e43-dffa-a76b-3f6bfa3f0002-showMedia-liI3promoMedium-contentFooter">
              Where to vote in Southern California
            </a>
          </figcaption>
        </figure>
        <figure className="lower-images">
          <img
            className="small-image"
            src="assets/images/button-2.png"
            alt=""
          />
          <figcaption>
            <a href=" https://www.salmaloum.com/"> Work Examples? </a>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
