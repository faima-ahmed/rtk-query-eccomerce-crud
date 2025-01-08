import { useGetProductsQuery } from "../../services/productsApi";

const ProductsView = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
 
const handleDelete= (id)=>{
alert(id);
}
  return (
    <div>
      <h2> List of Products</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>error: {error.message}</p>}
      {!isLoading && !error && products && products.length > 0 && (
        <section className="products">
          {products.map((product) => {
            return (
              <article key={product.id} className="product">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProductsView;
