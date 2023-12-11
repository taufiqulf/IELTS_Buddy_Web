import listening from "../assets/listening.png";
import reading from "../assets/reading.png";
import writing from "../assets/writing.png";
import speaking from "../assets/speaking.png";
import Card from "../shared/Card";

const Test = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y pb-20" id="test">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-secondary mb-2">Take Your Test</h2>
      </div>
      <p className="text-secondary max-w-s mx-auto px-4 text-xl text-center">
        Master the language of success with English Buddy for IELTS Excellence! #IELTSReady #EnglishBuddy
      </p>

      {/* TEST CARD */}
      <div className="mt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen mx-auto ">
          <Card
            ilust={listening}
            title={"Listening Test"}
            desc={"Sharpen your listening skills with our practice exercises and simulated test environments."}
            btn2={"Start Test"}
          />
          <Card
            ilust={reading}
            title={"Reading Test"}
            desc={"Improve your reading comprehension with a variety of practice passages and quizzes."}
            btn2={"Start Test"}
          />
          <Card
            ilust={writing}
            title={"Writing Test"}
            desc={"Enhance your writing skills through guided quizzes and essay writing practices."}
            btn2={"Start Test"}
          />
          <Card
            ilust={speaking}
            title={"Speaking Test"}
            desc={"Practice your spoken English skills with our interactive speaking test simulations."}
            btn2={"Start Test"}
          />
        </div>
        <div className="flex items-center justify-center pt-12">
          <button className="btnPrimary text-3xl text-brokenwhite">Take Your Test</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
