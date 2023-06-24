import React from 'react'
import '@styles/globals.css';

export const metadata = {
  titlle: "Next-AI",
  description:"Discover the AI tags and share the ideas"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout