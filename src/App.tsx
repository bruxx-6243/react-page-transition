import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Header } from "./template/Header";
import { Transition } from "./utils/transition";

import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <Transition>
                <HomePage />
              </Transition>
            }
          />
          <Route
            path="/about"
            element={
              <Transition>
                <AboutPage />
              </Transition>
            }
          />
          <Route
            path="/contact"
            element={
              <Transition>
                <ContactPage />
              </Transition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
