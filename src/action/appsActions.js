import {
    GET_APPS,
    GET_FILTRED_APPS,
    FEATCHING_APPS,
    FEATCHING_FILTRED_APPS,
    SELECTED_APP
} from '../action/actionTypes'

import axios from 'axios'

const body = {
    query: {
        query_params: {
            from: 0,
            num: 10,
            sort: 'score',
            sort_order: 'asc',
            full_text_search_in: ["title", "developer_name"],
            full_text_search_flag: '',
            full_text_term: ''
        }
    }
}

const Featching_APP = (type, dispatch) => {
    return dispatch({
        type,
        // payload:{
        //     loading:true
        // }
    })
}

const GET_APP = (type, dispatch, res) => {
    return dispatch({
        type,
        payload: res.data.results

    })
}


export const gettAllApps = () => async (dispatch) => {

    Featching_APP(FEATCHING_APPS, dispatch);

    axios.post('https://data.42matters.com/api/v2.0/android/apps/query.json?access_token=f38dbd4fe51aad70cea2281e0783de97178bc466', body)
        .then((res) => GET_APP(GET_APPS, dispatch, res))
}


export const getFiltredApps = (body) => async (dispatch) => {

    Featching_APP(FEATCHING_FILTRED_APPS, dispatch);

    axios.post('https://data.42matters.com/api/v2.0/android/apps/query.json?access_token=f38dbd4fe51aad70cea2281e0783de97178bc466', body)
        .then((res) => GET_APP(GET_FILTRED_APPS, dispatch, res))

}

export const selectedApp = (id) => {
    return {
        type: SELECTED_APP,
        payload: id
    }
}