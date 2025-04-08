import React, { useState, useEffect } from "react";
import "../App.css";

const LewisList = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
    
    const addItem = () => {
        if (inputValue.trim() !== "") {
                setItems([...items, inputValue]);
                setInputValue("");
        }
};

return (
    <div className="lewis-container">
        <div className="lewis-card">
                <h2 className="lewis-title">Dynamic List Manager</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter an item"
                        className="lewis-input"
                    />
                    <button onClick={addItem} className="lewis-button">Add Item</button>
                </div>
                <div className="lewis-list">
                    {items.length === 0 ? (
                        <p>No item added</p>
                    ) : (
                        <ul>
                           {items.map((item, index) => (
                                <li key={index}>{item}</li>
                           ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LewisList;