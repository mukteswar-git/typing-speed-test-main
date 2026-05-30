import Data from "../../data.json"

const Paragraph = () => {
  return (
    <div className="container mx-auto p-4">
      {Data.hard[0].text}
      <div className="container mx-auto mt-4">
        <div className="border-b border-gray-400"></div>
      </div>
    </div>
  );
};

export default Paragraph;
