import { MongoClient } from 'mongodb';

async function handler(req, res) {
  console.log('dksdksd');
  if (req.method === 'POST') {
    console.log('opsodps');
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://jenryk:admin@react-class.fbldd.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Meetupd inserted' });
  }
}

export default handler;
