import './css/aboutme.css'
import React from 'react';

function FlipCard( { title, backContent }) {
    return(
        <div className='flipCard'>
            <div className='flipInner'>
                <div className='front'>{ title }</div>
                <div className='back'>{ backContent }</div>
            </div>
        </div>
    );
}

function AboutMe(){
    const card = [
        {title: "Education", backContent: (
            <>
                <p>~SMJK Phor Tay (2019-2023) SPM: 8A+ 2A</p>
                <p>~Kolej Matrikulasi Pulau Pinang (2024-2025) CGPA:4.0</p>
                <p>~Universiti Malaya Bachelor in Computer Science(Artificial Intelligence) (2025-now)</p>
            </>
        )},

        {title: "Languages", backContent: (
            <>
                <p>~Chinese Native</p>
                <p>~English Full professional proficiency</p>
                <p>~Malay   Personal working proficiency</p>
                <p>~German  Elementary proficiency</p>
            </>
        )},

        {title: "Skills", backContent: (
            <>
                <p>~Frontend : Html, Css, React</p>
                <p>~Data: SQL</p>
                <p>~ML: numPy, skLearn</p>
            </>
        )},

        {title: "Hobbies", backContent:(
            <>
                <p>~Badminton</p>
                <p>~Swimming</p>
                <p>~Reading</p>
            </>
        )},
    ];

    return (
        <div className='aboutme'>
            {card.map((card, index) => (
                <FlipCard
                    key = {index}
                    title={card.title}
                    backContent={card.backContent}
                />
            ))}
        </div>
    );
}

export default AboutMe;