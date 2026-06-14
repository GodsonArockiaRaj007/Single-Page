import GrandChild from "./GrandChild";

const Child = ({ name, course }) => {
  return (
    <>
    <div>
      <GrandChild name={name} course={course}/>
    </div>
    </>
  );
};

export default Child;