import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
    
      <header>
        <h1>Welcome to Our SuperMarket</h1>
      </header>
      
      <section className="banner">
        
        <h2>Discover The new Varities</h2>
      </section>

      <section className="featured-products">
        <h2>Featured products</h2>
        <div className="product-list">
          {/* Individual book cards */}
          <div className="product-card">
         
            <h3>product Title 1</h3>
            <p>EAT WELL AND STAY SAFE.</p>
          </div>

          <div className="market-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS7imp6oFKibrv_3lYSbrS5q2X7scgojHjw&usqp=CAU" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG2KrnLHVvaD8oNo6oYD97EgZ1yfBzuclhQ&usqp=CAU" />
            <h3>product Title 2</h3>
            <p>Description of the product goes here.</p>
          </div>

          {/* Add more book cards as needed */}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us??!!</h2>
        <ul>
          <li>A vast collection of Products across genres.</li>
          <li>Competitive prices and regular discounts.</li>
          <li>Easy and secure shopping experience.</li>
          <li>Convenient payment options.</li>
        </ul>
      </section>

      <section className="customer-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Great selection of Products! I love this store."</p>
          <p className="customer-name">John Doe</p>
        </div>
        
        <div className="testimonial">
          <p>"Fantastic service and marvelous Discounts!"</p>
          <p className="customer-name">Jane Smith</p>
        </div>
      </section>

      <section className="latest-news">
        <h2>Latest News</h2>
        {/* Display the latest blog posts or news articles */}
        <div className="news-article">
          <h3>Product Name 1</h3>
          <p>Summary of the Product goes here.</p>
          <a href="/article1">Read more</a>
        </div>

        <div className="news-article">
          <h3>Product Name 2</h3>
          <p>Summary of the Produt goes here.</p>
          <a href="/article2">Read more</a>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p> start your purchase journey with us.</p>
        <a href="/signup" className="cta-button">Sign Up</a>
      </section>
    </div>
  );
}

export default HomePage;