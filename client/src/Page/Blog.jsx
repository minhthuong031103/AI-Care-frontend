import React from 'react'
import { Category } from '../components/Category'
import Search from '../components/Search'
import { Blogs } from '../components/Doc.jsx/Blogs'
import Footerr from '../components/Footerr';

export default function Blog() {
  return (
    <div>
          <Category />
          <Search />
          <Blogs />
          <Footerr/>
    </div>
  )
}
