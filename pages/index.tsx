import { NextPage } from "next";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Banner } from "../components/Banner";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navigation />
      <Banner />
    </Layout>
  );
};

export default Home;
