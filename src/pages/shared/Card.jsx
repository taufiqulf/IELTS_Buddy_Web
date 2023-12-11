const Card = ({ ilust, title, desc, btn2, path }) => {
  return (
    <div>
      <div className="border py-10 md:px-6 px-4 rounded-[35px] shadow-3xl">
        <h3 className="text-3xl font-bold text-center text-secondary">{title}</h3>
        <div className="flex items-center justify-center">
          <img src={ilust} alt="" />
        </div>
        <p className="text-secondary text-center my-5">{desc}</p>
        <div className="flex items-center justify-center">
          <a href={path}>
            <button className="btnPrimary text-2xl text-brokenwhite">{btn2}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
