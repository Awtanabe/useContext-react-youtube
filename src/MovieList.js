import React, {useState} from 'react'
import Movie from './Movie'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 2323
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 213131
    },
    {
      name: 'Inception',
      price: '$10',
      id: 232344
    }
  ])
  return(
    <div>
      {movies.map((movie) => (<Movie {...movie}/>))}
    </div>
  )
}

export default MovieList;