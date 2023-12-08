const Card = ({ ilust, title, desc, btn2 }) => {
  return (
    <div>
      <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
        <h3 className="text-3xl font-bold text-center text-secondary">{title}</h3>
        <div className="flex items-center justify-center">
          <img src={ilust} alt="" />
        </div>
        <p className="text-secondary text-center my-5">{desc}</p>
        <div className="space-x-5 space-y-4 pl-3">
          <button className="btnPrimary text-xl">{btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
