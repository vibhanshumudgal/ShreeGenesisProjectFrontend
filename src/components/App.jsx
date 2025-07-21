import Body from "./Body";

import LoginSignup from "./LoginSignup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CollegeForm from "./FormPage";
import ConfirmationPage from "./ConfirmationPage";
import Applications from "./Applications";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="" element={<LoginSignup />} /> // default route
          <Route path="/form" element={<CollegeForm />} />
          <Route path = "/confirmationPage" element={<ConfirmationPage/>} />
          <Route path = "/admin/applications" element={<Applications/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
