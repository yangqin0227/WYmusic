import Item from 'antd/lib/list/Item'
import React, { memo } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import routes from '../../router'
import { dicoverMenu } from '../../common/local-data'
import WYRecommend from "./c-pages/recommend"
import "./style.scss"

const WYDiscover = memo((props) => {
  return (
    <div>
      <div className='top'>
        <div className='nav wrap-v1'>
          {
            dicoverMenu.map((item,index) =>{
              return(
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="wrapper wrap-v1">
        <Switch>
          {
            props.routes.map(r=>{
              return (
                <Route key={r.path} {...r}/>
              )
            })
          }
        </Switch>
      </div>
    </div>
  )
})


export default WYDiscover