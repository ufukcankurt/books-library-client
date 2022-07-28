import "./adminRightBar.css"
import React from 'react'
import { Link } from "react-router-dom";

const AdminRightBar = () => {
  return (
    <div className='adminRightBarContainer'>
      
      <h2 className="newsFeedTitle">OLUŞTUR</h2>
      <ul>
        <li>
          <Link to={`/admin/create/book`} style={{ textDecoration: "none" }}>
            <div className="adminRightBarLinksDiv">
              <img
                className="adminRightBarLinkImage"
                src="/assets/book_7.png"
                alt=""
              />
              <span className="adminRightBarLink">Yeni Kitap Oluştur</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/admin/create/author`} style={{ textDecoration: "none" }}>
            <div className="adminRightBarLinksDiv">
              <img
                className="adminRightBarLinkImage"
                src="/assets/author.png"
                alt=""
              />
              <span className="adminRightBarLink">Yeni Yazar Oluştur</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/admin/create/news`}
            style={{ textDecoration: "none" }}
          >
            <div className="adminRightBarLinksDiv">
              <img
                className="adminRightBarLinkImage"
                src="/assets/news_3.png"
                alt=""
              />
              <span className="adminRightBarLink">Yeni Haber Oluştur</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/admin/create/todayinhistory`}
            style={{ textDecoration: "none" }}
          >
            <div className="adminRightBarLinksDiv">
              <img
                className="adminRightBarLinkImage"
                src="/assets/history.png"
                alt=""
              />
              <span className="adminRightBarLink">Yeni Tarihte Bugün Oluştur</span>
            </div>
          </Link>
        </li>
        
      </ul>
    </div>
  )
}

export default AdminRightBar
