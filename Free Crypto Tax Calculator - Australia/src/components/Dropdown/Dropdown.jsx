import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const options = [
    {
      value: "australia",
      label: "Australia",
      imgSrc: "https://www.koinx.com/png/aus.png",
    },
    {
      value: "india",
      label: "India",
      imgSrc: "https://www.koinx.com/png/ind.png",
    },
    {
      value: "uk",
      label: "United Kingdom",
      imgSrc: "https://www.koinx.com/png/uk.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setIsOptionSelected(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsOptionSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={dropdownRef}>
      <div
        className={`select-selected  ${
          isOptionSelected ? "option-selected" : ""
        }`}
        onClick={toggleDropdown}
      >
        <img src={selectedOption.imgSrc} alt={`${selectedOption.label} Flag`} />
        <span>{selectedOption.label}</span>
      </div>
      {isDropdownOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-item ${
                selectedOption.label === option.label ? "same-as-selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.imgSrc} alt={`${option.label} Flag`} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
