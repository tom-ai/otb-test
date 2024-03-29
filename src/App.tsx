import ProductList from './components/productList/productList.component';
import SortOptions from './components/sortOptions/sortOptions.component';
import { useState } from 'react';
import { Product, SortOption } from './types';
import useProducts from './hooks/useProducts.component';

function App() {
  const [sortOption, setSortOption] = useState<SortOption>('price');

  const handleSortOptionChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  const sortOptions: SortOption[] = ['alphabetical', 'price', 'star-rating'];

  const products: Product[] = useProducts();

  return (
    <main className="max-w-screen-xl mx-auto grid grid-cols-3 gap-12 p-12">
      <SortOptions
        sortOption={sortOption}
        sortOptions={sortOptions}
        // sortOption={sortOption}
        handleSortOptionChange={handleSortOptionChange}
      />

        <ProductList sortOption={sortOption} products={products} />
    </main>
  );
}

export default App;
