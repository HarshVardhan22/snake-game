import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SpanText } from "../common-styled-components";

const DropDownWithPillSelection = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef(null);

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];

  const handleInputClick = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    if (selectedItems.length < 5 && !selectedItems.includes(option)) {
      setSelectedItems([...selectedItems, option]);
    }
  };

  const handleRemoveItemClick = (e, index) => {
    e.stopPropagation();
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
  };

  const filteredOptions = options.filter(
    (option) => !selectedItems.includes(option)
  );

  const handleDropdownClose = (e) => {
    e.stopPropagation();
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <Wrapper ref={dropdownRef}>
      <Container onClick={handleInputClick}>
        {selectedItems.length === 0 && (
          <SpanText color="#ACACAC">Select up to five</SpanText>
        )}
        {selectedItems.map((item, index) => (
          <Pill key={index}>
            <SpanText color="#000">{item}</SpanText>
            <CrossButton
              type="button"
              onClick={(e) => handleRemoveItemClick(e, index)}
            >
              &times;
            </CrossButton>
          </Pill>
        ))}
        {dropdownVisible && (
          <CrossButton
            className="dropdownBtn"
            type="button"
            onClick={handleDropdownClose}
          >
            &#10006;
          </CrossButton>
        )}
      </Container>
      {dropdownVisible && (
        <DropDownContainer>
          {filteredOptions.map((option, index) => (
            <DropDownItems
              color="#494E5B"
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropDownItems>
          ))}
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

export default DropDownWithPillSelection;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 0.25rem;
  padding: 1rem;
  &:active {
    border: 1px solid red;
  }
`;

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: 0rem 0.5rem;
  background-color: #eaecf0;
  border-radius: 2rem;
`;

const CrossButton = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &.dropdownBtn {
    background-color: #fff;
    margin-left: auto;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 5rem;
  width: calc(100% - 0.5rem);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 12rem;
  padding: 0.25rem;
  overflow-y: scroll;
  background: rgba(255, 255, 255);
  z-index: 2;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 44px 114px -20px rgba(126, 129, 140, 0.25);
  
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
`;

const DropDownItems = styled.li`
  color: #494e5b;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  &:hover {
    background: #ebdfff;
    border-radius: 5px;
  }
`;
