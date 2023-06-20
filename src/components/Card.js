import React from 'react'

function Card({post}) {
  return (
    <div>
            <p className='font-bold'>{post.title}</p>
            <p>By <span>{post.author}</span> on {post.category}</p>
            <p>Posted on <span>{post.date}</span></p>
            <p>{post.content}</p>
            <div>{post.tags.map(tag => <span key ={tag}>#{tag}</span>)}</div>
    </div>
  )
}

export default Card
