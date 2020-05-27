
import {} from '../action/actionTypes'

const initState ={
        results:[],
        reqFiltring:{
          query: {
              query_params: {
                from: 0,
                num: 10,
                sort: 'score',
                sort_order: 'asc',
                full_text_search_in: ["title", "developer_name"],
                full_text_search_flag: '',
                full_text_term: 'live'
              }
          }
        }
}

const filtringReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'value':
            
            break;
    
        default: return {...state}
    }    
}                           

export default filtringReducer;