import React, { memo } from 'react'
import { footerImages, footerLinks } from '../../common/local-data'
import "./style.scss"

const AppFooter = memo(() => {
  return (
    <div className='footer'>
      <div className='wrap-v2 content'>
        <div className='left'>
          <div className='link'>
            {
              footerLinks.map(item =>{
                return(
                  <div key={item.title} className='link'>
                    <a href={item.link} target="_blank" >{item.title}</a>
                    <span className='line'>|</span>
                  </div>
                )
              })
            }       
          </div>
          <div className='copyright'>
            <span class="span">网易公司版权所有©1997-2022</span>
            <span class="span">杭州乐读科技有限公司运营：</span>
            <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank" >浙网文[2021] 1186-054号</a>
          </div>
          <div class="left-1">
            <a >粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
            
            <a href="#" rel="noopener noreferrer" target="_blank">
                <span className='icon'></span>
                浙公网安备 33010902002564号
            </a>
          </div>
          <span class="span">互联网宗教信息服务许可证：浙（2022）0000120</span>

        </div>

        <div className='right'>
          {
            footerImages.map((item,index) =>{
              return(
                <li className='item' key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                
                  <span className='title'> {item.title}</span>
                </li>
              )
            })
          }
        </div>


      </div>

    </div>
  )
})

export default AppFooter