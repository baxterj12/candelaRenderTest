'use client'
import react, {useState} from 'react';
import './aboutUs.css';
import TopBar from './../topBar.js'

export default function AboutUs() {
    return (
        <div className="aboutUsContainer">
        <TopBar/>
        <div className = "centerer">
            <img src="candelaLogo.png" className="textLogo"/>
        </div>
        <h1 className="auheader">About Us</h1>
        <div className="imgAndText">
            <img src="aboutus1.png" className="aboutus1" />
            <p className="aboutus1text">“At Candela, we believe fashion can be a force for good. Each item in our collection is intentionally 
            designed and consciously crafted to align with our mission and values. Together, we support 
            artisanal craftsmanship and promote sustainable practices. <br/><br/>As a brand, we aim to empower our 
            clients by offering garments that reflect their commitment to positive change. By choosing to 
            wear Candela Purposewear, you're not just making a fashion statement; you're making a difference.”<br/><br/>– Andrea Poma</p>
        </div>
        <div className="centerer"><h1 className="allcapspurposewear">PURPOSEWEAR</h1></div>
        <div className="imgAndText">
            <div className="aboutus2text">
                <h1 className="aboutus2headers">Programs</h1>
                <p>Candela's training programs are designed to empower Salvadoran women 
                    from vulnerable backgrounds. Through hands-on training in traditional 
                    craftsmanship, we aim to provide our trainees with skills in artisanal 
                    techniques. Our training programs are designed with the goal of helping 
                    the women we work with achieve financial stability and independence. Because of this, 
                    in addition to artisanal skills, the programs include financial literacy training.
                </p>
                <h1 className="aboutus2headers">Partnerships</h1>
                <p>Candela proudly partners with Mater Filus, a women's shelter in El Salvador, and Diseña 
                    Tu Meta, a women's empowerment NGO, to provide training and empowerment programs for 
                    women from disadvantaged backgrounds. Our initiative goes beyond preserving tradition; 
                    it's about creating meaningful change in the lives of the women we work with.  
                </p>
                <h1 className="aboutus2headers">Preservation</h1>
                <p>Candela’s goal is to honor and preserve Salvardoran craftmanship and culture through each 
                    piece. The clothing serves as a tapestry of Salvadoran tradition and style. Each collection 
                    is created in different towns throughout El Salvador. Each piece reflects a modern take on 
                    lore from its place of orgin in our network.
                </p>
            </div>
            <img src="aboutus2.png" className="aboutus1" />
        </div>
        </div>
    );
}