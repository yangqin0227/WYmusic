import React from 'react'
import { getCount,getSizeImage } from '../../utils/format-utils'
import "./style.scss"

export default function WYSongsCover(props) {

  const {info} =props  
  return (
    <div className='songcover'>
      
        <div className='cover-top'>
            <img src={getSizeImage(info.picUrl,140) } alt="" />
            <div className='cover sprite_covor'>
                
            </div>
            <span className='bottom  sprite_covor'>
                    <i className='sprite_icon erji'>
                        
                    </i>
                    <div className='number'>{getCount(info.playCount)}</div>
                    
                    <i className='sprite_icon play'></i>

            </span>
        </div>
        <div className='cover-title'>
            {info.name}
        </div>
        <div className='cover-source'>
             {info.copywriter}
        </div>


    </div>
  )
}
