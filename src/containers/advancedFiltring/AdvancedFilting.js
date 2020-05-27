import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import {getFiltredApps} from '../../action/appsActions'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const appCat = ["AUTO_AND_VEHICLES","BEAUTY","BOOKS_AND_REFERENCE","BUSINESS","COMMUNICATION","COMICS","DATING","EDUCATION","ENTERTAINMENT","EVENTS","FOOD_AND_DRINK","FINANCE","HEALTH_AND_FITNESS","HOUSE_AND_HOME","LIBRARIES_AND_DEMO","LIFESTYLE","MAPS_AND_NAVIGATION","MEDICAL","MUSIC_AND_AUDIO","NEWS_AND_MAGAZINES","PARENTING","PERSONALIZATION","PHOTOGRAPHY","PRODUCTIVITY","SHOPPING","WEATHER","VIDEO_PLAYERS","TRAVEL_AND_LOCAL","TOOLS","SPORTS","SOCIAL"]
const gameCat = ["GAME_WORD","GAME_TRIVIA","GAME_STRATEGY","GAME_SPORTS","GAME_SIMULATION","GAME_ROLE_PLAYING","GAME_RACING","GAME_PUZZLE","GAME_EDUCATIONAL","GAME_CASINO","GAME_CARD","GAME_ARCADE","GAME_BOARD","GAME_ADVENTURE","GAME_ACTION"]

class AdvancedFilting extends Component {

    state ={
        body:{
             query: {
                query_params: {
                  from: 0,
                  num: 10,
                  sort: 'score',
                  sort_order: 'asc',
                  full_text_search_in: ["title", "developer_name"],
                  full_text_search_flag: '',
                  full_text_term: '',
                }
            }},
            startDate:null,
            endDate:null,
            datePick:false,
            selectedCatApp:'',
            selectedCatGame:''
    }
    

    searchHandling =(e)=>{

        let body = {...this.state.body}
        body.query.query_params.full_text_term = e.target.value;
        this.props.getFiltredApps(body);
    } 

    marketStatusHandling =(e)=>{

        let body = {...this.state.body}
        const ms = e.target.value;
        body.query.query_params.market_status = ms;
        this.props.getFiltredApps(body);
    }

    releaseDateHandling =(e)=>{

        this.setState({datePick:false,startDate:null,endDate:null})
        let body = {...this.state.body}

        delete  body.query.query_params.released_after;
        delete body.query.query_params.released_before;
        
        const rd = e.target.value;
        if(rd==='any')  body.query.query_params.released_after_dynamic = 'date';
        else {
            body.query.query_params.released_after_dynamic = rd;
        }
       
        this.props.getFiltredApps(body);

    }
    
    showDatepicker =()=>{
        this.setState({datePick:true})
    }

    customReleaseDateHandling =()=>{
        let body = {...this.state.body}
         body.query.query_params.released_after_dynamic = 'date';
         body.query.query_params.released_after = this.state.startDate._d;
         body.query.query_params.released_before = this.state.endDate._d;
        this.props.getFiltredApps(body);
    }

    handleCatApp =(e)=>{

        this.setState({selectedCatApp:e.target.value})
        let body = {...this.state.body}
        let cat_keys=[e.target.value];
        body.query.query_params.cat_keys = cat_keys;
        this.props.getFiltredApps(body);

    }

    handleCatGame =(e)=>{
        this.setState({selectedCatGame:e.target.value})
        let body = {...this.state.body}
        let cat_keys=[e.target.value];
        body.query.query_params.cat_keys = cat_keys;
       this.props.getFiltredApps(body);
    }

    restHandle =()=>{
        
        let body = { query: {
                query_params: {
                    from: 0,
                    num: 10,
                    sort: 'score',
                    sort_order: 'asc',
                    full_text_search_in: ["title", "developer_name"],
                    full_text_search_flag: '',
                    full_text_term: '',
                }
            }
        }

        this.props.getFiltredApps(body);
    }



    render() {
        if (this.state.startDate && this.state.endDate) {
            this.customReleaseDateHandling();
        }
       
        return (
          <div className="col-md-2 advanced-filtring p-3">
              <form>
              <div className="form-group ">
                    <input type="text" onChange={this.searchHandling} className="custom-input" placeholder="Search"/>
                    {/* <small id="emailHelp" className="form-text text-muted">Search in title, developer name...</small> */}
                </div>
                <div className="form-group">
                    <span htmlFor="IDENTIFIER">IDENTIFIER <i className="fa fa-question-circle" aria-hidden="true"></i> </span>
                    <input type="text" className="custom-input" id="IDENTIFIER" placeholder="separate by comma"/>
                    <small id="IDENTIFIER" className="form-text text-muted">Package names</small>
                </div>
                <div>
                    <span>PUBLISHED STATUS  <i className="fa fa-question-circle" aria-hidden="true"></i></span>
                    <div>
                        <input type="radio" value="PUBLISHED" onChange={this.marketStatusHandling}  name="ms" id="rsp" className="mr-2"/>
                        <label htmlFor="rsp"> PUBLISHED </label>
                    </div>
                    <div>
                        <input type="radio" name="ms" value="UNPUBLISHED" onChange={this.marketStatusHandling} id="rdu" className="mr-2"/>
                        <label htmlFor="rdu"> UNPUBLISHED </label>
                    </div>
                </div>

                {/* Realese date */}
                <div>
                    <span>RELEASED DATE  <i className="fa fa-question-circle" aria-hidden="true"></i></span>
                    <div>
                        <input type="radio" id="rd1" onChange={this.releaseDateHandling} value="any"   name="rd" className="mr-2"/>
                        <label htmlFor="rd1"> any </label>
                    </div>
                    <div>
                        <input type="radio" id="rd2" onChange={this.releaseDateHandling} value="last_month"  name="rd" className="mr-2"/>
                        <label htmlFor="rd2"> Last Month </label>
                    </div>
                    <div>
                        <input type="radio" id="rd3" onChange={this.releaseDateHandling}  value="last_week"  name="rd" className="mr-2"/>
                        <label htmlFor="rd3"> Last Week </label>
                    </div>
                    <div>
                        <input type="radio" id="rd4" onChange={this.releaseDateHandling} value="last_day" name="rd" className="mr-2"/>
                        <label htmlFor="rd4" > Last 24 Hours </label>
                    </div>
                    <div>
                         <input type="radio" id="rd5" onChange={this.showDatepicker} value="" name="rd" className="mr-2"/>
                        <label htmlFor="rd5" > Custom Date Range </label>
                        { (this.state.datePick ? <DateRangePicker
                            startDate={this.state.startDate } 
                            startDateId="id"
                            endDate={this.state.endDate } 
                            endDateId="id" 
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} 
                            onFocusChange={focusedInput => this.setState({ focusedInput })} 
                            isOutsideRange ={()=>false}  /> : null) }
                    </div>
                
                </div>
                <div>
                    <br />
                    <span>CATEGORY Overall<i className="fa fa-question-circle" aria-hidden="true"></i></span>
                    <div>

                        <select value={this.state.selectedCatApp} onChange={this.handleCatApp} className="custom-select custom-input" id="cat">
                            <option value="APPLICATION">ALL apps</option> 
                            {appCat.map((cat,index ) =>  <option key={index} value={cat}>{cat.split('_').join(' ')}</option>)}
                        </select>
                        <select value={this.state.selectedCatGame} onChange={this.handleCatGame} className="custom-select custom-input" id="cat">
                            <option value="GAME">ALL games</option>
                            {gameCat.map((cat,index )=>  <option key={index} value={cat}>{cat.split('_').join(' ')}</option>)}
                        </select>
                    </div>
                </div>
                <div style={{marginTop: '20px',textAlign: 'center'}}>
                     <button type="reset" onClick={this.restHandle} class="btn btn-outline-warning">Reset</button>
                </div>
            </form>
          </div>
        )
    }
}

export default connect(null,{getFiltredApps})(AdvancedFilting);