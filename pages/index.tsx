import Head from "next/head";

//components
import Navbar from "components/pages/index/Navbar/Navbar";
import CallToSign from "components/pages/index/CallToSign/CallToSign";
import TopProjects from "components/pages/index/TopProjects/TopProjects";
import Footer from "components/global/Footer/Footer";

//css
import * as Styled from "styles/pages/index";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Code Review | Home</title>
      </Head>
      <Navbar />
      <Styled.Wallpaper>
        <CallToSign />
        <TopProjects />
      </Styled.Wallpaper>
      <Footer/>
    </>
  );
};

export default Home;
