

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark = blog => {
    const bookmarkArray = [...bookmarks, blog];
    setBookmarks(bookmarkArray);
  }

  console.log(bookmarks);

  return (
    <>

      <Header></Header>
      <div className='w-11/12 mx-auto flex'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>


    </>
  )
}

export default App
