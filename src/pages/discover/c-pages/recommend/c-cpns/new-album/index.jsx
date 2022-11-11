import React, { useEffect, useState ,useRef} from 'react'
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';

import { Carousel } from 'antd';
import  WYAlbumCover from '@/components/album-cover'

import { useDispatch } from 'react-redux';
import WYThemeRcm from "@/components/theme-header-rcm";
import { getNewAlbumAction } from '../../store/actionCreators';


import './style.scss'

export default function WYNewAblum() {

  // const [albums ,setAlbums] =useState([])
  // //测试 直接写在组件中 放进数据  一般是统一管理 放在redux中
  // useEffect(() =>{
  //   getNewAlbums(10).then(res =>{
  //     setAlbums(res.albums)

  //   })

  // },[])
  const { newAlbums} = useSelector( state =>({
    newAlbums:state.getIn(["recommend", "newAlbums"])
  }),shallowEqual)

  const dispatch = useDispatch();

  // other hooks

  const pageRef = useRef()

  useEffect(() =>{
    //传入的一个函数
    dispatch(getNewAlbumAction(10));
  },[dispatch])
  return (
    <div>
      <WYThemeRcm title="新碟上架"  />
      <div className='album-content'>
        <button className='arrow arrow-left sprite_02' onClick={ e => pageRef.current.prev()}></button>
        <div className='album-inner'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item =>{
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item *5,(item+1)*5).map( iten =>{
                        return <WYAlbumCover key={iten.id} info={iten}/>
                      })
                    }
                  </div>
                )
              })
              
            }

          </Carousel>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>
    </div>
  )
}
