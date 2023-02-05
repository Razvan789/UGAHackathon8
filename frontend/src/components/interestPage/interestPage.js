import React from "react";
import "./interestPage.css";
import { Link } from "react-router-dom";
import ToggleButton from "../toggleButton/toggleButton";
import { ReactComponent as CameraIcon } from '../../images/camera.svg';
import { ReactComponent as GobletIcon } from '../../images/goblet-full.svg';
import { ReactComponent as MusicIcon } from '../../images/music.svg';
import { ReactComponent as NoodlesIcon } from '../../images/noodles.svg';
import { ReactComponent as OutdoorIcon } from '../../images/outdoor.svg';
import { ReactComponent as ParachuteIcon } from '../../images/parachute.svg';
import { ReactComponent as PlatteIcon } from '../../images/platte.svg';
import { ReactComponent as MuseumIcon } from '../../images/museum.svg';
import { ReactComponent as ShoppingIcon } from '../../images/shopping.svg';


export default function interestPage() {

    return (
        <div className="container flex-center">
            <h1>Intrests</h1>
            <div className="btn-group">
                <ToggleButton title="Photography" isActive={true} icon={<CameraIcon className=""/>} />
                <ToggleButton title="Cooking" isActive={false} icon={<NoodlesIcon className=""/>} />
                <ToggleButton title="Art" isActive={false} icon={<PlatteIcon className=""/>}/>
                <ToggleButton title="Parachuting" isActive={false} icon={<ParachuteIcon className=""/>}/>
                <ToggleButton title="Night Life" isActive={false} icon={<GobletIcon className=""/>}/>
                <ToggleButton title="Shopping" isActive={false} icon={<ShoppingIcon className=""/>}/>
                <ToggleButton title="Museums" isActive={false} icon={<MuseumIcon className=""/>}/>
                <ToggleButton title="Hiking" isActive={false} icon={<OutdoorIcon className=""/>}/>
                <ToggleButton title="Shopping" isActive={false} icon={<ShoppingIcon className=""/>}/>
                <ToggleButton title="Live Music" isActive={false} icon={<MusicIcon className=""/>}/>
            </div>
            <p></p>
            <Link to={'/signup'} className="router-link">
                <button className="btn primary light-text x-padding">Continue</button>
            </Link>

        </div>
    )
}