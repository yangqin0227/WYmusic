import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter  ,Switch,Route} from 'react-router-dom'
import {ISwitch} from "./router"
import store from './store'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import WYPlayBar from './pages/palyer/app-player-bar'



function App() {

  return (<div>
    {/* <BrowserRouter>
      {renderRoutes(routes)}
    
    </BrowserRouter> */}
    {/* 共享store */}
    <Provider store={store}>
      <BrowserRouter>
          <AppHeader/>
          <ISwitch/>
      </BrowserRouter>
      <AppFooter/>
      <WYPlayBar/>
    </Provider>
    
      
  </div>
  )
}


export default App

