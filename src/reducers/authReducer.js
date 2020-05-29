import * as actionTypes from '../action/actionTypes'
const initState ={
    token: null,
    userId: null,
    error: null,
    loading: false,
    user:null,
    
}

const authReducer = (state = initState, action ) =>{

    switch (action.type) {
        case actionTypes.AUTH_START: return {
            ...state,
            loading:true
        }

        case actionTypes.AUTH_SUCCESS: return {
            ...state,
            loading:false,
            error: null,
            userId:action.user.userId,
            token:action.user.token
        }

        case actionTypes.AUTH_FAIL: return {
            ...state,
            loading:false,
            userId:null,
            token:null,
            error:action.error,
        }    
        case actionTypes.LOG_OUT: return {
            ...state,
            loading:false,
            userId:null,
            token:null        
        }   
        case actionTypes.GET_ME_START: return {
            ...state,
            loading:true,
        }     
        case actionTypes.GET_ME_SUCCESS: return {
            ...state,
            loading:false,
            error: null,
            user:action.user
        }    
        case actionTypes.GET_ME_FAIL: return {
            ...state,
            loading:false,
            error:action.error,
        }    
        case actionTypes.UPLOAD_START: return {
            ...state,
            loading:true,
        }     
        case actionTypes.UPLOAD_SUCCESS: return {
            ...state,
            loading:false,
            error: null,
            user:{
                ...state.user,
                photo:action.photo
            }
        }    
        case actionTypes.UPLOAD_FAIL: return {
            ...state,
            loading:false,
            error:action.error,
        }    

        default:return {...state}
    }
}

export default authReducer 