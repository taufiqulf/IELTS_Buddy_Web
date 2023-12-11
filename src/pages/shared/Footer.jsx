import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-secondary md:px-14 p-4 max-w-screen mx-auto" id="support">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        {/* COPYRIGHT & SUBSCRIBE */}
        <div className="md:w-1/2 space-y-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-secondary">
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-orange">E-Buddy</span>
          </a>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque, nesciunt at nulla ab alias
            consequuntur deleniti eaque praesentium amet vitae iure quis enim eveniet odit explicabo rerum dicta maxime.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-primary text-orange py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-tartiary rounded-md -ml-2 cursor-pointer text-secondary hover:bg-orange hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>
        {/* FOOTER NAVIGATION */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="text-primary space-y-4 mt-5">
            <h4 className="text-xl font-semibold text-orange">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-white">
                Overview
              </a>
              <a href="/" className="block hover:text-white">
                Feauture
              </a>
              <a href="/" className="block hover:text-white">
                Test
              </a>
              <a href="/" className="block hover:text-white">
                Support
              </a>
            </ul>
          </div>
          {/* HELP */}
          <div className="text-primary space-y-4 mt-5">
            <h4 className="text-xl font-semibold text-orange">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-white">
                How does it works?
              </a>
              <a href="/" className="block hover:text-white">
                Where to ask question?
              </a>
              <a href="/" className="block hover:text-white">
                How to play?
              </a>
              <a href="/" className="block hover:text-white">
                What is needed for this?
              </a>
            </ul>
          </div>
          {/* CONTACTS */}
          <div className="text-primary space-y-4 mt-5">
            <h4 className="text-xl font-semibold text-orange">Contacts</h4>
            <ul className="space-y-3">
              <p>(021)-23456789</p>
              <p>support@ebuddy.com</p>
              <p>Jakarta, Indonesia</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-center">
        <p className="text-primary">@English Buddy 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
