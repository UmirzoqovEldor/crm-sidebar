import { Component } from "react";
import { Img, List, Name, Persin, Profl, SaidContainer } from ".";

import { analitk, data, exit, person, setting, vectors } from "../assets/data";
import { render } from "react-dom";

class Sidebar extends Component {
  render() {
    this.state = {
      activ: [],
    };
    function onSubmit(params) {
      if (this.state.activ.includes(params)) {
        let res = this.state.activ.filter((val) => val !== params);
        this.setState({ activ: res });
      } else {
        let activ = [...this.state.activ, params];
        this.setState({ activ });
      }
      console.log(this.state.activ);
    }
    // function isActib(title) {
    //   return this.state.activ.includes(title)
    // }
    return (
      <>
        <SaidContainer>
          <Name>webbrin.crm</Name>
          <Img>
            <Persin src={person}></Persin>
            <div>
              <Img.Name>Sardorbek Muhtorov</Img.Name>
              <Img.Emil>s.muhtorov@gmail.com</Img.Emil>
            </div>
          </Img>
          <Profl>
            {data.map((valu) => (
              <List
                onClick={() => {
                  onSubmit.bind(this)(valu.title);
                }}
                key={valu.id}
              >
                <List.Img src={valu.img}></List.Img>
                <List.Title active="true">{valu.title}</List.Title>
                <List.Icon Rotet={"model"} src={valu.icon}></List.Icon>
              </List>
            ))}
          </Profl>
          <List>
            <List.Img src={setting}></List.Img>
            <List.Title>Sozlamalr</List.Title>
            <List.Icon src={vectors}></List.Icon>
          </List>

          <List last={true}>
            <List.Img src={exit}></List.Img>
            <List.Title>Chiqish</List.Title>
            <List.Icon src={vectors}></List.Icon>
          </List>
        </SaidContainer>
      </>
    );
  }
}
export default Sidebar;
