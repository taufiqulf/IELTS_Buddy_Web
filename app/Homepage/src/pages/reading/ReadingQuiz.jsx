import React, { useRef, useState } from "react";
import { quiz } from "./quiz.js";

const ReadingQuiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quiz[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("incorrect");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === quiz.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quiz[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("incorrect");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(quiz[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className="flex items-center justify-center my-5">
      <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
        <div className="sm:text-2xl text-xl">
          {result ? (
            <></>
          ) : (
            <>
              <h1 className="text-center text-2xl font-bold py-5">Bring Back The Big Cats</h1>
              <div className="grid md:grid-cols-2 grid-cols-1 auto-cols-auto py-5 space-x-5 h-max md:text-lg text-base text-justify">
                <p>
                  John Vesty says that the time for returning vanished native animals to Britain has arrived. Around 598 AD,
                  there is a poem that describes the hunting of a mystery animal called llewyn. What is it? Nothing got
                  fitted until 2006, an animal bone was found in the Kinsey Cave in northern England, dating from around the
                  same period. Until this discovery, the lynx which is a large spotted cat with tassel led ears was assumed
                  to have died in Britain at least 6000 years ago. It happens before the inhabitants of these islands do
                  farming. But in 2006, in Yorkshire and Scotland it is evident that the lynx and mysterious llewyn both are
                  the same. If so, the estimated extinction date of tassel-eared cats is 5000 years. <br /> <br />
                  However, in British culture this is not the last glimpse of the animal. A 9th century stone cross from the
                  Isle of Eigg shows along the deer, pig, aurochs, a speckled cat with tasselled ears is pursued by a mounted
                  hunter. We are sure that the animal’s backside hasn't been damaged over time as the lynx’s stubby tail is
                  unmistakable. It’s difficult to know about the creature even without this feature. Now, lynx has become the
                  totemic animal of a movement that transforms British environmentalism - rewilding. <br /> <br />
                  Rewilding is the huge restoration of damaged ecosystems. It involves replacing the trees to areas that have
                  been stripped, making seabed parts to recover from trawling and dredging and making rivers to freely flow.
                  These things are to bring back the missing species. In modern ecology, one of the top findings is
                  ecosystems without large predators which behave differently than those that retain them. Some drive dynamic
                  processes that resonate the complete food chain and provide niches for hundreds of species that might
                  struggle to survive. The killers will turn as life bringers. <br /> <br />
                  For British conservation, these findings give a great challenge, which is often selected as arbitrary
                  assemblages of plants and animals by putting huge effort and investment to preventthem from changing. As
                  the jar of pickles, it has preserved the living world by not letting anything in and out and keeping nature
                  in an arrested state. But ecosystems are not only based on the collection of species, it also depends on
                  the dynamic and changing relationship between them. The dynamism often varies based on the large predators.
                  <br /> <br />
                  When it comes to sea, it is even greater, the larger areas of commercial fishing need to be protected. 18th
                  century literature describes that the vast shoals of fish are chased by fin and sperm whales within sight
                  of the English shore. This method will greatly increase catches in the surrounding seas; the fishing
                  industry’s insistence on clearing every seabed without leaving any breeding reserves couldn’t be damaging
                  to its own interests.
                </p>
                <p>
                  Rewilding is one of the rare examples of environmental movement where campaigners communicate what they are
                  for rather than what they are against. The reason for enthusiasm for rewilding is spreading fastly in
                  Britain, is to create a more inspiring vision than the green movements’ promise of Follow us and the world
                  will be less awful than it would be.
                  <br /> <br />
                  There will be no threat to human beings by the lynx: there is no instance of a lynx preying on people. It
                  is a specialist predator of roe deer that has exploded in Britain in recent decades which holds back the
                  intensive browsing and planning to re-establish forests. It will also winkle out sika deer, an exotic
                  species that is impossible for human beings to control as it hides in impenetrable plantations of young
                  trees. Reintroducing this predator comes with the aim of bringing back the forests to the parts of our bare
                  and barren uplands. The lynx needs deep cover thus giving little risk to sheep and other livestock which
                  need to be in a condition of farm subsidies that are kept out of the woods. <br /> <br />
                  Several conservationists suggested that the lynx can be reintroduced within 20 years in the recent trip of
                  the Cairngorm Mountains. If trees return to the bare hills anywhere in Britain, the big cats will follow.
                  If it is seen from the perspective of anywhere else in Europe, there will be nothing extraordinary about
                  the proposals. Now, the lynx has been reintroduced to the Mountains, Alps in eastern France and mountains
                  in Germany and re-established in many places. Since 1970, the European population has tripled to nearly 10,
                  000. Like wolves, bears, pigs, bison, moose and other species, the lynx will spread as farming, left the
                  hills and then people discover that it is much needed to protect wildlife than to hunt it as tourists will
                  pay to see it. Large scale rewilding will happen everywhere except Britain.
                  <br /> <br />
                  Here, there are many changes in attitudes. Conservationists started to accept the jar model is failing even
                  on its own terms. Projects like Trees for life in the Highlands give hints of what is expected to come.
                  There is an organisation set up that seeks to catalyse the rewilding of land and sea across Britain, its
                  aim is to reintroduce the rarest species to British ecosystems: hope.
                </p>
              </div>
              <h2 className="font-bold p-4 flex items-center justify-center">{question.question}</h2>
              <div className="flex items-center justify-center">
                <ul className="cursor-pointer">
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option1}
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}>
                    {question.option1}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option2}
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}>
                    {question.option2}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option3}
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}>
                    {question.option3}
                  </li>
                  <li
                    className="border border-secondary rounded-[35px] px-5 py-1 mb-5"
                    ref={Option4}
                    onClick={(e) => {
                      checkAns(e, 4);
                    }}>
                    {question.option4}
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center pt-2">
                <h2 className="text-xl">
                  {index + 1} of {quiz.length} questions
                </h2>
              </div>
              <div className="flex justify-center items-center pt-2">
                <button onClick={next} className="btnPrimary text-xl">
                  Next
                </button>
              </div>
            </>
          )}
          {result ? (
            <>
              <div className="grid place-items-center space-y-5">
                <h2 className="">
                  You Scored {score} out of {quiz.length}
                </h2>
                <button onClick={reset} className="btnPrimary ">
                  Reset
                </button>
                <h2>Want to explore more?</h2>
                <img src="/logo.png" className="h-[142px]" />
                <a href="/">
                  <button className="btnPrimary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-orange">
                    Try Our Mobile App
                  </button>
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingQuiz;
