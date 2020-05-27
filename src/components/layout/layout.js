import React from 'react'
import Sidedrawer from '../navigation/sidedrawer/sidedrawer'
import Toolbar from '../navigation/toolbar/toolbar'
import './style.css'

export default function Layout(props) {
    return (
    <div className="wrapper d-flex align-items-stretch">
       <Sidedrawer />
        <div id="content">
            <Toolbar/>
            <div className="m-3 p-3">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    )
}
