import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [amountArr, setAmountArr] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const getDetails = (event) => {
    event.preventDefault();
    if (description === "" || amount === "" || date === "") {
      alert("All fields are Required");
    }
    // console.log(description);
    const itemDetails = {
      id: uuidv4(),
      description: description,
      amount: amount,
      date: date,
    };
    setAmountArr((prevState) => [...prevState, itemDetails]);
    // console.log(itemDetails);
    localStorage.setItem("expenses", amountArr);
    setAmount("");
    setDescription("");
    setDate("");
  };

  const onDelete = (id) => {
    console.log(id);
  };
  const getSumOfExpenses = () => {
    let total = 0;
    amountArr.map((eachItem) => {
      total = total + parseInt(eachItem.amount);
    });
    return total;
  };
  console.log(amountArr);
  return (
    <>
      <h1 className="heading">Personal Expenses Tracker</h1>
      <form onSubmit={getDetails}>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="description"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="amount"
        />{" "}
        <br />
        <input
          type="date"
          placeholder="date"
          className="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <p>Expenses :</p>
      <ul className="show-details">
        {amountArr.map((eachItem) => (
          <li className="list-container" key={eachItem.id}>
            <p>{eachItem.date}</p>
            <p>{eachItem.amount}</p>
            <p>{eachItem.description}</p>
            <div>
              <button
                type="button"
                className="edit-btn"
                onClick={(key) => {
                  console.log(key);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={(id) => {
                  console.log(id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="amount-container">
        <h3>Total:</h3>
        <p>{getSumOfExpenses()}</p>
      </div>
    </>
  );
}

export default App;
