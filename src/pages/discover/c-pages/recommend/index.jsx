import React, { memo} from 'react'

import WYTopBanner from "./c-cpns/top-banner"

import WYHotRecommend from "./c-cpns/hot-recommend"
import WYRanking from './c-cpns/ranking'
import WYNewAblum from './c-cpns/new-album'
import WYUserLogin from './c-cpns/user-login'
import WYSettleSinger from './c-cpns/settle-singer'
import WYHotzhubo from './c-cpns/hot-zhubo'
import "./style.scss"



function WYRecommend(props) {

  
  return (
    <div className='recommend'>
      <WYTopBanner></WYTopBanner>
      <div className='content wrap-v2'>
        

        <div className='recommend_left'>
          <WYHotRecommend></WYHotRecommend>
          
          <WYNewAblum/>
          {/* <WYRanking/> */}
        </div>
        <div className='recommend_right'>
          <WYUserLogin/>
          
          <WYSettleSinger/>
          <WYHotzhubo/>
          


        </div>
      </div>
      

    </div>
  )
}
export default (memo(WYRecommend))
// const mapStateTopProps =state =>({
//   topBanners:state.recommend.topBanners
// });
// const mapDispatchToProps =dispatch =>({
//   getBanners:() =>{
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateTopProps,mapDispatchToProps)(memo(WYRecommend)) 