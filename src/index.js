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

function Pizza() {
  return (
    <div>
      <img src="pizzas/prosciutto.jpg" alt="Pizza Prosciutto" />
      <h3> Pizza Prosciutto </h3>{" "}
      <p> Tomato, mozarella, ham, aragula, and burrata cheese</p>
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

function Menu() {
  return (
    <div>
      <main className="menu">
        <h2> Our menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
      </main>
    </div>
  );
}

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
      {new Date().toLocaleTimeString()}. We are currently open
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
