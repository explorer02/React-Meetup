import { ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getCollection } from "../../utils/utils";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <MeetupDetail
        image={props.image}
        alt={props.title}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </>
  );
};
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const meetupCollection = await getCollection();

  const res = (
    await meetupCollection.find({ _id: ObjectId(meetupId) }).toArray()
  )[0];
  return {
    props: {
      id: res._id.toString(),
      ...res.data,
    },
  };
};

export const getStaticPaths = async () => {
  const meetupCollection = await getCollection();
  const res = await meetupCollection.find({}, { _id: 1 }).toArray();
  return {
    paths: res.map((r) => ({ params: { meetupId: r._id.toString() } })),
    fallback: true,
  };
};

export default MeetupDetails;
