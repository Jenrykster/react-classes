import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);
