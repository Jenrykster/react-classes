import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    console.log('opa');
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name='description' content='Add a new meetup'></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
