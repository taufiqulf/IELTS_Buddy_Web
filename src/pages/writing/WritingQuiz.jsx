import MLK from "/src/assets/mlk.png";

const WritingQuiz = () => {
  return (
    <div className="md:px-12 p-4 flex space-x-10 flex mx-auto ">
      <div className="gradientBg1 rounded-xl rounded-br-[80px] rounded-tl-[80px] md:p-9 px-4 py-9 mb-10 shadow-3xl">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* banner image */}
          <div>
            <img src={MLK} alt="" className="lg:h-[300px] px-10" />
          </div>

          {/* banner content */}
          <div className="md:w-2/3 px-10">
            <h2 className="md:text-3xl text-xl font-bold text-brokenwhite mb-6 leading-relaxed">
              "The function of education is to teach one to think intensively and to think critically. Inteligence plus
              character - that is the goal of true education."
            </h2>
            <br />
            <p className="text-brokenwhite text-end text-2xl mb-8">~Martin Luther King Jr.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingQuiz;
