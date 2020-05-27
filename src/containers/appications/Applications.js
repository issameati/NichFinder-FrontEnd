import React, { Component } from 'react'
import AppItem from '../../components/appItem/appItem'
import {gettAllApps} from '../../action/appsActions'
import {ClipLoader} from "react-spinners";
import { connect } from 'react-redux';


class Applications extends Component {
    state ={
      results:[],
      loading:true
    }
   
    componentDidMount= async ()=>{
        this.props.gettAllApps();
    }
    static getDerivedStateFromProps(nextProps, prevProps){
      if(nextProps.loading!==prevProps.loading){
        return { loading: nextProps.loading};
     }
     else return null;
   }
    // componentWillReceiveProps(nextProp){
    //   const {loading} = nextProp;
    //   this.setState({loading})
    // }

    render() { 
      const {apps} = this.props;
        const appList =  apps.map((app,index) => <AppItem key={index} app={app} />)
        return (
            <div className="col-md-10">
            
                <table className="table  table-hover" >
                  <thead  style={{color:'white',backgroundColor:'#0f2346'}} >
                    <tr>
                      <th scope="col"> <i className="fa fa-tag" aria-hidden="true"></i> TITLE</th>
                      <th scope="col" colSpan="2"><i className="fa fa-cube" aria-hidden="true"></i> PACKAGE NAME</th>
                      <th scope="col"> <i className="fa fa-list" aria-hidden="true"></i> CATEGORY</th>
                      <th scope="col"> <i className="fa fa-id-badge" aria-hidden="true"></i> DEVELOPER</th>
                      <th scope="col"> <i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD</th>
                      <th scope="col"> <i className="fa fa-paper-plane-o" aria-hidden="true"></i> CONTACT</th>
                      <th scope="col"> <i className="fa fa-star-half-o" aria-hidden="true"></i> RATING</th>
                      <th scope="col"> <i className="fa fa-cog" aria-hidden="true"></i> SDKS</th>
                      <th scope="col"> <i className="fa fa-external-link" aria-hidden="true"></i> WEBSITE</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.loading ? null:appList}
                  </tbody>
                </table>
               
                {this.state.loading ?  <div style={{textAlign: 'center',marginTop: '14%'}}><ClipLoader className=''  color="#0f2346"  size='100px'/></div>  :null}

              </div>              
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    apps:state.apps.results,
    loading:state.apps.loading
    
  }
}


export default  connect(mapStateToProps,{gettAllApps})(Applications);