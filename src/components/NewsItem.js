import React, { Component } from 'react'
import moment from 'moment'

export default class NewsItem extends Component {
  render() {
    let {title, imageUrl,description, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="news-card my-4 mx-2" >
          <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/Ivub7G4vbkR9T9YV2AtI6rtqwIs=/0x0:1162x662/1200x628/filters:focal(581x331:582x332)/cdn.vox-cdn.com/uploads/chorus_asset/file/24838915/penn_espn_bet.jpg":imageUrl} className="card-img-top" style={{width: "100%", height: "12rem"}} alt="..." />
          <div className="card-body">
            {/* <h5 className="card-title" style={{height: "6rem"}}>{title} <span className="position-absolute top-0 start-100 translate-middle
             badge rounded-pill bg-danger"> {source}
            </span></h5> */}
            <h5 className="card-title" style={{height: "auto"}}>{title}</h5>
            <p className="card-text" style={{height: "auto"}}>{description.slice(0, 95)}...</p>
            <p className="card-text" style={{height: "auto"}}><small className="text-danger">By {author?author:"Unkown"} on {moment(date).format("DD/MM/YYYY, h:mm a")}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
