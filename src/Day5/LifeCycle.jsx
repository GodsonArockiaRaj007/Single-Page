import { Component } from "react";

class Class extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

    componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

   componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
        <>
        <div className=" flex justify-center mt-10">
                <div className="flex justify-center bg-white p-5 rounded-3xl w-fit">
            <div >
                <h1 className="font-bold text-3xl text-center">Task-2</h1>
                <p className="text-2xl font-bold text-center">{this.state.count}</p>
                <button className="border-2 border-black bg-red-800 ml-52 mb-5 text-white font-bold p-3 rounded-3xl" onClick={this.handleClick}>Click me</button>

                <div className=" bg-white border-2 p-5 rounded-3xl ">
                    <p>*When the component is created DidMount will be executer</p>
                    <p>*On every click DidUpdate  wil be executed</p>
                    <p>*When the component is removed WillUnmount will be executed</p>
                    <h1 className="font-bold">**To see where it is executed right click -- Inspect -- Console**</h1>
                </div>
                
      </div>
        </div>
        </div>
        
        </>
      
    );
  }
}

export default Class;