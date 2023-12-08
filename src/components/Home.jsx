import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={banner}
        heading={"English Buddy"}
        subheading={"Master the language of success with English Buddy - Your Ultimate Companion for IELTS Excellence! "}
        btn1={"Start Test"}
      />
    </div>
  );
};

export default Home;
