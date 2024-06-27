
'use client'
import react, {useState} from 'react';
import './page.css';
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
export default function BottomBar() {
    return (
        <div className="contactInfo">
            <div className="format">
            <div className="getInTouch">
                <h2>GET IN TOUCH</h2>
                <div className="icons">
                <FaTwitter size = {25}/>
                <FaInstagram size = {25}/>
                <FaEnvelope size={25} />
                <p className="email">info@sequencecollection.com</p>
                </div>
            </div>
            <div className="newsletter">
                <h2>NEWSLETTER</h2>
                <p>Sign up for the latest news, offers, and styles</p>
                <div className = "input-group">
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
                </div>
            </div>
            </div>
            <div className ="space">
            
            </div>
            <p>@CopyRight © 2024, Sequence Collection. Ecommerce Software by Shopify</p>
            <p>Design by GreySkyGraphics</p>
            </div>
    );
}