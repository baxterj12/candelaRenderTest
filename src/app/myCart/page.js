'use client'
import React from 'react';
import {CartProvider } from './../cart.js';
import DisplayItems from './displayItems.js';
import TopBar from './../topBar.js';

export default function CartItems() {

    return (
        <div className="cartContainer">
            <title>Candela | View Cart</title>
            <TopBar/>
            <h2 className="yourCart">Your Cart</h2>
            <DisplayItems/>
        </div>
    );
}