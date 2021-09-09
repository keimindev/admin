const UserReducer = (state, action) =>{
    switch (action.type){
        case 'GET_USERS_START': 
            return ({
                users: [],
                isFetching: true,
                error: false,
            })        
            case 'GET_USERS_SUCCESS': 
            return ({
                users: action.payload,
                isFetching: false,
                error: false,
            })

            case 'GET_USERS_FAIL': 
            return ({
                users: [],
                isFetching: false,
                error: true,
            })


            // case 'CREATE_MOVIE_START': 
            // return ({
            //     ...state,
            //     isFetching: true,
            //     error: false,
            // })        
            // case 'CREATE_MOVIE_SUCCESS': 
            // return ({
            //     movies: [...state.movies, action.payload],
            //     isFetching: false,
            //     error: false,
            // })

            // case 'CREATE_MOVIE_FAIL': 
            // return ({
            //     ...state,
            //     isFetching: false,
            //     error: true,
            // })


            // case 'UPDATE_MOVIE_START': 
            // return ({
            //     ...state,
            //     isFetching: true,
            //     error: false,
            // })        
            // case 'UPDATE_MOVIE_SUCCESS': 
            // return ({
            //     movies: state.movies.map( movie => movie._id === action.payload._id && action.payload ),
            //     isFetching: false,
            //     error: false,
            // })

            // case 'UPDATE_MOVIE_FAIL': 
            // return ({
            //     ...state,
            //     isFetching: false,
            //     error: true,
            // })

            case 'DELETE_USER_START': 
            return ({
                ...state,
                isFetching: true,
                error: false,
            })        
            case 'DELETE_USER_SUCCESS': 
            return ({
                users: state.users.filter(( user ) => (user._id !== action.payload)),
                isFetching: false,
                error: false,
            })

            case 'DELETE_USER_FAIL': 
            return ({
                ...state,
                isFetching: false,
                error: true,
            })

            default: return { ...state };
        }
    }

export default UserReducer;