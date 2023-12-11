import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const Features = () => {
  return (
    <div className="my-24 md:px-14 max-w-screen mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 p-3">
        <div className="lg:w-1/4">
          <h3 className="text-3xl sm:text-5xl text-secondary font-bold lg:w-1/2 mb-3">Why EnglishBuddy?</h3>
          <p className="text-xl text-secondary">
            EnglishBuddy offers a comprehensive approach to mastering the IELTS exam with personalized learning, expert
            instructors, and a supportive community.
          </p>
        </div>
        {/* feature cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img src={feature1} alt="" />
                </div>
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">Personalized Study Plans</h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img src={feature2} alt="" />
                </div>
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">Interactive Learning Tools</h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img src={feature3} alt="" />
                </div>
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">
                  AI-Powered Conversational Speaking
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
