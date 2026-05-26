import logoLarge from "../assets/images/logo-large.svg";
import logoSmall from "../assets/images/logo-small.svg";
import personalBest from "../assets/images/icon-personal-best.svg";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <img
          src={logoLarge}
          alt="Type Speed Test"
          className="hidden md:block"
        />

        <img src={logoSmall} alt="Type Speed Test" className="md:hidden" />

        <div className="flex items-center gap-2">
          <img src={personalBest} alt="" className="w-4 h-4" />

          <h4>
            <span className="text-gray-500 md:hidden">Best:</span>{" "}
            <span className="text-gray-500 hidden md:inline">
              Personal Best:
            </span>{" "}
            92 WPM
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
