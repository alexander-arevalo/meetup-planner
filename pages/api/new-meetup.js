import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://zerotwo:PmTU1pPvesmAmNe3@cluster0.iu8tlpb.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      console.log("Connected to MongoDB");
      const db = client.db();

      const meetupsCollection = db.collection("meetup_detail");

      const result = await meetupsCollection.insertOne(data);
      console.log("Meetup inserted:", result);
      client.close();
      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.error("MongoDB Error:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

export default handler;
