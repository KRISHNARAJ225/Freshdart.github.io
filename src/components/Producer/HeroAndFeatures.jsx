
import React from 'react';
import FieldImg from '../../assets/Field.jpg';
import WheatImg from '../../assets/flour.jpg';   
import MainImg from '../../assets/main.jpg';
import { Link } from 'react-router-dom';

function HeroAndFeatures() {
  return (
    <>
      <header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={MainImg} className="d-block w-100" alt="Environment Field" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Quality You Can Taste, Freshness You Can Trust.</h5>
                <p>Experience the true flavor of premium, sustainably sourced agricultural products.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={WheatImg} className="d-block w-100" alt="Rice" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fuel Your Life with Nature’s Best.</h5>
                <p>Empowering local growers and nourishing your family.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={FieldImg} className="d-block w-100" alt="Wheat" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Straight from the Soil, Straight to Your Door.</h5>
                <p>We don't just deliver food; we deliver vitality. Get nutrient-dense, chemical-free produce harvested at the peak of perfection.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="card py-5 mb-5 shadow-sm">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">About FreshDart</h1>
              <h2 className="card-text fw-normal">
                Fresh from Nearby Farms, Delivered with Trust.<br />
                We connect you directly with local farmers in Tamil Nadu – shortest journey, maximum freshness.
              </h2>
            </div>
          </div>

          {/* Your 4 cards – now with real navigation to /orders */}
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Grains</h5>
                  <p className="card-text">Basmati Rice, Brown Rice, Millets, Wheat Flour</p>
                  <Link to="/orders" className="btn btn-primary">
                    Eat Healthy..!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Produce</h5>
                  <p className="card-text">Leafy Greens, Exotic Fruits, Local Vegetables</p>
                  <Link to="/orders" className="btn btn-primary">
                    Today's Deals..!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Pantry</h5>
                  <p className="card-text">Pure Ghee, Spices, Pulses, Raw Honey</p>
                  <Link to="/orders" className="btn btn-primary">
                    Offers Available..!
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Deals</h5>
                  <p className="card-text">Combo Packs, Subscription Boxes, Clearance</p>
                  <Link to="/orders" className="btn btn-primary">
                    Need More..!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAndFeatures;