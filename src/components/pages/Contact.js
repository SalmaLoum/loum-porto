import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Contact() {
  //For passowrd validation
  const passwordValue = useRef()
  const [passwordError, setPassworError] = useState(false)
  const handlePasswordBlur = (e) => {
    const value = passwordValue.current.value
    if (value.length < 8 || value.length > 20) {
      setPassworError(true)
    }
  }
  //For email validation
  const emailValue = useRef()
  const [emailError, setEmailError] = useState(false)
  const handleEmailBlur = (e) => {
    const values = emailValue.current.values
    if (
      values !==
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    ) {
      setEmailError(true)
    }
  }

  return (
    <div id="contact" className="horizontal-box body-color">
      <h2>
        <pre> {'<! Get in Touch> '} </pre>
      </h2>
      <Form>
        <Form.Group>
          <>
            <Form.Label htmlFor="inputEmail4">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail4"
              aria-describedby="emailHelpBlock"
              ref={emailValue}
              onBlur={handlePasswordBlur}
            />
            {emailError && (
              <Form.Text id="emailHelpBlock">
                Please enter a valid email address.
              </Form.Text>
            )}
          </>
        </Form.Group>
        <br />

        <Form.Group>
          <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              ref={passwordValue}
              onBlur={handleEmailBlur}
            />
            {passwordError && (
              <Form.Text id="passwordHelpBlock">
                You need to enter a password betweek 8 and 20 characters long.
              </Form.Text>
            )}
          </>
        </Form.Group>

        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button type="submit" animation="glow">
          Submit
        </Button>
      </Form>
    </div>
  )
}
