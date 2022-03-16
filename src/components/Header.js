import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h2>take a note</h2>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        toggle
      </button>
    </div>
  );
};

export default Header;
