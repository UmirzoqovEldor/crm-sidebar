import { useContext } from "react";
import { FunctinContext } from "../context/Student";

const Header = () => {
  const [array, setArray] = useContext(FunctinContext);

  return (
    <>
      <h1>Header {array.length}</h1>
    </>
  );
};
export default Header;
