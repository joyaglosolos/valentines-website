import { useState } from 'react'
import './App.css'

function App() {
  const [persuasionText, setPersuasionText] = useState('')
  const [yesSize, setYesSize] = useState(1.2)
  const [persuasionIndex, setPersuasionIndex] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const persuasions = [
    "Please?",
    "Think about it more carefully",
    "Are you sure?",
    "Don't break my heart 💔",
    "Give me a chance?",
    "Pretty please? 🥺",
    "I'll be sad...",
    "Reconsider?",
    "You know you want to say yes",
    "Come on...",
    "Just imagine how cute we'd be 😌",
    "I promise I'm worth it 😎",
    "At least think about it for 5 more seconds?",
    "This is your sign 👀",
    "I can wait... but like... not too long 😭",
    "Don't make me beg (again)",
    "Are you really going to say no to this face?",
    "I already told my future self you'd say yes",
    "Plot twist: you say yes 💕",
    "Okay but hear me out...",
    "What if this is destiny?",
    "I’m literally on my knees right now, you like that don't you?", 
    "Please don’t make me update my villain origin story", 
    "Even my plants are rooting for us 🌱 (they're dead)",
    "Be honest... you smiled, didn't you?",
    "Last chance before I dramatically faint",
    "I can’t go on pretending I’m okay without your answer 😩",
    "WTF ?! 😩",
    "GRRRRRRRRRRR! 😤",
    "I’m literally pacing in my room 😩 Virtually",
    "Do you want me to cry? Because I will 😭",
    "My Wi-Fi can’t handle the suspense 🌐",
    "I’ll send a dozen memes if you say yes 😂",
    "Stop being difficult 😤",
    "I’ve rehearsed a speech for your yes 🗣️",
    "Are you trying to make me implode? 😭",
    "I love you, pleaseee 😩💕",
    "My heart is literally on pause 💔"
  ];

  const handleNoClick = () => {
    setPersuasionText(persuasions[persuasionIndex])
    setPersuasionIndex((persuasionIndex + 1) % persuasions.length)
    setYesSize(prev => prev + 0.3)
  }

  const handleYesClick = () => {
    setAccepted(true)
    setPersuasionText('')
  }

  if (accepted) {
    return (
      <div className="container">
        <div className="celebration">
          <h1 className="thank-you">THANK YOU BABI! I LOVE YOU💕</h1>
          <p className="chat-message">
            Please chat me and say you never clicked No, even tho you probably did, but it doesn't matter! <br/>chat me "OH FUNNY, YOU'VE FINALLY ASKED, I SAID YES!" and then let's plan!
          </p>
          <div className="celebration-gifs">  
            <img src="/celebration/1.gif" alt="celebration" className="celebration-gif" />
            <img src="/celebration/2.gif" alt="celebration" className="celebration-gif" />
            <img src="/celebration/3.gif" alt="celebration" className="celebration-gif" />
            <img src="/celebration/4.gif" alt="celebration" className="celebration-gif" />
            <img src="/celebration/5.gif" alt="celebration" className="celebration-gif" />
            <img src="/celebration/6.gif" alt="celebration" className="celebration-gif" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="content">
        {persuasionText && (
          <div className="persuasion-container">
            <img src="/point.gif" alt="pointing" className="point-gif" />
            <p className="persuasion">{persuasionText}</p>
            <img src="/point2.gif" alt="pointing" className="point-gif" />
          </div>
        )}
        <img src="/Propose.gif" alt="Proposal" className="gif" />
        <h1 className="question">WILL YOU BE MY</h1>
        <h2 className="valentine">Valentine?</h2>
        <div className="buttons">
          <button className="btn yes" style={{ fontSize: `${yesSize}rem`, padding: `${yesSize * 12.5}px ${yesSize * 41.67}px` }} onClick={handleYesClick}>YES</button>
          <button className="btn no" onClick={handleNoClick}>NO</button>
        </div>
      </div>
    </div>
  )
}

export default App
