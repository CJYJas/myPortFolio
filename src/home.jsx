import { useState, useEffect} from "react";
import './css/home.css';
import jasminePic from './jasmine.png';
import resume from './Resume.pdf';

function Home() {
    const text = "I am a Year 1 Computer Science student, currently studying at Universiti Malaya,aimimg to become a Data Scientist.";
    const [displayText, setDisplayText] = useState("");


    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(text.slice(0, i++));
            if (i > text.length) clearInterval(timer);
        }, 80)
    },[]);

    return(
        <div className="home">
            <img className="img"
                 alt="Profile Pic"
                 src = {jasminePic}/>
            <div className="textBlock">
                <h1 className="text">{displayText}</h1>
                <button onClick={() => window.open(resume, '_blank')} className="resume">
                    My Resume
                </button>
            </div>
        </div>
    );
}
export default Home;
