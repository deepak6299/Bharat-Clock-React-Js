import React from 'react'

export default function CurrentTime() {

    let time=new Date()
  return (
    <div >
      <p className='currenttime'>
        This is the current time:{time.toLocaleDateString()} {time.toLocaleTimeString()}
      </p>
    </div>
  )
}
