import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage</div>}/>
        <Route path="/results" element={<div>results</div>}/>
        <Route path="/table" element={<div>table</div>}/>
        <Route path="/clubs" element={<div>clubs</div>}/>
        <Route path="/red-hawks" element={<div>red-hawks</div>}/>
        <Route path="/jaguars" element={<div>jaguars</div>}/>
        <Route path="/mcc" element={<div>mcc</div>}/>
        <Route path="/dc-hawks" element={<div>dc-hawks</div>}/>
        <Route path="/wolves" element={<div>wolves</div>}/>
        <Route path="/dc-masters" element={<div>dc masters</div>}/>
      </Routes>
    </BrowserRouter>
  );
}


