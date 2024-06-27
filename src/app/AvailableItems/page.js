'use client'
import react, {useState, useEffect} from 'react';
import './availableItems.css';
import TopBar from './../topBar.js';
import ClothingLayout from './../itemLayout/clothingLayout.js';
import BagLayout from './../itemLayout/bagLayout.js';

export default function AvailableItems() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      async function fetchProducts() {
        const res = await fetch('data/products.json');
        const data = await res.json();
        setProducts(data);
      }
  
      fetchProducts();
    }, []);
    return(
        <div className="availableItemsPageContainer">
            <title>Candela | Available Items</title>
            <TopBar/>
            <h1 className="availableHeader">All Available Items</h1>
                {products 
                .filter(product => product.status === 'Available')
                .map((product, index) => (
                <div key={index}>
                    <p className="availableNames">{product.name}</p>
                    {product.itemType==="Bag" ?
                    <BagLayout images={product.images} name={product.name} desc={product.desc}
                    price={product.price} shortName={product.shortName} status={product.status}/> :
                    <ClothingLayout images={product.images} name={product.name} desc={product.desc}
                    price={product.price} shortName={product.shortName} status={product.status} />
                    }
                </div>
                ))}
        </div>
    );
}