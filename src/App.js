import React, {useEffect, useState} from 'react';
import './App.css';
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Buttons/Start/Start";
import ImageNavigator from "./components/ImageNav/ImageNav";
import {CSSTransition} from "react-transition-group";

//icons
import HomeButton from "./components/Buttons/HomeButton/HomeButton";

//images
import w1_1 from "./images/clint.png"
import w1_2 from "./images/clint_prob.png"
import w1_3 from "./images/clint_solution.png"
import w2_1 from "./images/jacket_back.png"
import w2_2 from "./images/jacket_shop.png"
import w3_1 from "./images/build.png"
import w3_2 from "./images/immerge.png"
import w3_3 from "./images/happy.png"
import w4_1 from "./images/exo_bulky.png"
import w4_2 from "./images/exo_discrete.png"
import w4_3 from "./images/exo_stylish.png"
import w4_4 from "./images/exo_power.png"
import w5_1 from "./images/rhodes_town.png"
import w5_2 from "./images/dog.png"
import w5_3 from "./images/dog_shower.png"
import w5_4 from "./images/dog_park.png"
import w6_1 from "./images/blend.png"
import w6_2 from "./images/tower.png"
import w6_3 from "./images/dream.png"


function App() {

    const images = [
        w1_1,
        w1_2,
        w1_3,
        w2_1,
        w2_2,
        w3_1,
        w3_2,
        w3_3,
        w4_1,
        w4_2,
        w4_3,
        w4_4,
        w5_1,
        w5_2,
        w5_3,
        w5_4,
        w6_1,
        w6_2,
        w6_3
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
                    <HomeButton onClick={setIsHome}/>
                </>
            </CSSTransition>
        </div>
    );
}

export default App;
