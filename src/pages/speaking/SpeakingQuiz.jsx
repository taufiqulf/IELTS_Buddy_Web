const SpeakingQuiz = () => {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
        <div className="grid md:grid-cols-3 grid-cols-1 auto-cols-auto md:space-x-5 h-max md:text-lg text-base text-justify">
          <p>
            <span className="font-bold">1. Tell Me About Yourself</span>
            <br />
            I'm pleased to talk with you today. My name is [Your Name], I come from [Your Country], and currently, I reside
            in [City Name]. I graduated from [University Name/Last Educational Level] with a degree in [Your Major]. I work
            as a [Your Job], and I truly enjoy my job because [Reason Why You Enjoy Your Job]. Outside of work, I like [Your
            Favorite Hobby or Activity], which helps me relax and find balance in life.
          </p>
          <p>
            <span className="font-bold">2. How Would you Describe The City You Live in?</span>
            <br />I live in [City Name], which is quite fascinating. It's a densely populated city, but at the same time, it
            has a dynamic urban life and many tourist attractions. One thing I like about this city is [Example of City's
            Advantages or Interesting Activities] that always provide opportunities for socializing and exploration.
          </p>
          <p>
            <span className="font-bold">3. Do You Prefer Shopping In Physical Stores Or Online? Why?</span>
            <br />I tend to prefer shopping online. This is because it offers greater convenience, especially with the hustle
            and bustle of daily life. I can easily browse products, read reviews from other users, and even get delivery
            straight to my doorstep. However, I also acknowledge the value of shopping in physical stores as it can provide a
            hands-on experience with products and a different social interaction.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SpeakingQuiz;
