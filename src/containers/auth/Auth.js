import React, { Component } from 'react'
import './style.css'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {auth} from '../../action/authActions'
import {ClipLoader} from "react-spinners";


class Auth extends Component {

	state ={
			email:'',
			password:'',
		
	}

	onChangeHandle =(e)=>{
		
		this.setState({[e.target.name]:e.target.value})
	}

	loginHandle =(e)=>{
		e.preventDefault()
		this.props.auth({email:this.state.email,password:this.state.password});

	}

    render() {

		const {error,isAuth} = this.props
		const {email,password} = this.state

		let redirect = null;
		
		let message =null;
		if (error !== null) {
			 message =  error;
		} 
		if (isAuth){
			 redirect = <Redirect to='/'/>;	
		}
		
		
		return (

		<div class="container login">

			{redirect}
			<div class="row">
				<div class="col-lg-3 col-md-2"></div>
				<div class="col-lg-6 col-md-8 login-box">
					<div class="col-lg-12 login-key">
						<i class="fa fa-key" aria-hidden="true"></i>
					</div>
					<div class="col-lg-12 login-title">
						LOGIN
					</div>
					<div class="col-lg-12 login-form">
						<div class="col-lg-12 login-form" > 
						{/* style={{ textAlign:'center'}} */}

						{ !this.props.loading ?
						(<form onSubmit={ this.loginHandle}  >
							<div class="form-group">
								<label class="form-control-label">Email</label>
								<input type="email" name="email" onChange={this.onChangeHandle} defaultValue={email}  class="form-control"/>
							</div>
							<div class="form-group">
								<label class="form-control-label">PASSWORD</label>
								<input type="password" name="password" onChange={this.onChangeHandle} defaultValue={password}  class="form-control" i/>
							</div>

							<div class="col-lg-12 loginbttm">
								<div class="col-lg-6 login-btm login-text">
									{message}
									
								</div>
								<div class="col-lg-6 login-btm login-button">
									<button type="submit" class="btn btn-outline-primary">LOGIN</button>
								</div>
							</div>
						</form>) 
						: (
						<div style={{ textAlign:'center'}}>
							<ClipLoader color='#fff' size='80'/>
						</div>
							
						)
						}
						</div>
					</div>
					<div class="col-lg-3 col-md-2"></div>
				</div>
			</div>
		</div>

        )
    }
}

const mapStateToProps = (state) => {

	return {
		isAuth:state.auth.token != null ? true : false,
		error:state.auth.error,
		loading:state.auth.loading
	}

}

export default  connect(mapStateToProps,{auth})(Auth) 

