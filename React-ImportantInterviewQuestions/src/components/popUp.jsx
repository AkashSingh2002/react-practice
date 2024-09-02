import React from "react";

function PopUp(props) {
  const { isPopUpOpen, setIsPopUpOpen, popUpHeaderContent, popUpBodyContent } =
    props;

  return (
    <>
      {isPopUpOpen && (
        <div className="popUp">
          <div className="popHeader">
            <div className="header">{popUpHeaderContent}</div>
          </div>
            <div className="closeButton">
              <button type="button" onClick={() => setIsPopUpOpen(false)}>
              x
              </button>
            </div>
          <div className="body">{popUpBodyContent}</div>
        </div>
      )}
    </>
  );
}

export default PopUp;
