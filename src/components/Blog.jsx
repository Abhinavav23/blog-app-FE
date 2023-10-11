import React from 'react'

export const Blog = ({username, title, image, _id}) => {

  return (
    <section className='blog-container' onClick={() => console.log("id", _id)}>
        <header><h3>{title}</h3></header>
        <footer>written by {username}</footer>
    </section>
  )
}
