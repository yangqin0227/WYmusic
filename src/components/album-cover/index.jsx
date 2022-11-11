import React from 'react';
import "./style.scss"
import { getSizeImage} from '@/utils/format-utils'

export default function WYAlbumCover(props) {

  const { info ,size =130, width = 153,bgp = "-845px"} =props
  return (
    // <div className='album-cover' style={{...props,...{backgroundSize: size, backgroundPositionX: bgp}}}>
    <div className='album-cover'>
      <div className='album-image'>
        <img  src={getSizeImage(info.picUrl,130)} alt="" />
        <a href="/todo" className='cover sprite_covor'></a>
      </div> 
      <div className='album-info'>
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>      
    </div>
  )
}
