import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter  ,Switch,Route} from 'react-router-dom'
import {ISwitch} from "./router"
import store from './store'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'



function App() {

  return (<div>
    {/* <BrowserRouter>
      {renderRoutes(routes)}
    
    </BrowserRouter> */}
    <Provider store={store}>
      <BrowserRouter>
          <AppHeader/>
          <ISwitch/>
      </BrowserRouter>
      <AppFooter/>
    </Provider>
    
      
  </div>
  )
}


export default App

