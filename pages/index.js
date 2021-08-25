import MeetupList from "../components/meetups/MeetupList";
import { getCollection } from "../utils/utils";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of meetups in React App"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
};

export const getStaticProps = async () => {
  const meetupsCollection = await getCollection();
  const result = await meetupsCollection.find().toArray();
  const meetups = result.map((m) => ({ id: m._id.toString(), ...m.data }));

  return {
    props: { meetups },
    revalidate: 10,
  };
};

export default HomePage;
