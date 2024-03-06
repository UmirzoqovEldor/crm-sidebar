import styled from "styled-components";
export const SaidContainer = styled("div")`
  display: flex;
  /* justify-content: center;*/
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #162539;
`;
export const Saidbar = styled("div")``;
export const Name = styled.p`
  margin: 0;
  color: #1890ff;
  font-size: 30px;
  padding: 15px 30px;
  border-bottom: 1px solid #253e5f;
`;
export const Img = styled("div")`
  margin: 24px 0 24px 30px;
  display: flex;
  align-items: center;
`;
export const Persin = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
Img.Name = styled.p`
  margin: 0 16px;
  font-weight: 600;
  line-height: 20px;
  font-size: 18px;
  color: #f8fafc;
  font-family: Montserrat;
`;
Img.Emil = styled.p`
  margin: 0 16px;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: #929faf;
  font-family: Montserrat;
`;
export const List = styled("div")`
  padding: 12px 0;
  height: 30px;
  margin-top: ${({ last }) => last && "auto"};

  & path {
    fill: red !important;
    color: red;
  }
  display: flex;

  align-items: center;
  &:hover {
    width: 100%;
    height: 30px;

    background-color: #253e5f;
    & path {
      fill: red !important;
    }
  }
`;
List.Img = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 30px;
`;
List.Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 60px;
`;
List.Title = styled("div")`
  margin-top: ${({ last }) => last && "auto"};
  width: 30%;
  margin: 0 16px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: #1890ff;
`;
export const Profl = styled("div")`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #253e5f;
`;
export const ClickList = styled("div")`
  
  padding: 10px;
  margin-left: 55px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: white;
`;
