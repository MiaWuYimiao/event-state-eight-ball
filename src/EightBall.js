import { useState } from 'react';
import './EightBall.css';

function EightBall(props) {
    let answers = [...props.answers];
    let [color, setColor] = useState('black');
    let [message, setMessage] = useState('Think of a Question');
    let [greencount, setGreencount] = useState(0);
    let [goldenrodcount, setGoldenrodcount] = useState(0);
    let [redcount, setRedcount] = useState(0);


    function clickBall() {
        let randomIdx = Math.floor(Math.random() * answers.length);
        setColor(answers[randomIdx].color);
        setMessage(answers[randomIdx].msg);

        if(answers[randomIdx].color === "green") {
            setGreencount(greencount+1);
        }
        else if(answers[randomIdx].color === "goldenrod") {
            setGoldenrodcount(goldenrodcount+1);
        }
        else{
            setRedcount(redcount+1);
        }
    }

    function reset() {
        setColor('black');
        setMessage('Think of a Question');
        setGreencount(0);
        setGoldenrodcount(0);
        setRedcount(0);
    }

    return (
        <div className="EightBall">
            <div  onClick={clickBall} className="EightBall-circle" style={{backgroundColor: `${color}`}}>
                {message}
            </div>
            <p>Green count: {greencount}</p>
            <p>Goldenrod count: {goldenrodcount}</p>
            <p>Red count: {redcount}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};

export default EightBall;