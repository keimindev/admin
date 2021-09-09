import {axiosInstance} from "../../config";
import { getListsStart, getListsSuccess, getListsFail } from './ListsAction'
import { deleteListStart, deleteListSuccess, deleteListFail } from './ListsAction'
import { createListStart, createListSuccess, createListFail } from './ListsAction'
import { updateListStart, updateListSuccess, updateListFail } from './ListsAction'

export const getLists = async ( dispatch ) => {
    dispatch(getListsStart());
    
    try{
        const res =  await axiosInstance.get("/lists", { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(getListsSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(getListsFail());
    }
}


//create
export const createList = async (list, dispatch ) => {
    dispatch(createListStart());
    
    try{
        const res =  await axiosInstance.post("/lists", list, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(createListSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(createListFail());
    }
}


// //UPLOAD
export const updateList = async (list, dispatch ) => {
    dispatch(updateListStart());
    
    try{
        const res =  await axiosInstance.post("/lists", list, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(updateListSuccess(res.data));
    }catch(err){
        console.log(err)
        dispatch(updateListFail());
    }
}




//delete

export const deleteList = async ( id, dispatch ) => {
    dispatch(deleteListStart());
    
    try{
        await axiosInstance.delete("/lists/" + id, { 
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
            },
        });
        dispatch(deleteListSuccess(id));
    }catch(err){
        console.log(err)
        dispatch(deleteListFail());
    }
}