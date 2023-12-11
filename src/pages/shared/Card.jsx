const Card = ({ ilust, title, desc }) => {
  return (
    <div>
      <div className="border py-10 md:px-6 px-4 rounded-[35px] shadow-3xl hover:-translate-y-4 transition-all duration-300">
        <h3 className="text-3xl font-bold text-center text-secondary">{title}</h3>
        <div className="flex items-center justify-center">
          <img src={ilust} alt="" />
        </div>
        <p className="text-secondary text-center my-5">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
