import React from "react";
import "./Notfound.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button } from "../../components/button";

export const Notfound = () => {
  return (
    <div>
      <Header />
      <div id="Error-container">
        <div id="error-container">
          <div id="four">
            <h1>404</h1>
          </div>
          <div id="error-writing">
            <h1>Page not found</h1>
            <p id="p">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <div style={{display:"flex", justifyContent:"center"}}>
              <a href="/">
                <Button>Back to home</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
