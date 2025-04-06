import React from "react";
import "../css/header.css"
import { Container } from "@mui/material";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

function Header() {
    return (
        <div className="header">
            <Container maxWidth="xl" className="container">
                <div className="logo">
                    <img src="src/assets/logo.svg" alt="Logo" />
                </div>
                <div className="button">
                    <p>Spor</p>
                    <p>Siyaset</p>
                    <p>Ekonomi</p>
                </div>
                <div className="input">
                    <input className="search-input" type="text" placeholder="Haber Ara.." />
                </div>
            </Container>

        </div>

    );
};

export default Header