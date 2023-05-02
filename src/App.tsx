import React from 'react'
import { Provider } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import store from './Redux/store/store'
import TestComponent from './TestComponent';
import Home from './Home';
import RouteCompWithID from './RouteCompWithID';
const App = () => {
  return (
    <Provider store={store}>

      <div className="App w-full  flex flex-col items-center justify-center">
        <Routes>
          <Route path="/TestID/:id" element={<RouteCompWithID />} />
          <Route path="/TestRedux" element={<TestComponent />} />
          <Route path="/" element={<Home />} />
        </Routes>


      </div>
    </Provider>
  )
}

export default App