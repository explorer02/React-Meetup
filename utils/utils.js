import { MongoClient } from "mongodb";

export const getCollection = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ajay:1234@cluster0.rtlof.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  return db.collection("meetups");
};

// export const getServerSideProps = async (context) => {
//   // const {req,res} = context
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://images.unsplash.com/photo-1565687363630-7a81809a199c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    address: "25 Main Street NY",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://images.unsplash.com/photo-1565687363630-7a81809a199c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    address: "2522 Santa Clara",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third meetup",
    image:
      "https://images.unsplash.com/photo-1565687363630-7a81809a199c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    address: "12/23 Brooklyn NY",
    description: "This is a third meetup",
  },
];
