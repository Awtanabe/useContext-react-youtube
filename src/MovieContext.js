import React, {useState, createContext} from 'react'



export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
      {/* <Nav/>
      <MovieList/> */}
    </MovieContext.Provider>
  )
}