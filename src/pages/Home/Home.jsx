import React from 'react'
import {Booklist,Cart} from '../../Components'
import Header from '../../Components/HeaderNav/HeaderNav'

const Home = () => {
  return (
    <div className='container'>
      <Booklist/>
      <Cart/>
    </div>
  )
}

export default Home