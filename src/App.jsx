import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import UniInfo from "./components/UniInfo.jsx";
import Documents from "./components/Documents.jsx";
import ApplyWithUs from "./components/Apply-With-Us.jsx";
import Contact from "./components/Contact.jsx";
import Donate from "./components/Donate.jsx";

function Home() {
  return (
    <>
      <Hero />
      <UniInfo />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="documents" element={<Documents />} />
        <Route path="foreign-scholarships" element={<UniInfo />} />
        <Route path="apply-with-us" element={<ApplyWithUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}
