import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Feedback from "./components/Feedback/Feedback";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
