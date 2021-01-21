import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = (props) => { 
  const [movies, setMovies] = useContext(MovieContext)
  return(
    <div>
      <h3>Akifumi </h3>
      <p>list orf movies: {movies.length}</p>
    </div>
  )
}

export default Nav;