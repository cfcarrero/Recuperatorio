import { useState } from 'react'
import './App.css'

function App() {
  const [displayText, setDisplayText] = useState('');
  const [nightMode, setNightMode] = useState(false);

  const handleButtonClick = (buttonName) => {
    setDisplayText(buttonName);
  };

  const handleCambiarTema = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <div className="buttons-container">
        <h1>¡Bienvenidos!</h1>
        <h2>Contanos ¿Cuál es tu plataforma favorita?</h2>
        <button onClick={() => handleButtonClick('Twitter')}>Twitter</button>
        <button onClick={() => handleButtonClick('Facebook')}>Facebook</button>
        <button onClick={() => handleButtonClick('Youtube')}>Youtube</button>

        <button onClick={handleCambiarTema}>
          {nightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
      <div className="display-container">
        {displayText && <p>{displayText}</p>}
      </div>
    </div>
  )
}

export default App