// 默认状态 --轮播图
// reducer 将传入的state和action结合起来生成一个新的state
import { Map } from "immutable"
import * as actionTypes from "./constants";


// reducer 从action中获取topbanner 数据 传递到topbanner中
const defaultState =Map(
    {
        topBanners:[],
        hotRecommends:[],
        newAlbums:[],
        upRanking:{},
        hotRanking:{},
        newRanking:{}
        


    
    }

) 

function  reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            // return {...state, topBanners:action.topBanners}
            return state.set("topBanners",action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set("hotRecommends",action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums",action.newAlbums);
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking",action.upRanking);
        case actionTypes.CHANGE_HOT_RANKING:
            return state.set("hotRanking",action.hotRanking);
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking",action.newRanking)

        default:
            return  state
    }

}

export default reducer;