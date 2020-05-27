import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectedApp} from '../../action/appsActions'
import { Bar } from 'react-chartjs-2';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

 
class AppDetails extends Component {

    state = {
        appDetails:{
            badges: ["Editors' Choice"],
            cat_int: 5,
            cat_key: "COMMUNICATION",
            cat_keys: ["COMMUNICATION", "APPLICATION"],
            category: "Communication",
            contains_ads: false,
            content_rating: "Everyone",
            created: "2015-03-10T00:00:00+00:00",
            screenshots: ["https://lh3.googleusercontent.com/MMue08byixTw74ST_VkNQDUUJBgVEbjNHDYLhIuHmYhMIMJIp3KjVlnhhqZQOZUtNt8=w720-h310","https://lh3.googleusercontent.com/foFmwvVGIwWWXJIukN7png18lFjFgbw3K7BqIm8G-jsFgSTVtkCa-dDkFApUzbvzIvbe=w720-h310","https://lh3.googleusercontent.com/iLgMXFO5qEPlTffpI21zaoG51AORnfu8NPb_2SdAXYgOYcb-xDOMfCryPhVvGNjoew=w720-h310","https://lh3.googleusercontent.com/ElfUPGX67gv0TNQXuDxQGa5a4BYnLAZIgJJmoNoARvqlLQsKEQcNNWz-J_zqGV5vzQ=w720-h310","https://lh3.googleusercontent.com/wBgVA58O2xncQkksLatHGoNLI8L6o_1ZM8AC3GCScxCyaDOWOvMsMilaj1Scp3kEOIw=w720-h310","https://lh3.googleusercontent.com/nknhZ6--QSyZlohrv72BaPlwO2EHPvGKJY8NNACYY0IY8j4QKYATP6alT1yyMYb-35j9=w720-h310"],
            deep_link: "https://play.google.com/store/apps/details?id=com.whatsapp&referrer=utm_source%3D42matters.com%26utm_medium%3Dapi",
            description: "WhatsApp from Facebook↵↵WhatsApp Messenger is a FREE messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and Voice Messages.↵↵WHY USE WHATSAPP:↵↵• NO FEES: WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family, so you don't have to pay for every message or call.* There are no subscription fees to use WhatsApp.↵↵• MULTIMEDIA: Send and receive photos, videos, documents, and Voice Messages.↵↵• FREE CALLS: Call your friends and family for free with WhatsApp Calling, even if they're in another country.* WhatsApp calls use your phone's Internet connection rather than your cellular plan's voice minutes. (Note: Data charges may apply. Contact your provider for details. Also, you can't access 911 and other emergency service numbers through WhatsApp).↵↵• GROUP CHAT: Enjoy group chats with your contacts so you can easily stay in touch with your friends or family.↵↵• WHATSAPP WEB: You can also send and receive WhatsApp messages right from your computer's browser.↵↵• NO INTERNATIONAL CHARGES: There's no extra charge to send WhatsApp messages internationally. Chat with your friends around the world and avoid international SMS charges.*↵↵• SAY NO TO USERNAMES AND PINS: Why bother having to remember yet another username or PIN? WhatsApp works with your phone number, just like SMS, and integrates seamlessly with your phone's existing address book.↵↵• ALWAYS LOGGED IN: With WhatsApp, you're always logged in so you don't miss messages. No more confusion about whether you're logged in or logged out.↵↵• QUICKLY CONNECT WITH YOUR CONTACTS: Your address book is used to quickly and easily connect you with your contacts who have WhatsApp so there's no need to add hard-to-remember usernames.↵↵• OFFLINE MESSAGES: Even if you miss your notifications or turn off your phone, WhatsApp will save your recent messages until the next time you use the app.↵↵• AND MUCH MORE: Share your location, exchange contacts, set custom wallpapers and notification sounds, broadcast messages to multiple contacts at once, and more!↵↵*Data charges may apply. Contact your provider for details.↵↵--------------------------------------------------------- ↵We're always excited to hear from you! If you have any feedback, questions, or concerns, please email us at:↵↵android-support@whatsapp.com↵↵or follow us on twitter:↵↵http://twitter.com/WhatsApp↵@WhatsApp↵---------------------------------------------------------",
            developer: "WhatsApp Inc.",
            downloads: "5,000,000,000+",
            downloads_max: 10000000000,
            downloads_min: 5000000000,
            email: "android@support.whatsapp.com",
            from_developer: ["com.whatsapp.w4b","com.whatsapp.wallpaper"],
            i18n_lang:  ["el", "en", "vi", "ca", "fr-ca", "it", "ar", "pt-br", "cs", "et", "id", "es", "ru", "nl", "pt", "no", "zh-tw", "tr", "lv", "zh-cn", "lt", "th", "ro", "pl", "fr", "bg", "uk", "hr", "de", "hu", "hi", "fi", "da", "ja", "sr", "ko", "sv", "sk", "ms", "en-gb", "pt-pt", "fa"],
            iap: false,
            icon: "https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180",
            icon_72: "https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180-rw",
            lang: "en",
            market_source: "GOOGLE",
            market_status: "PUBLISHED",
            market_update: "2020-04-15T00:00:00+00:00",
            market_url: "https://play.google.com/store/apps/details?id=com.whatsapp&referrer=utm_source%3D42matters.com%26utm_medium%3Dapi",
            min_sdk: "4.0.3 and up",
            number_ratings: 110056238,
            package_name: "com.whatsapp",
            physical_address: "1601 Willow Road Menlo Park, CA 94025",
            price: "",
            price_i18n_countries: [],
            price_numeric: 0,
            privacy_policy: "http://www.whatsapp.com/legal/#Privacy",
            promo_video: "http://www.youtube.com/watch?v=WIGb1jZXCV0",
            rating: 4.3038282394409,
            ratings_1: 10365267,
            ratings_2: 3404658,
            ratings_3: 6433010,
            ratings_4: 12076968,
            ratings_5: 77776332,
            short_desc: "Simple. Personal. Secure.",
            similar: ["com.whatsapp.w4b", "com.instagram.android", "com.facebook.katana", "com.facebook.orca", "com.viber.voip"],
            size: 28311552,
            title: "WhatsApp Messenger",
            version: "2.20.123",
            website: "http://www.whatsapp.com/",
            what_is_new: "- Dark mode is now available. Try it by going to Settings > Chats > Theme > select ‘Dark’. For users on Android 10, dark mode is enabled automatically when you turn it on in system settings.",
            app_availability:
            {
            available_in:["DE","HK","TW","PT","DK","LT","LU","HR","LV","UA","HU","MA","DZ","ID","IE","US","EE","EG","IL","AE","IN","ZA","IR","IT","MX","AM","MY","ES","AR","AT","AU","VN","NG","RO","NL","NO","RS","BE","FI","RU","BG","JO","JP","FR","NZ","SA","BR","SE","SG","SI","BY","SK","GB","CA","GE","CH","KR","CL","CN","GR","CO","TH","PE","LB","CY","CZ","PH","TN","PK","PL","TR"],
            not_available_in:[],
            availability_unknown:[],
            
            package_name:"com.whatsapp"}},
        data : {
            labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
            datasets: [
              {
                label: 'Number Of Rating',
                fill: false,
                lineTension: 0.1,
                backgroundColor:'rgba(15, 35, 70,0.8)',
                borderColor: 'rgba(15, 35, 70,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(15, 35, 70,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(15, 35, 70,1)',
                pointHoverBorderColor: 'rgba(15, 35, 70,1)',
                pointHoverBorderWidth: 3,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [9876, 6789,8789, 7098, 9456]
              }
            ]
            }
            ,
            options: {
                scales: {
                    xAxes: [{
                        barPercentage: 0.2
                    }]
                }
          }
    }

    componentDidMount=()=>{ 
                
        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
         polygonSeries.useGeodata = true;


        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#ebeef1");

        // // Create hover state and set alternative fill color
        // var hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#ebeef1");
     
        let polygonSeriesData = this.state.appDetails.app_availability.available_in.map(country => {
           return {
               "id": country,
                "fill": am4core.color("#0f2346")
            }
        }); 
        // Add some data
        polygonSeries.data = polygonSeriesData
        
       // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = "fill";

        //My Shiit
        const id = this.props.match.params.id;
        this.props.selectedApp(id);

    }


    componentWillReceiveProps=(nextProp)=>{
         this.setState({appDetails:nextProp.appDetails})
    }

    renderContent =()=>{
        const data = {...this.state.data}
        const {ratings_1,ratings_2,ratings_3,ratings_4,ratings_5} = this.state.appDetails;
        data.datasets[0].data = [ratings_1,ratings_2,ratings_3,ratings_4,ratings_5];

        const  {description} =  this.state.appDetails;
        const descCheck = description.length > 350 ?  `${description.slice(0,350)}...` : description;
        const showMore = description.length > 350 ? <button  class="btn btn-outline-dark" style={{padding:'2px 4px'}}>show More</button> : null;
       return this.state.appDetails ? (
    
            <div class="container">
                <div class="row">
                    <div class="col  align-self-center">
                        <img src={this.state.appDetails.icon_72} class="img-fluid rounded" alt="icon" />
                    </div>
                    <div class="col-8 m-0">
                        <h1 style={{color:'#0f2346'}} >
                            {this.state.appDetails.title}
                        </h1>
                        <p class="lead m-0">
                            {this.state.appDetails.short_desc}
                        </p>
                        <small class="text-muted">{`by ${this.state.appDetails.developer}`}</small>
                    </div>
                    <div class="col align-self-center">
                    <a href={this.state.appDetails.market_url}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi5Lj85-MacpMJ4igmBqNz-cvWbFNaJXGGd_q6x9PLPd_FWcdB&usqp=CAU' class="img-fluid" alt="" /> </a> 
                    
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col" style={{backgroundColor:'#ebeef1'}}>
                        { `${this.state.appDetails.cat_keys[1]} / ${this.state.appDetails.cat_keys[0]} `}
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col">
                        <div class="container">
                             {this.state.appDetails.screenshots.map(img => <img src={img} class="img-fluid ml-1" alt="" />)}
                        </div>
                       
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-2" style={{textAlign:'end'}} >
                         ID:
                    </div>
                    <div class="col-10">
                        <span>{this.state.appDetails.package_name}</span>
                    </div>
                </div>
                <div class="row">

                    <div class="col-2" style={{textAlign:'end'}} >
                        Published Status:
                    </div>
                    <div class="col-10">
                        <span>{this.state.appDetails.market_status}</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-2" style={{textAlign:'end'}} >
                        Publisher :
                    </div>
                    <div class="col-10">
                        <span>{this.state.appDetails.developer}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" style={{textAlign:'end'}} >
                        Website :
                    </div>
                    <div class="col-10">
                        <a href={this.state.appDetails.website}><span>{this.state.appDetails.website}</span></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" style={{textAlign:'end'}} >
                        Last update :
                    </div>
                    <div class="col-10">
                        <span>{this.state.appDetails.market_update}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" style={{textAlign:'end'}} >
                        Version :
                    </div>
                    <div class="col-10">
                        <span>{this.state.appDetails.version}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" style={{textAlign:'end'}} >
                        Description :
                    </div>
                    <div class="col-10">
                         <span>{descCheck}{showMore}</span>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col" style={{backgroundColor:'#ebeef1'}}>
                        DOWNLOADS ESTIMATES
                    </div>
                </div>
                
	
                <div class="row mt-1">
                    <div class="col" >
                        Downloads
                    </div>
                    <div class="col" >
                        Number of ratings
                    </div>
                    <div class="col" >
                        Average rating
                    </div>
                </div>
                <hr className='m-0'/>
                <div class="row mt-0">
                    <div class="col" >
                        {this.state.appDetails.downloads}
                    </div>
                    <div class="col" >
                        {this.state.appDetails.number_ratings}
                    </div>
                    <div class="col" >
                        {this.state.appDetails.rating.toFixed(2)} <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
          
                <div class="row mt-4">
                    <div class="col" style={{backgroundColor:'#ebeef1'}}>
                        Trends
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                    </div>
                    <div class="col-7">
                        <Bar type='vertical' options={this.state.options} data={data} />
                    </div>
                    <div class="col">
                    </div>
                </div>   
                <div class="row mt-4">
                    <div class="col" style={{backgroundColor:'#ebeef1'}}>
                        country Availablity
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                    </div>
                    <div class="col-7">
                        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                    </div>
                    <div class="col">
                    </div>
                </div> 

                <div class="row">
                        
                </div>      

               


                {/* 

                Available on: */}
            </div>
        ) :( <div class="alert alert-primary" role="alert">
                <strong>Not Found</strong>
            </div>)
    }

    render(){
        console.log(this.state.appDetails);
        return (
            this.renderContent()
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        appDetails:state.apps.app
    }
}

export default connect(mapStateToProps,{selectedApp})(AppDetails)  
