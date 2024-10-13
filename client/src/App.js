import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tutorials from "./pages/Tutorials";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setUser] = useState(false); // Replace with your actual authentication logic
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Container>
          {user ? (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          ) : (
            <Authentication />
          )}
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;