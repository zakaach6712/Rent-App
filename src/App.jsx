import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
