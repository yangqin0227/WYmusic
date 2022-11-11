import * as actionTypes from "./constants"

import { getTopBanners} from "@/services/recommend"
import { getHotRecommends, getNewAlbums, getTopList } from "../../../../../services/recommend"

// dispatch(getTopBannerAction())
const changeTopBannerAction = (res) =>({
    type : actionTypes.CHANGE_TOP_BANNERS,
    topBanners : res.banners

})

const changeHotRecommendAction =(res) =>({
    type:actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends:res.result

})

const changeNewAlbumAction =(res) =>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbums:res.albums

})

const changeUpRankingAction =(res) =>({
    type:actionTypes.CHANGE_UP_RANKING,
    upRanking:res.playlist
})
const changeHotRankingAction =(res) =>({
    type:actionTypes.CHANGE_HOT_RANKING,
    hotRanking:res.playlist
})

const changeNewRankingAction =(res) =>({
    type:actionTypes.CHANGE_NEW_RANKING,
    newRanking:res.playlist
})


export const getTopBannerAction =() =>{
    return dispatch =>{
        getTopBanners().then(res =>{
            dispatch(changeTopBannerAction(res))
        })
        // 派发 -- 到reducer中
    }
}
// 封装 在recommend的index中调用

export const getHotRecommendAction =(limit) =>{
    return dispatch =>{
        getHotRecommends(limit).then(res =>{
            // console.log(res)
            dispatch(changeHotRecommendAction(res))

        })
    }
}

export const getNewAlbumAction =(limit)=>{
    return dispatch =>{
        getNewAlbums(limit).then(res =>{
            //传入的一个对象,函数执行后的结果是一个对象
            // console.log(res) // 传入变量  具体的值调用是传入
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const getTopListAction =(idx) =>{
    return dispatch =>{
        getTopList(idx).then(res =>{
            switch(idx){
                case 0 :
                    dispatch(changeNewRankingAction(res));
                    break;
                case 1 :
                    dispatch(changeHotRankingAction(res));
                    break;
                case 3:
                    dispatch(changeUpRankingAction(res));
                    break;
                default:

            }
        })
    }
}