import { useState } from 'react';
import { QRScanner } from 'react-scanned-qr';
import './App.css';

function App() {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState(null);

  const [isFace, setIsFace] = useState(false);

  const [legacy, setLegacy] = useState(false);
  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    setResult(data);
  };
  const previewStyle = {
    height: 400,
    width: 400,
  };
  return (
    <div className="App">
      <QRScanner
        delay={delay}
        style={previewStyle}
        onError={handleError}
        // legacyMode={legacy}
        onScanned={handleScan}
      />
      <div>
        <button onClick={() => setLegacy(!legacy)}>legacy</button>
        <button onClick={() => setIsFace(!isFace)}>fornt</button>
        <p>heloo : </p>
        <p>{result ? result?.text : 'noo'} </p>
      </div>
    </div>
  );
}

export default App;
