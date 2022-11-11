import React, { useCallback, useState } from 'react';
import './style.scss';
import { useEffect ,useRef} from 'react';
import { useSelector ,useDispatch ,shallowEqual} from 'react-redux';
import { getTopBannerAction } from './../../store/actionCreators';
import { Carousel } from 'antd';


export default function WYTopBanner() {

  //state

  const [currentIndex ,setCurrentIndex] =useState(0)

  //组件和redux 的关联 ：获取数据和进行操作

  // useselector  两个参数 shallowequal 浅层比较一般没有特殊情况都传入这个
  const { topBanners} =useSelector(state =>({
    // topBanners:state.recommed.topBanners
    // topBanners: state.get("recommend").get("topBanners") 
    // getIn :传入可迭代
    topBanners: state.getIn(["recommend","topBanners"])
  }),shallowEqual);
  const dispatch = useDispatch()
// 其他的hooks
  const bannerRef = useRef();
  // 发送网络请求
  useEffect(() =>{
    dispatch(getTopBannerAction())
  },[dispatch]);

  const bannerChange = useCallback((from,to) =>{
    setCurrentIndex(to)
  },[])
  const url = `${topBanners[currentIndex] && topBanners[currentIndex].imageUrl}?imageView&blur=40x20`;
  return (
    <div className='banner-wrapper' style={{background: `url(${url})`}}>
        <div className='banner wrap-v2'>
            <div className='banner-left'>
                <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                  {
                    topBanners.map((item,index) =>{
                      return (
                        <div className='banner-item' key={item.imageUrl}>
                          <img className='image' src={item.imageUrl} alt={item.typeTitle}/>

                        </div>
                      )
                    })
                  }
                </Carousel>

              <div className='btn left' onClick={e =>bannerRef.current.prev()} >
                
              </div>
              <div className='btn right' onClick={e =>bannerRef.current.next()}></div>

            </div>
            <div className='banner-right'></div>

            <div className='banner-contorl'>
              
            </div>

        </div>

    </div>
  )
}
