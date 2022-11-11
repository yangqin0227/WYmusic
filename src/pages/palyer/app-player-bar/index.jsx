import React from 'react'
import { Slider, Switch } from 'antd';

import "./style.scss"
const A = ({className, x, y})=>{
  
}
export default function WYPlayBar() {
  return (
    <div className=' player-bar'>
        <div className="bar-wrapper">
            <div className="btns">
              <a className='sprite_player prev'></a>
              <a className='sprite_player play'></a>
              <a className='sprite_player next'></a> 
            </div>
            <div className="player-info">
              <div className='image-wrapper'>
                <a href="" className="image">
                  <img   src="https://p1.music.126.net/tuHsDjBcShxWmNSoTGPiDw==/109951167697398286.jpg?param=34y34" alt="" />
                </a>
                

              </div>
              <div className="song-wrapper">
                
                <div className="song">
                  <a className="song-name">红豆</a>
                  <a className="song-singer">要不要买菜</a>
                </div>
                <div className="progress">
                  

                
                  <div className="time">
                    <span className="now-time">00:00</span>
                    <span className="divider">/</span>
                    <span className="duration">00:00</span>                
                </div>
                </div>
              </div>

            </div>
            <div className="play-icon1">
              <a className="sprite_player btn icon1"></a>
              <a className="sprite_player btn icon2"></a>
              <a className="sprite_player btn icon3"></a>
            </div>
            <div className="play-icon2">
              <a className="sprite_player btn icon4"></a>
              <a className="sprite_player btn icon5"></a>
              <a className="sprite_player btn icon6"></a>

            </div>


        </div>
        
    </div>
  )
}
