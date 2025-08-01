import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "../components/Rooms/Rooms.jsx";
import DeluxeRooms from "../components/Rooms/DeluxeRooms.jsx";
import SuiteParadise from "../components/Rooms/SuiteParadise.jsx";
import SeaViewRoom from "../components/Rooms/SeaViewRoom.jsx";

const RoomsPage = () => (
    <div>
        <Rooms />
        <DeluxeRooms />
        <SuiteParadise />
        <SeaViewRoom />
    </div>
);

export default RoomsPage;
