import React from "react";

function ListGroup(props) {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

// default props
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
