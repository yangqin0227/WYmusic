import React from 'react'

import { useDispatch } from 'react-redux/es/exports'

import WYThemeRcm from "@/components/theme-header-rcm"
import WYTopRanking from "@/components/top-ranking"
import { useEffect } from 'react';
import { getTopListAction } from '../../store/actionCreators';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';

import './style.scss';

export default function WYRanking() {
  // redux  hooks
  const {upRanking,newRanking,hotRanking} = useSelector( state =>({
    upRanking : state.getIn(["recommend","upRanking"]),
    newRanking:state.getIn(["recommend","newRanking"]),
    hotRanking:state.getIn(["recommend","hotRanking"])
  }),shallowEqual)
  const dispatch =useDispatch();

  //other hooks

  useEffect(() =>{
    dispatch(getTopListAction(3));
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(1))

  },[dispatch])

 

  return (
    <div>
      <WYThemeRcm title="榜单"  />
      <div className="ranking-wrapper">
        <WYTopRanking info={upRanking}/>
        <WYTopRanking info={newRanking}/>
        <WYTopRanking info={hotRanking}/>
      </div>
    </div>
  )
}
