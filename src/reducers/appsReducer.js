import {GET_APPS,GET_FILTRED_APPS,FEATCHING_APPS,FEATCHING_FILTRED_APPS,SELECTED_APP} from '../action/actionTypes'
const initState ={
    results :[],
    app:{},
    loading:true
}
const appsReducer =(state=initState,action)=>{
    switch (action.type) {
        case GET_APPS:{
                    return{
                    ...state,
                    loading:false,
                    results : action.payload
                }
            }
        case FEATCHING_APPS:{
                return{
                ...state,
                loading:true
            }
        }

        case FEATCHING_FILTRED_APPS:{
            return{
            ...state,
            loading:true
        }
    }


        case GET_FILTRED_APPS:{
            return {
                ...state,
                loading:false,
                results : action.payload
            }
        }
        case SELECTED_APP:{
            return {
                ...state,
                app:state.results.find((item,index)=>item.package_name === action.payload)
            }
        }
        default:    
            return {...state}
    }

    
}

export default appsReducer


