import React, { createElement } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = { color: " red", fontSize: "32px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1> Pizza Menu Domine Patrie</h1>
    </header>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="" />
      <div>
        <h3> {props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2> Our menu</h2>

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div> */}

      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We are still coming to out menu</p>
      )}
      {/* <Pizza />
        <Pizza />
        <Pizza /> */}
    </main>
  );
}
console.log("working");
console.log("checking");

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  // hour >= openHour && hour <= closeHour
  //   ? alert("We are open!")
  //   : alert(
  //       `We are close ! We open at : ${openHour} and close at : ${closeHour}`
  //     );

  return (
    <footer className="footer">
      {isOpen && (
        <div>
          <p> We are open until{closeHour}:00. Come visit us order online!</p>
          <button className="btn"> Order </button>
        </div>
      )}
    </footer>
  );
}

//How to start a react application with react simple as that
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
