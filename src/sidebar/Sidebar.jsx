import { Img, List, Name, Persin, Profl, SaidContainer, ClickList } from ".";
import Modal from "./Modal";
import { exit, person, setting, vectors } from "../assets/data";
import { useContext, useState } from "react";
import { FunctinContext } from "../context/Student";

const Sidebar = () => {
  const [list, dispatch] = useContext(FunctinContext);

  const [modal, setModal] = useState(false);
  const [isActiv, setIsActiv] = useState(false);
  function onActive(id) {
    setIsActiv(id);
  }
  function toggleModal() {
    setModal(true);
  }
  function deleteBtn() {
    setModal(false);
  }
  return (
    <>
      <SaidContainer>
        <Name onClick={toggleModal}>webbrin.crm</Name>
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
              <div key={val.id}>
                <List onClick={() => onActive(val.id)}>
                  <List.Img src={val.img}></List.Img>
                  <List.Title>{val.title}</List.Title>
                  <List.Icon
                    src={isActiv == val.id ? val.past : val.icon}
                  ></List.Icon>
                </List>
                {isActiv == val.id && (
                  <div>
                    {val.list.length
                      ? val.list.map((value, index) => {
                          return <ClickList key={index}>{value}</ClickList>;
                        })
                      : ""}
                  </div>
                )}
              </div>
            );
          })}
        </Profl>
        <List>
          <List.Img src={setting}></List.Img>
          <List.Title>Sozlamalr</List.Title>
          <List.Icon src={vectors}></List.Icon>
        </List>

        <List last="true">
          <List.Img src={exit}></List.Img>
          <List.Title>Chiqish</List.Title>
          <List.Icon src={vectors}></List.Icon>
        </List>
      </SaidContainer>
      <Modal modal={modal} click={deleteBtn} />
    </>
  );
};

export default Sidebar;
