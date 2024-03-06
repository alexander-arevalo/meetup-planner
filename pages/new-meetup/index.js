import Head from "next/head";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Meetup Planner</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing meetups"
        />
        <link rel="icon" href="/page-icon.png" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
