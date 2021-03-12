import React from 'react';
import './App.css';
import Product from './Product';
import Tile from './Tile';
import handybag from './assets/bag_1.png';
import stylishbag from './assets/bag_2.png';
import simplebag from './assets/bag_3.png';
import trendybag from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourstory from './assets/our_story.png';
function App() {
  return (
      <>
      <nav>
        <h1>Handbags & Purses</h1>
          <button type="button" onClick={() => console.log("Jij wil shoppen!")}>
              To the collection
          </button>
          <button type="button" onClick={() => console.log("Jij wil shoppen!")}>
              Shop all bags
          </button>
          <button disabled={true} type="button" onClick={() => console.log("Jij wil shoppen!")}>
              Pre-orders
              {/* onClick has to be disabled by aria-disabled{true} state add!. of disabled{!this.state.value} */}
          </button>
      </nav>
          <main>
              <Product
                banner="Best seller"
                image={handybag}
                title="The handy bag"
                amount="€ 400,--"
              />
              <Product
                  banner="Best seller"
                  image={stylishbag}
                  title="The stylish bag"
                  amount="€ 250,--"
              />
              <Product
                  banner="New collection"
                  image={simplebag}
                  title="The simple bag"
                  amount="€ 300,--"
              />
              <Product
                  banner="New collection"
                  image={trendybag}
                  title="The trendy bag"
                  amount="€ 150,--"
              />
          </main>
          <footer>
              <Tile
                  name="The brand"
                  text="Our brand is all about our bags make you happy and make you shine"
              />
              <Tile
                  image={brand}
                  name="The brand"
              />
              <Tile
                  image={ourstory}
                  name="Our story"
              />
              <Tile
                  name="Our story"
                  text="This is our story about our bags are catchy"
              />
          </footer>
      </>
  );
}

export default App;

    {/* before custom product component
    <article>
        <span>New collection</span>
        <img src={simplebag} alt={simplebag} />
        <p>The simple bag</p>
        <h4>
            € 300,--
        </h4>
    </article>
    <article>
        <span>New collection</span>
        <img src={trendybag} alt={trendybag} />
        <p>The trendy bag</p>
        <h4>
            €150,--
        </h4>
    </article>
 */}