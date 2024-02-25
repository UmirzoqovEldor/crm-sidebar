import styled, { css } from "styled-components";

export const Contanier = styled("div")`
  position: relative;
`;
export const Popup = styled("div")`
  padding: 32px 48px;
  width: 450px;
  height: 300px;
  position: absolute;
  top: 20px;
  left: 250px;
`;
const base = css`
  width: 77%;
  display: block;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 2px solid #929faf;
`;

Popup.Input = styled.input`
  ${base}
`;
Popup.title = styled.p`
  margin: 0;
  color: #929faf;
  font-size: 16px;
  font-weight: 500;
`;
Popup.Stav = styled("div")`
  display: flex;
  width: 74% !important;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;
Popup.StavIn = styled("div")`
  display: block;
  padding: 15px 90px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #f0f0f0;
`;
Popup.Btn1 = styled.button`
  padding: 10px 16px;
  margin-left: auto;
  border: 1px solid #ffa39e;
  color: #ffa39e;
  border-radius: 8px;
`;
Popup.Footer = styled("div")`
  width: 81%;
  margin-top: 32px;

  display: flex;
  gap: 16px;
  justify-content: end;
`;
Popup.Btn2 = styled.button`
  padding: 10px 16px;
  border: 1px solid #ffa39e;
  color: white;
  background-color: #1890ff;
  border-radius: 8px;
`;
