import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Cats from "../cats/cats";
import Dogs from "../dogs/dogs";
import PastEventsPage from "../pastEventsPage/pastEventsPage";
import FAQPage from "../FAQPage/FAQPage";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cats" element={<Cats />}></Route>
            <Route path="/dogs" element={<Dogs />}></Route>
            <Route path="/past_events" element={<PastEventsPage />}></Route>
            <Route path="/FAQ_page" element={<FAQPage />}></Route>
        </Routes>
    )
} 

export default Content;