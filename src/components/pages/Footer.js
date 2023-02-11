import React from 'react'
import Github from '../../assets/images/github.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Website from '../../assets/images/website.png'
import Twitter from '../../assets/images/twitter.png'

function Footer() {
  return (
    <footer className="footer" width="100" expand="lg">
      <div className="content has-text-centered">
        <p>
          <a
            href="https://github.com/Salmaloum"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github logo" width="80"></img>
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/salmaloum/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn logo" width="80"></img>
          </a>{' '}
          |{' '}
          <a href="https://www.salmaloum.com" target="_blank" rel="noreferrer">
            <img src={Website} alt="Website logo" width="80"></img>
          </a>{' '}
          |{' '}
          <a
            href="https://twitter.com/salmaloum"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter logo" width="80"></img>
          </a>
        </p>

        <div>
          <p className="copyright-text">
            {' '}
            © Made with &#10085; by 2023 Salma Loum.{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
