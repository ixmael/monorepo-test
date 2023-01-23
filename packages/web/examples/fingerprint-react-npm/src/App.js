import { useState, useEffect } from 'react';

import fingerprint from '@bayonetio/fingerprint';

function App() {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    fingerprint.analyze({
      jsKey: '123456789',
      onAnalyzedCallback: function (token) {
        setDevice(() => token.token);
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Fingerprint example
      </header>
      <section>
        <div>device</div>
        <div>{device}</div>
      </section>
    </div>
  );
}

export default App;
