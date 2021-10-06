import React, { useEffect } from 'react'
 
const Logo = (props) => {
  return (
    <img 
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  )
}
 
export default Logo
 