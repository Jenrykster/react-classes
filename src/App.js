import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('%cAPP RUNNING', 'color:red; font-size:40px');

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParagraphHandler = useCallback(() => {
    console.log(allowToggle);
    if (allowToggle) {
      setShowParagraph((prevShow) => !prevShow);
    }
  }, [allowToggle]);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
