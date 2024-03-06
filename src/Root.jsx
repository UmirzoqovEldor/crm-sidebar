import { Component } from "react";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

class Root extends Component {
  render() {
    return (
      <div className="crm-body">
        <Sidebar />

        <div>
          <Header />
        </div>
      </div>
    );
  }
}
export default Root;
