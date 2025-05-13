import React, { useState, useEffect } from 'react';


const themes = ['default', 'dark', 'blue', 'green'];

function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove(...themes.map(t => `theme-${t}`));
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'default';
    setTheme(saved);
  }, []);

  return (
    <>
      <nav className="navbar">
        
        <div className="theme-picker">
          {themes.map(t => (
            <button
              key={t}
              className={`theme-btn ${theme === t ? 'active' : ''}`}
              onClick={() => setTheme(t)}
              title={t}
              style={{
                backgroundColor:
                  t === 'dark' ? '' :
                  t === 'blue' ? '#00bcd4' :
                  t === 'green' ? '#4caf50' :
                  t === 'yellow'? '#20b2aa'  :
                  '#fff',
              }}
            />
          ))}
        </div>
      </nav>


    </>
  );
}

export default App;
