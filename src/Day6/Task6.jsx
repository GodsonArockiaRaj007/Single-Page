import { useState } from "react";

const Task6 = () => {
  const [showContent, setShowContent] = useState(true);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="bg-stone-100 w-80 p-6 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">Task-6</h2>
      <h3 className="text-2xl font-semibold mb-4"> Show / Hide Content</h3>
      {showContent && (
        <p className="text-lg mb-4">
          This paragraph is visible.
        </p>
      )}

      <button  onClick={handleToggleContent} className="bg-orange-600 hover:bg-orange-800 text-white px-4 py-2 rounded-3xl">
        {showContent ? "Hide Content" : "Show Content"}
      </button>
    </div>
  );
};

export default Task6;