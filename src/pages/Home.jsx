import Navbar from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import TestControls from "../components/TestControls";
import restartIcon from "../assets/images/icon-restart.svg"

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <TestControls />
      <Paragraph />
      <button className="bg-gray-600 px-2 py-1 rounded-lg flex gap-2 text-sm mt-2">Restart Test <img src={restartIcon} className="w-3" /></button>
    </div>
  );
};

export default Home;
