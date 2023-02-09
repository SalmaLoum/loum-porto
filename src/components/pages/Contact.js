import React from 'react';

export default function Contact() {
  return (
      <div id="contact" class="horizontal-box">
        <h2><pre>  < ! Get in Touch > </pre></h2>
        <form>
          <ul>
            <li>
              <label class="form-text" for="name">Name:</label>
              <input type="text" id="name" name="user-name" />
            </li>
            <li>
              <label class="form-text" for="email">Email:</label>
              <input type="text" id="email" name="user-email" />
            </li>
            <li>
              <label class="form-text" for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style="height: 200px"
              ></textarea>
            </li>
          </ul>
          <li>
            <button type="submit">SEND</button>
          </li>
        </form>
      </div>
  );
}
