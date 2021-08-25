import { MongoClient } from "mongodb";
import { getCollection } from "../../utils/utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const meetupsCollection = await getCollection();
    await meetupsCollection.insertOne({ data });
    res.status(201).json({ message: "Meetup Inserted!!" });
  }
};

export default handler;
