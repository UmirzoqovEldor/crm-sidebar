import { Img, List, Name, Persin, Profl, SaidContainer } from ".";
import Modal from "../sidebar/Modal";
import { data, exit, person, setting, vectors } from "../assets/data";
import { useState } from "react";

const Sidebar = () => {
  
  const [list] = useState(data);
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
          {list.map((val) => {
            return (
              <List key={val.id}>
                <List.Img src={val.img}></List.Img>
                <List.Title>{val.title}</List.Title>
                <List.Icon src={val.icon}></List.Icon>

                
              </List>
            );
          })}
        </Profl>
        <List>
          <List.Img src={setting}></List.Img>
          <List.Title>Sozlamalr</List.Title>
          <List.Icon src={vectors}></List.Icon>
        </List>

        <List last={"true"}>
          <List.Img src={exit}></List.Img>
          <List.Title>Chiqish</List.Title>
          <List.Icon src={vectors}></List.Icon>
        </List>
      </SaidContainer>
      <Modal />
    </>
  );
};

export default Sidebar;
