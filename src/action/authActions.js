import * as actionTypes from './actionTypes'
import axios from 'axios'

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

const getMeStart = () => {
    return {
        type: actionTypes.GET_ME_START,
    }
}

const getMeSuccess = (userDetails) => {
    return {
        type: actionTypes.GET_ME_SUCCESS,
        user: userDetails
    }
}


const getMeFail = (error) => {
    return {
        type: actionTypes.GET_ME_SUCCESS,
        error
    }
}

const uploadStart = ()=>{
    return {
        type:actionTypes.UPLOAD_START
    }
}

const uploadSuccess = (photo)=>{
    return {
        type:actionTypes.UPLOAD_SUCCESS,
        photo
    }
}

const uploadFail = (error)=>{
    return {
        type:actionTypes.UPLOAD_FAIL,
        error
    }
}

export const auth = (credentials) => async (dispatch) => {

    dispatch(authStart());

    try {

        const res = await axios.post('http://localhost:5000/api/v1/auth/login', credentials)

        const user = {
            ...res.data.user
        }

        localStorage.setItem('token', user.token)
        localStorage.setItem('userId', user.userId)
        localStorage.setItem('expiredIn', new Date(new Date().getTime() + (24 * 3600 * 1000)))

        dispatch(authSuccess(res.data.user))

    } catch (err) {
        dispatch(authFail(err.response.data.error))
    }

}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiredIn');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOG_OUT,
    }
}


export const CheckAuthState = () => (dispatch) => {

    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout())
    } else {
        const expiredIn = localStorage.getItem('expiredIn');
        if (expiredIn <= new Date()) {
            dispatch(logout())
        } else {
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess({
                token,
                userId
            }))
        }
    }
}



export const getMe = (token) => async (dispatch) => {
    dispatch(getMeStart());
    try {
        const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch(getMeSuccess(res.data.user))
    } catch (err) {
        ///dispatch(getMeFail(err.response.data.error)) 
    }
}


export const updateMe = (payload) => async (dispatch) => {
    dispatch(getMeStart());
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/updateMe', payload.newUser, {
            headers: {
                'Authorization': `Bearer ${payload.newUser.token}`
            }
        })
        dispatch(getMeSuccess(res.data.newUser))
    } catch (err) {
        ///dispatch(getMeFail(err.response.data.error)) 
    }
}

// Complet Upload User Image 
export const  uploadImage = (token,data) => async (dispatch) =>{
    dispatch(uploadStart())
    try {
        const res = await axios.put('http://localhost:5000/api/v1/auth/upload',data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch(uploadSuccess(res.data.photo)); 
    } catch (err) {
        dispatch(uploadFail(err.response.data.error)) 
    }
}