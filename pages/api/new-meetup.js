import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //const { title, image, address, description } = data;

    const client = await MongoClient.connect('mongodb+srv://Ann:1159562452@cluster0.oinbdcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    const db = client.db();

    const meetupCollection = db.collection('meetups')

    const result = await meetupCollection.insertOne(data)

    client.close()

    res.status(201).json({message: 'Meetup inserted'})
  }
}
