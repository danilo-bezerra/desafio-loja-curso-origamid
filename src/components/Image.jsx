import React from 'react'

const Image = ({src, alt}) => {
  return (
    <img style={{width: '100%', borderRadius: '8px'}}src={src} alt={alt}/>
  )
}

export default Image