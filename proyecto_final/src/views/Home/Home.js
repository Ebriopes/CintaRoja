import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
//import Footer from '../../components/Footer/Footer'
import Month from '../../components/Month/Month'
import QuickView from '../../components/QuickView/QuickView'

/*import {
  Browser as Router,
  switch,
  Rout
} from react-document*/

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="row" style={{marginRight:"0px",height:"calc(100vh - 60px)"}}>
        <div className="col">
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          {/*<Month></Month>
          <Month></Month>*/}
        </div>
        <div className="col">
          <QuickView></QuickView>  
        </div>
      </div>
      {/*<Footer></Footer>*/}
    </>
  );
}

export default Home;
