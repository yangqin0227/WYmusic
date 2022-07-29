import React from "react";
import { Switch,Route} from 'react-router-dom'

import WYDiscover from "../pages/discover";

import WYMine from "../pages/mine";
import WYFriend from "../pages/friend";
import { Redirect } from "react-router";
import WYRecommend from "../pages/discover/c-pages/recommend";
import WYRanking from "../pages/discover/c-pages/ranking";
import WYSongs from "../pages/discover/c-pages/songs";
import WYDjradio from "../pages/discover/c-pages/djradio";
import WYArtist from "../pages/discover/c-pages/artist";
import WYAlbum from "../pages/discover/c-pages/album";

const routes =[
    {
        path:"/",
        exact:true,
        render:()=>(
            <Redirect to="/discover"/>
        )
        

    },
    {
        path:"/discover",
        component:WYDiscover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render:()=>(
                    <Redirect to={"/discover/recommend"}/>
                )

            },
            {
                path:"/discover/recommend",
                component:WYRecommend

            },
            {
                path:"/discover/ranking",
                component:WYRanking
            },
            {
                path:"/discover/songs",
                component:WYSongs
            },
            {
                path:"/discover/djradio",
                component:WYDjradio
            },
            {
                path:"/discover/artist",
                component:WYArtist
            },
            {
                path:"/discover/album",
                component:WYAlbum
            }
            
        ]
    },
    {
        path:"/mine",
        component:WYMine
    },
    {
        path:"/friend",
        component:WYFriend
    },
    
];


const ISwitch = () =>{
    return (
        <Switch>
            {
                routes.map(r=>{
                    const Componet = r.component;   
                   if(r.routes){
                       return <Componet key={r.path} routes={r.routes}/>
                   }  
                   return (
                       <Route key={r.path} {...r}/>
                   )
                })
            }
        </Switch>
    )
}
export{
    ISwitch
}
export default routes;