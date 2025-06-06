import React, {useEffect} from 'react';
import { BrowserRouter, Router,Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent} from '@syncfusion/ej2-react-popups';


import './App.css' // Importing component-specific styles
const App = () => {
  const activeMenu = true; // This can be a state variable to toggle the sidebar visibility
  return (
    <BrowserRouter>
    <div className="flex relative dark:bg-main-dark-bg ">
      <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
        <TooltipComponent content="Settings" position="Top">
          <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'orange', borderRadius: '50%' }}>
            <FiSettings/>
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ?(
        <div>
          sidebar
        </div>
      ) : (
        <div>
          sidebar w=0
        </div>
      )}
    </div>
    </BrowserRouter>
  )
}

export default App
