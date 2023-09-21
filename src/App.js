import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import MarketManager from './components/MarketManager';
import ProductOrderingPage from './components/ProductOrderingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Define your routes as an array of objects
  const routes = [
    { name: 'Home', component: <HomePage /> },
    { name: 'Signup', component: <SignupPage /> },
    { name: 'Login', component: <LoginPage /> },
    { name: 'Product Ordering', component: <ProductOrderingPage /> },
    { name: 'Contact', component: <ContactPage /> },
    { name: 'Market Manager', component: <MarketManager /> },
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    const route = routes.find((r) => r.name.toLowerCase() === currentPage.toLowerCase());
    return route ? route.component : <HomePage />;
  };

  // return (
  //   <div>
  //     <header>
  //       <nav>
  //         <ul>
  //           {routes.map((route) => (
  //             <li key={route.name} onClick={() => navigateTo(route.name)}>
  //               {route.name}
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //     </header>
  //     {renderPage()}
  //   </div>
  // );
  return (
    <div>
      <header>
        <nav>
          {routes.map((route) => (
            <button key={route.name} onClick={() => navigateTo(route.name)}>
              {route.name}
            </button>
          ))}
        </nav>
      </header>
      {renderPage()}
    </div>
  );
  
}

export default App;