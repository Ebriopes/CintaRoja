import React, {useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App({children}) {
    const [colorR, setColorR] = useState("#282c34")
    useEffect(()=>{
        setTimeout(() => setColorR(`#${Math.round((Math.random() * 16777216)).toString(16)}`),5000)
    }, [colorR]);

    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Testeo</div>
            <div className="navbar-brand">Weno</div>
        </nav>
        <div className="App">
            <header className="App-header" style={{backgroundColor: colorR}} >
                {children}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>Pagina React</p>
            </header>
        </div>
        </>
    );
};

export default App;
