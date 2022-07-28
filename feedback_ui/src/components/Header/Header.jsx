import PropTypes from "prop-types"; // impt // defining what type props should be (at the end)

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};
//we can set up the default props, which will shis when other props not passed
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0 0 0 0.4)",
  textColor: "#ff6a95",
};
//PropTypes have to be imported at thee top
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
