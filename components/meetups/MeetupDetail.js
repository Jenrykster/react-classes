import classes from './MeetupDetail.module.css';

import { Fragment } from 'react';
function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>Casa 123, {props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
