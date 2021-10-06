import React from 'react'
 
const CustomTag = (props) => {
    const Tag = `${props.is}`
  return (
    <Tag className={props.className}>
        {props.content}
    </Tag>
  )
}
 
export default CustomTag
 