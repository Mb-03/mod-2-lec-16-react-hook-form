import { NavLink, Route, Routes } from "react-router-dom";
import NewRegisterForm from "./components/newRegisterForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-blue-400">
        <NavLink to="/">Submit</NavLink>
        <NavLink to="/feedbacks">Feedbacks</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<NewRegisterForm />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
      </Routes>
    </div>
  );
};

export default App;
