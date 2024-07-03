import React from "react";

const PopupCard = ({ handleClosePopup }) => {
  return (
    <div className="popup">
      <div className="popupContent">
        <span className="closePopup" onClick={handleClosePopup}>
          &times;
        </span>
        <div className="popupMain">
          <div className="popupMainLeft">
            <div className="productDescription">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet at
              doloribus animi, quisquam debitis et incidunt doloremque, error
              tempora temporibus nemo laboriosam. Odit sunt quam possimus sit
              nam sed eveniet!
            </div>
          </div>
          <div className="popupMainRight"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
