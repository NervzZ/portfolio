import React, {useEffect, useState} from 'react';
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Buttons/Start/Start";
import ImageNavigator from "./components/ImageNav/ImageNav";
import {CSSTransition} from "react-transition-group";

//icons
import BackArrow from "./components/Buttons/BackArrow/BackArrow";

//images
import clint from "./images/clint.png"

function App() {

    const images = [
        clint,
    ]

    const [isHome, setIsHome] = useState(true)

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
            <Background/>
            <CSSTransition
                in={isHome}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                <div>
                    <Header viewSize={viewSize}/>
                    <Start viewSize={viewSize} onClick={setIsHome}/>
                    <Footer viewSize={viewSize}/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={!isHome}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                <>
                    <ImageNavigator images={images} viewSize={viewSize}/>
                    <BackArrow onClick={setIsHome}/>
                </>
            </CSSTransition>
        </div>
    );
}

export default App;
