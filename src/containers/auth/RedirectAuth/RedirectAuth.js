import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class RedirectAuth extends Component {
    render() {
        let redirect = null;
        if(!this.props.isAuth){
            redirect = <Redirect to='/auth'/>
        }
        return redirect
        
    }
}

const mapStateToProps =(state) =>{
    return {
        isAuth:state.auth.token != null ? true : false,
    }
}

export default connect(mapStateToProps,null)(RedirectAuth);