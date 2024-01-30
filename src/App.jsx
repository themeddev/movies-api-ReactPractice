import { useEffect, useState } from 'react'

import PostsList from './components/PostsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostDetail from './components/PostDetail'

function App() {

    const [posts , setPosts] = useState([])
    const [filtredPosts , setFiltredPosts] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.org/posts').then(
        res => res.json()
      ).then(
        data => setPosts(data),
        data => setFiltredPosts(data)
      )
    },[])
    



  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList posts={posts} filtredPosts={filtredPosts} setFiltredPosts={setFiltredPosts} />} />
        <Route path="/:id" element={<PostDetail filtredPosts={filtredPosts}/>} />
      </Routes>
    </Router>
  )
}

export default App
