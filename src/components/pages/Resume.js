import React from 'react'
import Resume from '../../assets/images/Salma_Loum_CV.pdf'

export default function About() {
  return (
    <div>
      <iframe
        src={Resume}
        style={{
          maxWidth: 640,
          width: '100%',
          height: '100%',
          overflow: 'auto',
        }}
      ></iframe>
    </div>
  )
}
