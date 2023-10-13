import React from 'react'

export const Comment = ({message, like}) => {
  return (
   <aside className='comment-container'>
    <p>{message}</p>
    <p>Likes: {like}</p>
   </aside>
  )
}
