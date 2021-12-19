import React from 'react';
import './Home.css';
import pic1 from '../../../src/images/reviewer-2.png'
import pic2 from '../../../src/images/reviewer-3.png'

const Home = () => {
    return (
        <div className="container-fluid">
            <h2 className="my-3 mx-5 fst-italic fw-bolder fs-2 ">Shipping and payment</h2>
            <div className="row ">
<div className="col-md-4 mx-auto">
<div className="d-flex  ">
<div>
<button type="button" className=" rounded-pill  mx-2 btn btn-primary ">Log in</button>
</div>
<div>
<button type="button" class=" rounded-pill btn btn-outline-primary">Sign Up</button>
</div>
</div>

{/* shipping information------------------ */}
<h3 className="mt-5 fst-italic fw-bolder fs-2 mb-5">Shipping information</h3>

<div class="row g-3">
  <div class="col">
    <input type="text" class="p-3  rounded-pill form-control" placeholder="Email" aria-label="Email"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Adress" aria-label="Adress"/>
  </div>
</div>
<br />
<div class="row g-3">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="City" aria-label="City"/>
  </div>
</div>
<br />
<div class="row g-3">
  <div class="col">
    <input type="text" class=" p-3  rounded-pill form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Post Code" aria-label="Post Code"/>
  </div>
</div>
<br />
<div class="row g-3">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Phone Number" aria-label="Phone number"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Mobile" aria-label="Last name"  />
 
    
  </div>
</div>

</div>

{/* payment method ----------------------*/}
<div className="col-md-3">
    <h2 className="mb-3 fst-italic fw-bolder fs-2 ">Payment Method</h2>
    
    <div class="row g-3">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Paypal" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Visa" aria-label="Last name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="MasterCard" aria-label="Last name"/>
  </div>
</div>
    <div class="row g-3 my-2">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Discover" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Mastercard" aria-label="Last name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Bikas" aria-label="Last name"/>
  </div>
</div>

{/* delivery method ----------------*/}

<h2 className="mt-5" fst-italic fw-bolder fs-2 >Delivery Method</h2>
<div class="row g-3 my-2">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Inpost  $780" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="DHL $1200" aria-label="Last name"/>
  </div>
  
</div>
<div class="row g-3 my-2">
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Dpd  $450" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="p-3   rounded-pill form-control" placeholder="Feedbek  $679 " aria-label="Last name"/>
  </div>
  
</div>

</div>
{/* cart shoping------------------- */}

<div className="col-md-3 mx-auto">
<h2 className="mb-3 fst-italic fw-bolder fs-2 "> Your Cart</h2>
<div className="d-flex ">
    <div>
    <div className="d-flex">
        <div>
            <img className="w-50 border image-size" src={pic1} alt="" />
        </div>
        <div>
<h6>T-shirt
    <br />
    Summer vives
</h6>
<span className="text-muted">#21245</span>


        </div>
    </div>
    </div>
    <div>
<h6 className="ms-5">$89.99</h6>
    </div>
</div>
<div className="d-flex my-3">
    <div>
    <div className="d-flex">
        <div>
            <img className="w-50 border image-size" src={pic2} alt="" />
        </div>
        <div>
<h6>T-shirt
    <br />
    Summer vives
</h6>
<span className="text-muted">#21245</span>

        </div>
    </div>
    </div>
    <div>
<h6 className="ms-5">$89.99</h6>
    </div>
</div>
<div className="d-flex border w-50 ms-5 justify-content-center  align-self-center rounded-pill p-2 total ">
    <div>
        <h4 className="me-5 mt-2 ">Total</h4>
    </div>
    <div>
        <h5 className="mt-2"> $39.97</h5>
    </div>
</div>
</div>



            </div>
        </div>
    );
};

export default Home;