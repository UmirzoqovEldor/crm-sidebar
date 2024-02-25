import { Component } from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Header from "./header/Header";

class Root extends Component {
  render() {
    return (
      <div className="crm-body">
        <Sidebar />
        <div>
          <Header />
          
          <Body />
        </div>
      </div>
    );
  }
}
export default Root;
