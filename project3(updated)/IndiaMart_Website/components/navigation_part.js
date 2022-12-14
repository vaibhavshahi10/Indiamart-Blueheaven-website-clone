function navbar(username) {
  return `
  <div id="indiamart-menu">

        <div id="gs-left-side">
          <div id="indiamart-logo">
            <a href="../index.html"><img src="./images/indiamartlogo.PNG" alt=""></a>
          </div>

          <div id="indiamart-search">
            <select><option value="#">All India</option></select>
            <input type="text" id="gs-searchinput" placeholder="Enter product/service to search">
            <div id="gs-showsearch-result"></div>
            <button id="gs-searchbtn">Search</button>
  
            <button id="gs-best-price">Get Best Price</button>
          </div>
        </div>      

        <div id="indiamart-links">
          <div>
            <i class="fa-solid fa-tag"></i>
            <p>Shopping</p>
          </div>
          <div>
            <i class="fa-solid fa-house-medical"></i>
            <p>Covid Supplies</p>
          </div>
          <div>
            <i class="fa-solid fa-store"></i>
            <p>Sell</p>
          </div>
          <div>
            <i class="fa-solid fa-circle-question"></i>
            <p>Help</p>
          </div>
          <div>
            <i class="fa-solid fa-message"></i>
            <p>Messages</p>
          </div>
          <div id="gs-signin">
            <i class="fa-solid fa-user"></i>
            <p>${username}</p>
          </div>
        </div>

      </div>

  
  
  <div id="navbar-container">
    <div id="top-navbar">
      <img
        src="https://3.imimg.com/data3/HJ/OY/MY-3792183/blue-heaven-cosmetics-private-limited-logo-120x120.jpg"
        alt="bluheaven cosmetics"
        id="logo"
      />
      <div>
        <h1>Blue Heaven Cosmetics (P) Ltd</h1>
        <div>
          <p>
            <i class="fa-solid fa-location-dot"></i>Kriti Nagar, New Delhi,
            Delhi
          </p>
          <p><i class="fa-solid fa-check"></i>GST 07AACCB1155C1ZB</p>
          <p><i class="fa-solid fa-check"></i><b>Verified</b> Supplier</p>
          <p>
            <i class="fa-solid fa-thumbs-up"></i><b>4.2</b>/5
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i>
            <span><i class="fa-solid fa-star"></i></span>
          </p>
        </div>
      </div>
      <button>
        <i class="fa-solid fa-phone-volume"></i>View Mobile Number
      </button>
    </div>


    <div id="bottom-navbar">

        <div id="gslink">
                <p id="gshome" class="active">Home</p>
            
                <p id="gsproduct">Products & Services</p>
                <p id="gsabout">About Us</p>
                <p id="gscontact">Contact Us</p>
        </div>
        <button>
            <i class="fa-solid fa-envelope"></i> Send Email
        </button>


        <!-- Product submenu start-->
        <div id="product-sub-menu">


            <div>
                <div>
                    <h3>
                        <a href="../makeup.html">Makeup</a>
                    </h3>
                    <p>
                        <a href="../makeup.html">Foundation</a>
                    </p>
                    <p>
                        <a href="../makeup.html">Compact</a>
                    </p>
                    <p>
                        <a href="../makeup.html">Pan Cake Foundation</a>
                    </p>
                    <p>
                        <a href="../makeup.html">Pan Stick Foundation</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="../lipstick.html">Lipstick</a>
                    </h3>
                    <p>
                        <a href="../lipstick.html">Baked Brick Lipstick</a>
                    </p>
                    <p>
                        <a href="../lipstick.html">Cerise Pink Lipstick</a>
                    </p>
                    <p>
                        <a href="../lipstick.html">Coral Red Lipstick</a>
                    </p>
                    <p>
                        <a href="../lipstick.html">Desert Rose Lipstick</a>
                    </p>
                    <a href="../lipstick.html" id="more-link">...more</a>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="../lipsProducts.html">Lips Products</a>
                    </h3>
                    <p>
                        <a href="../lipsProducts.html">Lip Gloss</a>
                    </p>
                    <p>
                        <a href="../lipsProducts.html">Lip Stick</a>
                    </p>
                    <p>
                        <a href="../lipsProducts.html">Lip Liner</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="../bleachCream.html">Bleach Cream</a>
                    </h3>
                    <p>
                        <a href="../bleachCream.html">Fruit Bleach</a>
                    </p>
                    <p>
                        <a href="../bleachCream.html">Gold Bleach</a>
                    </p>
                    <p>
                        <a href="../bleachCream.html">Personal Bleach</a>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="../scrubs.html">Scrubs</a>
                    </h3>
                    <p>
                        <a href="../scrubs.html">Fairness Scrub</a>
                    </p>
                    <p>
                        <a href="../scrubs.html">Mix Fruit Scrub</a>
                    </p>
                    <p>
                        <a href="../scrubs.html">Facial Scrub - Wallnur & Appricot</a>
                    </p>
                </div>
                <div>
                    <h3>
                        <a href="../eyesProducts.html">Eyes Products</a>
                    </h3>
                    <p>
                        <a href="../eyesProducts.html">Masacara</a>
                    </p>
                    <p>
                        <a href="../eyesProducts.html">Eye Shadow</a>
                    </p>
                    <p>
                        <a href="../eyesProducts.html">Eye Liner</a>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        <a href="../lipcare.html">Lip Care</a>
                    </h3>
                    <p>
                        <a href="../lipcare.html">Lip Balm</a>
                    </p>
                    <p>
                        <a href="../lipcare.html">Lip Guard</a>
                    </p>
                </div>
                <div>
                    <button>View All Categories</button>
                </div>
            </div>
    
    
        </div>
        <!-- Product submenu end-->

        <!-- About Us submenu start -->
        <div id="about-us-submenu">

            <p>
                <a href="#">Custom Profile</a>
            </p>
            <p>
                <a href="#">Testimonial</a>
            </p>
            <p>
                <a href="#">Download Brochure</a>
            </p>
        </div>
        <!-- About Us submenu end -->

    </div>

  </div>`;
}

export default navbar;
