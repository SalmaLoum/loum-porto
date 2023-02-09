import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="horizontal-box">
      <h2>
        <pre> {'< ! Get in Touch > '} </pre>
      </h2>
      <form>
        <label className="form-text" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" name="user-name" />

        <label className="form-text" htmlFor="email">
          Email:
        </label>
        <input type="text" id="email" name="user-email" />

        <label className="form-text" htmlFor="subject">
          Subject
        </label>
        {/* <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height: 200px"
        ></textarea> */}

        <button type="submit">SEND</button>
      </form>
    </div>
  )
}
