import React, {useContext} from 'react';
import { SingleItemContext } from '../context/SingleItemContext';
import SingleItem from '../components/SingleItem';

function Home() {
  const { products } = useContext(SingleItemContext);
  // console.log(products)

  const filteredProducts = products.filter(item =>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] mx-auto md:mx-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return(
                <SingleItem product= {product} key= {product.id} />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
