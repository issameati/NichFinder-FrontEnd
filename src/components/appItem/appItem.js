import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function AppItem({app}) {
    return (
        <React.Fragment>
            <tr>
                <th className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' }  scope="row"><Link to={`/app/${app.package_name}`} > <img  src={app.icon_72} alt='icon ' className="icon"/>{app.title.slice(0, 20) + (app.title.length > 18 ? "..." : "")}</Link> </th>
                <td className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' } > <a href={app.market_url}> <img  src='./assets/playicon.png' alt='icon' className="icon"/>  </a> </td>
                <td className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' } >{app.package_name.slice(0, 14) + (app.package_name.length > 14 ? "..." : "")}</td>
                <td className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' } >{app.category}</td>
                <td className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' } > {app.developer.slice(0, 14) + (app.developer.length > 14 ? "..." : "")}</td>
                <td className={app.market_status ==='UNPUBLISHED' ? 'middle-line':'' } >{app.downloads}</td>
                <td><button type="button" className="btn btn-light show-contact">show contacs</button></td>
                <td>{app.rating.toFixed(2)}</td>
                <td>Facebook, Admob</td>
                <td> <a href={app.website} target='blank'> {app.website.slice(0, 20) + (app.website.length > 20 ? "..." : "")} </a></td>
            </tr>
        </React.Fragment>
    )
}
