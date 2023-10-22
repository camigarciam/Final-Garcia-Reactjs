
  import React from 'react';
  import ItemListContainer from './ItemListContainer/ItemListContainer';
 
  
  const Home = () => {
  
  
    return (
      <div className="home">
        <header>
          <h1 className='titulo'> Subak Store</h1>
      </header>
        <h2 className='prod-home'>
          <ItemListContainer/>
           </h2>
        <footer>
          <p>&copy; {new Date().getFullYear()} Subak Store</p>
        </footer>
      </div>
    );
  };
  
  export default Home;
  