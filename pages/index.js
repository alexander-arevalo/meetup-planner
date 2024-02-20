import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://imgs.search.brave.com/1Any_NYLTNsW1U_AHvrk3xM2eifmK3ky45oC7BC9W50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8wNC8xOS8zNi9i/ZWFjaC0xMjM2NTgx/XzY0MC5qcGc",
    address: "Adress mo",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Firsts Meetup",
    image:
      "https://imgs.search.brave.com/1Any_NYLTNsW1U_AHvrk3xM2eifmK3ky45oC7BC9W50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8wNC8xOS8zNi9i/ZWFjaC0xMjM2NTgx/XzY0MC5qcGc",
    address: "Adress ko",
    description: "This is second meetup",
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Home;
