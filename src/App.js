import React, { useEffect, useState } from "react";
function App() {
  const [waid, setWaid] = useState('');
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    const waId = searchParams.get('waId');
    if (waId) {
      setWaid(waId);
    }
  }, []);

  return (
    <div>
      {waid && <p>waid</p>}
      <button onClick={() => window.location.href = "https://sanjana.authlink.me/?redirectUri=http%3A%2F%2Flocalhost%3A3000%2F"}>Click Me</button>
    </div >
  );
}

export default App;
