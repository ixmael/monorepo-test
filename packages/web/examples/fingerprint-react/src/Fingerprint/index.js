import { useState, useEffect } from 'react';

const Fingerprint = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const script = document.createElement('script');
      script.src = 'http://localhost:3100/js/analytics.js';
      script.async = true;
      script.onload = () => {
        window.bayonet.analyze({
          jsKey: '123456789',
          onAnalyzedCallback: function (token) {
            setDevice(() => token.token);
          },
        });
      };

      document.body.appendChild(script);
    };

    fn();
  }, []);

  return (
    <>
      <h2>Device</h2>
      <div>{device}</div>
    </>
  );
};

export default Fingerprint;
