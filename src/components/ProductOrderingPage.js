import React, { useState } from 'react';
import './ProductOrdering.css';

function ProductOrderingPage() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleBookSelection = (bookId) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter((id) => id !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your order submission logic here
    console.log('Selected Books:', selectedBooks);
    console.log('Shipping Info:', shippingInfo);
  };

  return (
    <div className="book-ordering-page">
      <h2>Product Ordering</h2>

      {/* Book selection section */}
      <div className="book-selection">
        {/* Display a list of books and allow users to select them */}
        {/* Example book list: */}
        <div>
          <input
            type="checkbox"
            id="book1"
            name="book1"
            checked={selectedBooks.includes('book1')}
            onChange={() => handleBookSelection('book1')}
          />
          <label htmlFor="book1">GROCERY</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book2')}
            onChange={() => handleBookSelection('book2')}
          />
          <label htmlFor="book2">STATIONARY</label>
        </div>
        {/* Add more books as needed */}
      </div>

      {/* Shipping information section */}
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Add more shipping fields (city, postalCode, country) as needed */}

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default ProductOrderingPage;