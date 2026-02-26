import React from 'react'
import FieldImg from '../../assets/Field.jpg';   // adjust the relative path!
import WheatImg from '../../assets/flour.jpg';
import MainImg  from '../../assets/main.jpg';


function Orders(){

    return(
 <div>
    <header>
        <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={MainImg} class="d-block w-100" alt="Environment Field" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Quality You Can Taste, Freshness You Can Trust.</h5>
        <p>Experience the true flavor of premium, sustainably sourced agricultural products.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={WheatImg} class="d-block w-100" alt="Rice" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Fuel Your Life with Nature’s Best.</h5>
        <p>Empowering local growers and nourishing your family.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={ FieldImg} class="d-block w-100" alt="Wheat" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Straight from the Soil, Straight to Your Door.</h5>
        <p>We don't just deliver food; we deliver vitality. Get nutrient-dense, chemical-free produce harvested at the peak of perfection.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </header>
    <section>
<div class="card py-5">
  <div class="card-body">
    <h1 class="card-title">About US</h1>

    <h2 class="card-text py-4"><strong>Freshdart – Fresh from Nearby Farms, Delivered with Trust
At Freshdart, we’re redefining what "fresh" truly means by bringing the shortest possible journey from farm to your plate — often just a few kilometers away.
Rooted in Tamil Nadu’s rich agricultural heritage (starting strong in areas like Chennai and Cuddalore), we connect everyday consumers directly with genuine local farmers, small-scale producers, and manufacturers. No long-distance trucks, no unnecessary middlemen — just truly seasonal, farm-fresh produce delivered at its peak quality.
Why Freshdart Exists
We saw the challenges in traditional supply chains: farmers struggling with low prices and wastage, consumers paying more for less-fresh goods, and everyone losing out on traceability and trust. Freshdart was built to fix that — one 2 km connection at a time.</strong></h2>
  </div>
<div class="accordion accordion-flush py-5" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <h3>Why FreshDart..?</h3> 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><strong>Farmers</strong>  struggling with low prices and wastage, consumers paying more for less-fresh goods, and everyone losing out on traceability and trust. Our solution bridges that gap one 2 km connection at a time. What sets Freshdart apart is our ultra-hyperlocal 2 km matching, which ensures we only show you producers within a strict 2 km radius for maximum freshness, reduced carbon footprint, and strong support for your immediate neighborhood economy.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <h3> Our Mission </h3>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our mission is to bridge the gap between local farmers and urban as well as rural households in Tamil Nadu by delivering the freshest possible produce through a fair, transparent, and hyperlocal platform. We are committed to providing consumers with chemical-free, seasonal, and affordable fresh goods from trusted nearby sources; enabling producers to sell directly at better prices with zero delays in payments;</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <h3> Our Vision</h3>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">farmers thrive with dignified earnings, technology access, and direct market connections, food travels the shortest distance possible to minimize environmental impact and maximize nutrition, trust is the foundation of every transaction with no middlemen and no surprises, and we create a model that inspires nationwide change in how fresh food reaches people, making "farm-to-table" a daily reality for millions.</div>
    </div>
  </div>
</div>
</div>
 <div className="container  py-5 mt-5">
    <div class="row ">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Grains</h5>
        <p class="card-text">Basmati Rice, Brown Rice, Millets, Wheat Flour</p>
        <a href="#" class="btn btn-primary">Eat Healthy..!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Produce</h5>
        <p class="card-text">Leafy Greens, Exotic Fruits, Local Vegetables</p>
        <a href="#" class="btn btn-primary">Today's Deals..!</a>
      </div>
    </div>
  </div>
   <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Pantry</h5>
        <p class="card-text">Pure Ghee, Spices, Pulses, Raw Honey</p>
        <a href="#" class="btn btn-primary">Offers Available..!</a>
      </div>
    </div>
  </div>
 <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Deals</h5>
        <p class="card-text">Combo Packs, Subscription Boxes, Clearance</p>
        <a href="#" class="btn btn-primary">Need More..!</a>
      </div>
    </div>
  </div>

</div>
 </div>
    </section> 
    <footer>

    </footer>
 </div>




    )
}
export default Orders;