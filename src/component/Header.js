import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  function passedFromParent() {
    alert("This was a property function being passed from the parent");
  }

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button parentFunction={passedFromParent} color="#071a07" text="Add" />
      </header>
    </>
  );
};

Header.defaultProps = {
  title: "Default",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const HeadingStyle = {
//   backgroundColor: "black",
//   color: "green",                  //INLINE CSS EXAMPLE
//   textAlign: "center"
// }
export default Header;
