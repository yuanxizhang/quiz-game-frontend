import React, {useState} from 'react';
 
const Flashcard = ({flashcard}) => {

    const [flip, setFlip] = useState(false);

    return (
        <div 
            className={`card ${flip ? "flip" : " " }`}
            onClick={()=>setFlip(!flip)}
        >
            <div className='front'>
                {flashcard.question}
                <div className='flashcard-options'>
                    {flashcard.options.map(option => {
                        return <div className='flashcard-option' key={option.id}>{option.item}</div>
                    })}
                </div>
            </div>
            <div className='back'>{flashcard.answer}
                    <br/><br/><br/>{flashcard.explain}
            </div>
        </div>
    );
}
 
export default Flashcard;