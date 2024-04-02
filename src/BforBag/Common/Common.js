import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCommon from '../Admin/AdminCommon/AdminCommon';
import Home from '../Admin/Home/Home';



const MainCommon = () => {
   return (
      <>
         <div>
            <Router>
               <Routes>
                  <Route path='' element={<AdminCommon/>}>
                     <Route path='' element={<Home />} />
                  </Route>

                  
               </Routes>
            </Router>
         </div>
      </>
   )
}

export default MainCommon