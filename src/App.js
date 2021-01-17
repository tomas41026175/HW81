import React from "react";
import "./styles.css";
import HomePage from "./pages/Index";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}
