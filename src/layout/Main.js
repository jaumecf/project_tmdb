import {Hero} from "../components/Hero";
import NowPlaying from "../components/NowPlaying";
import Populars from "../components/Populars";
import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
//Main es el nuevo componente para renderizar el cuerpo de la aplicacion, dependiendo del estado
//Si quisieramos preservar el estado, utilizariamos localStorage en el context provider
export const Main = () => {
    const {appState}  = useContext(AppContext);
    const {option} = appState;
    console.log(`Current state value is: ${option}`)
    console.log(appState)
    let renderingPart = <div>Empty component</div>;
    switch (option){
        case 1:
            renderingPart = <Hero/>
            break;
        case 2:
            renderingPart = <NowPlaying/>
            break;
        case 3:
            renderingPart = <Populars/>
            break;
        default:
            renderingPart = "Profe: No valid state associated"
            break;
    }
    return ( <div>{renderingPart}</div>)
}