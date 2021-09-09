import { useState, useContext, useEffect } from "react";
import "./newlist.css";
import { getMovies } from "../../context/movieContext/apiCall";
import { createList } from "../../context/listContext/apiCall";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListsContext";
import { useHistory } from "react-router-dom";


export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();


  //for calling movie contents
  const { movies, dispatch : dispatchMovie } = useContext(MovieContext);
  const { dispatch } = useContext(ListContext);


  //get movie contents
  useEffect( () => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])


  const handleChange = (e) => {
    const value = e.target.value;
    setList( {...list, [e.target.name]: value});

  }


  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name] : value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch)
    history.push('/lists')
  
  } 



  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="form-left">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Action" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select type="active" name="type" onChange={handleChange}>
            <option value="">Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        </div>
        <div className="form-right">
        {/* select movie contents */}
        <div className="addProductItem">
          <label>Content</label>
          <select multiple type="active" name="content" onChange={handleSelect} style={{height:"360px"}}>
            {movies.map( (movie) => (
               <option key={movie._id} value={movie._id}>{movie.title}</option>  
            ))}
          </select>
        </div>
        </div> 
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
