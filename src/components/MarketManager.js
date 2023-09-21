 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarketManager.css';

const API_BASE_URL = 'http://localhost:8190/api/books';

function MarketManager() {
  const [markets, setMarkets] = useState([]);
  const [newMarket, setNewMarket] = useState({ customer: '', dept: '', product: '' });

  useEffect(() => {
    axios.get(API_BASE_URL)
      .then(response => setMarkets(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMarket({ ...newMarket, [name]: value });
  };

  const addMarket = () => {
    axios.post(API_BASE_URL, newMarket)
      .then(response => {
        setMarkets([...markets, response.data]);
        setNewMarket({ customer: '', dept: '', product: '' });
      })
      .catch(error => console.error(error));
  };

  const updateMarket = (id) => {
    axios.put(`${API_BASE_URL}/${id}`, newMarket)
      .then(response => {
        const updatedMarkets = markets.map(market => (market.id === id ? response.data : market));
        setMarkets(updatedMarkets);
        setNewMarket({ customer: '', dept: '', product: '' });
      })
      .catch(error => console.error(error));
  };

  const deleteMarket = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`)
      .then(() => {
        const updatedMarkets = markets.filter(market => market.id !== id);
        setMarkets(updatedMarkets);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="market-manager">
      <h2>MARKET DETAILS</h2>
      
      
      <div>
        <h2>ADD PRODUCT</h2>
        <div className="market-form">
          <input
            type="text"
            name="customer"
            placeholder="Customer"
            value={newMarket.customer}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="dept"
            placeholder="Dept"
            value={newMarket.dept}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="product"
            placeholder="Product"
            value={newMarket.product}
            onChange={handleInputChange}
          />
          <button onClick={addMarket}>Add</button>
        </div>
      </div>
      <div>
        <h2>UPDATE OR DELETE</h2>
        <ul className="market-list">
          {markets.map(market => (
            <li key={market.id} className="market-item">
              <span>Customer: {market.customer}</span>
              <span>Department: {market.dept}</span>
              <span>Product: {market.product}</span>
              <div className="market-buttons">
                <button onClick={() => updateMarket(market.id)}>Update</button>
                <button onClick={() => deleteMarket(market.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default MarketManager;