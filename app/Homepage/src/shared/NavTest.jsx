import logo from "../assets/logo.png";

const NavTest = () => {
  return (
    <>
      <nav className="bg-primary md:px-14 p-4 max-w-screen mx-auto text-secondary fixed top-0 right-0 left-0">
        <div className="flex items-center justify-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-secondary">
            <img src={logo} alt="" className="w-10 inline-block items-center" /> <span>EnglishBuddy</span>
          </a>
        </div>
      </nav>
      <div className="bg-orange pt-20 flex text-center justify-center">
        <h2 className="text-xl text-white">Good Luck!</h2>
      </div>
    </>
  );
};

export default NavTest;
