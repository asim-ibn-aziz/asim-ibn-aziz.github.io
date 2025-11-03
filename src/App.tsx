import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-200">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
};

export default App;
