import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading={"Start Your AI-Enhanced IELTS Preparation Today!"}
        subheading={
          "Dive into the future of language learning with EnglishBuddy, where cutting-edge AI technology meets personalized education. Experience a new era of IELTS preparation with intelligent tools designed to elevate your learning journey."
        }
      />
    </div>
  );
};

export default Home;
