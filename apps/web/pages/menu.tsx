import * as React from 'react'
import * as Constants from '../Constants'

export default function Menu(){

    const [step, setStep] = React.useState<string>(Constants.MainMenu.Menu)

    function handleStep(name: string){
        setStep(name)
    }

    if(step === Constants.MainMenu.Multiplayer) {
        return(
            <div>
                <ul>
                    <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}}>Shooter mode</li>
                    <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}}>Tactical mode</li>
                </ul>
            </div>
        )
    }

    if(step === Constants.MainMenu.Singleplayer) {
        return(
            <div>
                <ul>
                    <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}}>Shooter mode</li>
                    <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}} >Tactical mode</li>
                    <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}}>Stealth mode</li>
                </ul>
            </div>
        )
    }

    return(
        <div>
           <ul>
               <li style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}} onClick={()=>handleStep(Constants.MainMenu.Multiplayer)}>Multiplayer</li>
               <li  style={{cursor:"pointer", fontWeight:"bold", fontSize:"21px"}} onClick={()=>handleStep(Constants.MainMenu.Singleplayer)}>Singleplayer</li>
           </ul>
        </div>
    )
}
