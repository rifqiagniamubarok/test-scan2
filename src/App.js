import { useState } from 'react';
import QrReader from 'react-qr-scanner';
import './App.css';

function App() {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState(null);

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    setResult(data);
  };
  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <div className="App">
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <div>
        <p>heloo : </p>
        <p>{result ? result?.text : 'noo'} </p>
      </div>
    </div>
  );
}

export default App;
