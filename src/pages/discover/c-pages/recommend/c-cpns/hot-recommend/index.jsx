import React from 'react'
import WYThemeRcm from "@/components/theme-header-rcm"
import { useDispatch, useSelector,shallowEqual } from 'react-redux/es/exports'
import { useEffect } from 'react';
import { getHotRecommendAction } from '../../store/actionCreators';
import  WYSongsCover from '@/components/theme-cover'
import './style.scss'

export default function WYHotRecommend() {
  const {hotRecommends} = useSelector( state =>({
    hotRecommends:state.getIn(["recommend","hotRecommends"])
  }),shallowEqual);




  const  dispatch =useDispatch();

  useEffect(() =>{
    dispatch(getHotRecommendAction(8))
  },[dispatch])

  return (
    <div className='recommend-content1'>
      <WYThemeRcm title="热门推荐"  keywords={["华语","流行","民谣","摇滚","电子"]}/>
      <div className='recommend-list'>
        {
            hotRecommends.map((item,index) =>{
              return (
                
                <WYSongsCover key={item.id} info={item}></WYSongsCover>

              )
            })
          }


      </div> 
        

      
    </div>
  )
}
