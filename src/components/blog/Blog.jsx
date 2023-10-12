import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Blog = ({username, title, image, _id}) => {
  const navigate = useNavigate()
  return (
    <section className='blog-container' onClick={() => navigate(`/blog/${_id}`)}>
        <header><h3>{title}</h3></header>
        <footer>written by {username}</footer>
    </section>
  )
}
