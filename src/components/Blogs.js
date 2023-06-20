import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from "./Spinner"
import Card from './Card';

function Blogs() {

  const {loading, posts, fetchData} = useContext(AppContext);
  useEffect(()=> {
    fetchData();
  }, [])
  return (
    <div>
      {
        loading ? <Spinner></Spinner> : 
          posts.length === 0 ? (<div><p>No Post Found</p></div>) :         (posts.map(post => <Card post={post} key={post.id} />))
      }
    </div>
  )
}

export default Blogs
