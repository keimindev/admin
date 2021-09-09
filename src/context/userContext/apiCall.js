import {axiosInstance} from "../../config";
import { getUsersStart, getUsersSuccess, getUsersFail } from './UserAction'
import { deleteUserStart, deleteUserSuccess, deleteUserFail } from './UserAction'
import { createUserStart, createUserSuccess, createUserFail } from './UserAction'
// import { updateMovieStart, updateMovieSuccess, updateMovieFail } from './UserAction'

export const getUsers = async ( dispatch ) => {
    dispatch(getUsersStart());
    
    try{
        const res =  await axiosInstance.get("/users", { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(getUsersSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(getUsersFail());
    }
}



//delete
export const deleteUser = async ( id, dispatch ) => {
    dispatch(deleteUserStart());
    
    try{
        await axiosInstance.delete("/users/" + id, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(deleteUserSuccess(id));
    }catch(err){
        console.log(err)
        dispatch(deleteUserFail());
    }
}