import React, {useEffect, useState} from 'react';
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Buttons/Start";
import ImageNavigator from "./components/ImageNav/ImageNav";

function App() {

    const images = [
        "images/clint.png",
    ];

    const [viewSize, setViewSize] =
        useState({width: window.innerWidth, height: window.innerHeight});
    const handleWindowResize = (e) => {
        setViewSize({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])
    return (
        <div className="App">
            <Header viewSize={viewSize}/>
            <Background/>
            <Start viewSize={viewSize}/>
            <ImageNavigator images={images}/>
            <Footer viewSize={viewSize}/>
        </div>
    );
}

export default App;
