import React from 'react'
import "./style.scss"

export default function WYThemeRcm(props) {

  const {title, keywords =[]} =props
  return (
    
        <div className='title-nav '>
         
          <div className='left'>
            <h3 className='title'>{title}</h3>
            <div className='keyword'>
              {
                keywords.map((item,index) =>{
                  return(
                    <div className='item' key={item}>
                      <a href='todo'>{item}</a>
                      <span className='divider'>|</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='right'>
            <a href='todo'>更多</a>
            <div className='icon  sprite_02'></div>
          </div>
        </div>
    
  )
}
