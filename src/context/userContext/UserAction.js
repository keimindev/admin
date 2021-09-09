export const getUsersStart = () => ({
    type: "GET_USERS_START",
})

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users
})

export const getUsersFail = () => ({
    type: "GET_USERS_FAIL",
})


export const createUserStart = () => ({
    type: "CREATE_USER_START",
})

export const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
})

export const createUserFail = () => ({
    type: "CREATE_USER_FAIL",
})




// export const updateMovieStart = () => ({
//     type: "UPDATE_MOVIE_START",
// })

// export const updateMovieSuccess = (movie) => ({
//     type: "UPDATE_MOVIE_SUCCESS",
//     payload: movie,
// })

// export const updateMovieFail = () => ({
//     type: "UPDATE_MOVIE_FAIL",
// })




export const deleteUserStart = () => ({
    type: "DELETE_USER_START",
})

export const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id
})

export const deleteUserFail = () => ({
    type: "DELETE_USER_FAIL",
})

