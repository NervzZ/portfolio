import React, {useEffect, useState} from 'react';
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Buttons/Start";
import ImageNavigator from "./components/ImageNav/ImageNav";

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

    if (isHome) {
        return (
            <div className="App">
                <Header viewSize={viewSize}/>
                <Background/>
                <Start viewSize={viewSize} onClick={setIsHome}/>
                <Footer viewSize={viewSize}/>
            </div>
        )
    } else {
        return (
            <div className="App">
                <Background/>
                <ImageNavigator images={images} viewSize={viewSize}/>
            </div>
        )
    }
}

export default App;
