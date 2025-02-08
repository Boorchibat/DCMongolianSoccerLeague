import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dchawks, Club, Mcc, Redhawks, Results, Table, Wolves, Dcmasters, Notfound, Jaguars, SignIn, SignUp, Home } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/clubs" element={<Club/>}/>
        <Route path="/red-hawks" element={<Redhawks/>}/>
        <Route path="/jaguars" element={<Jaguars/>}/>
        <Route path="/mcc" element={<Mcc/>}/>
        <Route path="/dc-hawks" element={<Dchawks/>}/>
        <Route path="/wolves" element={<Wolves/>}/>
        <Route path="/dc-masters" element={<Dcmasters/>}/>
        <Route path="/404" element={<Notfound/>}/>
        <Route path="/Sign-in" element={<SignIn/>}/>
        <Route path="/Sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}


