import React, { useState } from 'react';

const StockScreener = () => {
//   const [stocks, setStocks] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredStocks = stocks.filter(stock => 
    stock.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [stocks, setStocks] = useState([
    { name: 'Apple Inc.', price: '$150', change: '+1.5%' },
    { name: 'Google LLC', price: '$2800', change: '-0.5%' },
    { name: 'Amazon.com Inc.', price: '$3400', change: '+2.0%' },
    { name: 'Microsoft Corp.', price: '$299', change: '+0.8%' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Market Screener</h1>
      <input
        type="text"
        placeholder="Filter stocks..."
        value={filter}
        onChange={handleFilterChange}
        className="form-control mb-4"
      />
      <table className="table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredStocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockScreener;