'use client'
import react, {useState} from 'react';
import './bagLayout.css';
import Link from 'next/link';

export default function BagLayout({images, desc, name, price, shortName, status}) {
    const newhref = `/viewOrder/${shortName}`;
    return (
        <div className="bagContainer">
            <div className="bagImages">
                <img src={images[0]} className="firstBagCol"/>
                <img src={images[1]} className="secondBagCol"/>
            </div>
            <Link href={newhref}>
            {
                status==="Available" ? <p className='preOrderBagbutton'>View Item</p> : 
                <p className='preOrderBagbutton'>{status}</p>
            }
            </Link>
        </div>
    );
}