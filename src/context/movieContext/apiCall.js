import {axiosInstance} from "../../config";
import { getMoviesStart, getMoviesSuccess, getMoviesFail } from './MovieAction'
import { deleteMovieStart, deleteMovieSuccess, deleteMovieFail } from './MovieAction'
import { createMovieStart, createMovieSuccess, createMovieFail } from './MovieAction'
import { updateMovieStart, updateMovieSuccess, updateMovieFail } from './MovieAction'

export const getMovies = async ( dispatch ) => {
    dispatch(getMoviesStart());
    
    try{
        const res =  await axiosInstance.get("/movies", { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(getMoviesSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(getMoviesFail());
    }
}


//create
export const createMovie = async (movie, dispatch ) => {
    dispatch(createMovieStart());
    
    try{
        const res =  await axiosInstance.post("/movies", movie, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(createMovieSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(createMovieFail());
    }
}


//UPDATE
export const updateMovie = async (movie, dispatch ) => {
    dispatch(updateMovieStart());
    
    try{
        const res =  await axiosInstance.put("/movies", movie, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(updateMovieSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(updateMovieFail());
    }
}




//delete

export const deleteMovie = async ( id, dispatch ) => {
    dispatch(deleteMovieStart());
    
    try{
        await axiosInstance.delete("/movies/" + id, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(deleteMovieSuccess(id));
    }catch(err){
        console.log(err)
        dispatch(deleteMovieFail());
    }
}