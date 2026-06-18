import Task1 from "../Day6/Task1";
import Task2 from "../Day6/Task2";
import Task3 from "../Day6/Task3";
import Task4 from "../Day6/Task4";
import Task5 from "../Day6/Task5";
import Task6 from "../Day6/Task6";
import Task7 from "../Day6/Task7";
import Task8 from "../Day6/Task8";
import Task9 from "../Day6/Task9";
import Task10 from "../Day6/Task10";
import Task11 from "../Day6/Task11";
import Task12 from "../Day6/Task12";
import Task13 from "../Day6/Task13";
import Task14 from "../Day6/Task14";
import Task15 from "../Day6/Task15";

const Day6 = () => {
  return (
    <div className="min-h-screen bg-purple-800 p-10">
      <h1 className="text-6xl font-bold text-center mb-12">
        DAY 6 Tasks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
        <Task7 />
        <Task8 />
        <Task9 />
        <Task10 />
        <Task11 />
        <Task12 />
        <Task13 />
        <Task14 />
        <Task15 />
      </div>
    </div>
  );
};

export default Day6;