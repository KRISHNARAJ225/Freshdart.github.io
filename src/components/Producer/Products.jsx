import React from 'react';

import AppleImg  from '../../assets/Apple.jpg';
import BananaImg from '../../assets/Banana.jpg';
import BeansImg  from '../../assets/Beans.jpg';
import ChilliImg from '../../assets/Chilli.jpg';
import DalImg    from '../../assets/Dal.jpg';
import LemonImg  from '../../assets/Lemon.jpg';
import RiceImg   from '../../assets/Rice.jpg';
import TomatoImg from '../../assets/Tomato.jpg';
import WheatImg  from '../../assets/wheat.jpg';   

function Products() {

  const products = [
    { name: "Fresh Apples",     price: "₹180 / kg",  img: AppleImg,  alt: "Fresh Red Apples" },
    { name: "Ripe Bananas",     price: "₹40 / dozen", img: BananaImg, alt: "Ripe Yellow Bananas" },
    { name: "Green Beans",      price: "₹50 / kg",   img: BeansImg,  alt: "Fresh Green Beans" },
    { name: "Dry Red Chilli",   price: "₹220 / kg",  img: ChilliImg, alt: "Spicy Dry Red Chillies" },
    { name: "Toor Dal",         price: "₹140 / kg",  img: DalImg,    alt: "Premium Toor Dal" },
    { name: "Fresh Lemons",     price: "₹80 / kg",   img: LemonImg,  alt: "Fresh Yellow Lemons" },
    { name: "Basmati Rice",     price: "₹120 / kg",  img: RiceImg,   alt: "Aromatic Basmati Rice" },
    { name: "Fresh Tomatoes",   price: "₹45 / kg",   img: TomatoImg, alt: "Juicy Red Tomatoes" },
    { name: "Whole Wheat",      price: "₹60 / kg",   img: WheatImg,  alt: "High Quality Whole Wheat" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Our Fresh Products</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.alt}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold mb-3">
                  {product.price}
                </p>
                <p className="card-text text-muted flex-grow-1">
                  Fresh and high-quality {product.name.toLowerCase()} sourced directly from farmers.
                </p>
                <button className="btn btn-outline-success mt-auto w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;