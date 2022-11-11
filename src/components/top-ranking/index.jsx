import React from 'react';
import {getSizeImage} from "@/utils/format-utils";
import "./style.scss"

export default function WYTopRanking(props) {
    const {info} =props;
    const { tracks =[]} =info;
  return (
    <div className='top-ranking'>
        <div className="top-header">
            <div className="image">
                <img src={getSizeImage(info.coverImgUrl)} alt="" />
                <a href="/todo" className='image_cover'></a>
            </div>
            <div className="info">
              <a className="title">{info.name}</a>
              <div className='button'>
                <a className='bofang sprite_02'></a>
                <a className='like sprite_02'></a>
              </div>
            </div>  
        </div>
        <div className="top-list">
          {
            tracks.slice(0,10).map((item,index) =>{
              return(
                <div key={item.id} className='top-list-item'>
                  <div className='rank'>{index+1}</div>
                  <div className="info">
                    <a className="songsname text-nowrap">{item.name}</a>
                    <div className="caozuo">
                      <button className="btn play sprite_02"></button>
                      <button className='btn add sprite_icon2'></button>
                      <button className='btn like sprite_02'></button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className="top-footer">
          <a href="/todo">查看全部  &gt;</a>

        </div>

    </div>
  )
}
