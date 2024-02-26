import { Component } from "react";
import { List } from ".";
export class ListItem extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div>
        <List
          onClick={() => {
            // onSubmit.bind(this)(.title);
            this.setState({ isOpen: !this.state.isOpen });
          }}
          key={this.props.item.id}
        >
          <List.Img src={this.props.item.img}></List.Img>
          <List.Title active="true">{this.props.item.title}</List.Title>
          <div style={{ transform: this.state.isOpen ? "rotate(90deg)" : "" }}>
            <List.Icon
              icon={() => {
                isActib.bind(this)(this.props.item.title);
              }}
              src={this.props.item.icon}
            ></List.Icon>
          </div>
        </List>
        {this.state.isOpen ? (
          <div style={{ padding: "10px", color: "white" }} className="dropdown">
            <div className="dropdown-item">list item</div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
