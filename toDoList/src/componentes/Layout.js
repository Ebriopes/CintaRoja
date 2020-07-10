import React from 'react'
import Navbar from './Navbar'
//import Footer from './Footer'

const Layout = ({title,children}) => {
    return(
        <div className="h-100 w-100 d-inline-block">
            <Navbar title={title}/>
                <div className="d-flex flex-wrap">
                    {children}
                </div>
            {/*<Footer/>*/}
        </div>)
}

export default Layout