import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActionCreator from '../../action/authActions'
import './style.css'
import Axios from 'axios'
class Profile extends Component {

    state = {
        loading:false,
		error:null,
		edit:false,
		user:null,
		country:'Morocco',
		prevUserDate:{
		},
		userImage:null
    }										

    componentDidMount(){
        const token = this.props.token;
        this.props.getMe(token);
	}
	
	static getDerivedStateFromProps (nextProps,prevState){
        if (nextProps.loading !== prevState.loading) {
			
	         return {
                loading:nextProps.loading,
				user:nextProps.user
            }
        }
        return null
	}
	  
	BeforeChengeUser(user){
		this.setState({prevUserDate:user})
	}

	editHandle =()=>{
		this.setState({edit:true})
		this.BeforeChengeUser(this.props.user);
	}
	saveHandle =()=>{
		const {user} = this.state
		const {token} = this.props
		const payload = {
			newUser:{
				...user,
				image:this.state.userImage,
				token
			},
			
		}
		this.props.updateMe(payload);
		this.setState({edit:false})
	}
	cancelHandle =()=>{
		this.setState({edit:false,user:this.state.prevUserDate})
	}

	changeHndle = (e)=>{
		const newUser = {
			[e.target.name]:e.target.value
		}
		this.setState({user:newUser})
	}
	handleFile =(e)=>{
		this.setState({userImage:e.target.files['0']})
	}
	
    renderContent = ()=>{
        let content = null
        const {user} = this.state
        if(this.state.loading) {
        	content = (<div>loading...</div>)
           
				}
				else if(user) {

          const {name,email} = this.state.user;
            content = (
						<React.Fragment>
						
							<div className='col-md-3 text-center' >
								<img src="./assets/user-placeholder.jpg" width='60%' class="img-fluid rounded" alt="userpicture" />
								<div class="form-group">
								  <label for=""></label>
								  <input type="file" class="form-control-file" onChange={this.handleFile} name="picture" id="" placeholder="" aria-describedby="fileHelpId"/>
								</div>
							</div>
							<div className='col-md-9 user-info' >
								<div class="row mb-4 " >
										<div class="col-md-2 text-center" >
											Name
										</div>
										<div class="col-md-9" >
											<div class="form-group">
													<input type="text"
														class="form-control" onChange={this.changeHndle} value={name} name='name' placeholder="" disabled = {(this.state.edit)? "" : "disabled"} />
												</div>
										</div>
								</div>
								<div class="row mb-4">
										<div class="col-md-2 text-center" >
											Email
										</div>
										<div class="col-md-9">
											<div class="form-group">
													<input type="email"
														class="form-control" onChange={this.changeHndle} value={email} name='email'  placeholder="" disabled = {(this.state.edit)? "" : "disabled"} />
												</div>
										</div>
								</div>
								<div class="row mb-4">
										<div class="col-md-2 text-center">
											country
										</div>
										<div class="col-md-9">
											<div class="form-group">
												<input type="text"
													class="form-control" value={'Morocco'} name='country'  placeholder="" disabled = {(this.state.edit)? "" : "disabled"}  />
											</div>
										</div>
								</div>
								<div class="row mb-4">
								{!this.state.edit ?
									<div class="col-md-2 text-center">
										<input name="" id="" onClick={this.editHandle} class="btn btn-danger btn-block" type="button" value="Edit"/>
									</div> :
									(<React.Fragment>
										<div class="col-md-2">
											<input name="" id="" onClick={this.saveHandle}  class="btn btn-primary btn-block" type="button" value="Save"/>
										</div> 
										<div class="col-md-2">
											<input name="" id="" onClick={this.cancelHandle}  class="btn btn-warning btn-block" type="button" value="Cancel"/>
										</div>
									</React.Fragment>
									) }								
								</div>
							</div>
						</React.Fragment>


            )
        }
        return content
    }
    render() {
        return this.renderContent();
    }
}
const mapStateToProps = (state)=>{
  return {
		user:state.auth.user,
		loading:state.auth.loading,
		token:state.auth.token,
		error:state.auth.token
}
}

const getMe = authActionCreator.getMe;
const updateMe = authActionCreator.updateMe;

export default connect(mapStateToProps,{getMe,updateMe})(Profile) 