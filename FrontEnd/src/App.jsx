import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage_";
export default function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/mycourses" element={<MyCourses />} />
      </Routes>
    </Router>
  );
}