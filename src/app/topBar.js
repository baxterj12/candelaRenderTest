'use client'
import react, {useState} from 'react';
import './topBar.css';
import Link from 'next/link';

export default function TopBar() {

    return (
        <div className="topBar">
            <Link href="/"><p className="returnHome">Candela Purposewear</p></Link>
            <div className="rightSideStuff">
                <Link href="/AboutUs"><p>About Us</p></Link>
                <Link href="/PreorderItems"><p>Pre-Order</p></Link>
                <Link href="/AvailableItems"><p>Available now</p></Link>
                <Link href="/myCart"><p className="toCart">Cart</p></Link>
            </div>
        </div>
    );
}
