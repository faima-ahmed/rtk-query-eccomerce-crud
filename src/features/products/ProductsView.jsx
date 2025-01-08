import { useState } from "react";
import { useDeleteProductMutation, useGetProductsQuery } from "../../services/productsApi";
import UpdateProduct from "./UpdateProduct";

const ProductsView = () => {
  const [editingProduct, setEditingProduct]= useState(null);

  const { data: products, isLoading, error } = useGetProductsQuery();
 
  const [deleteProduct]= useDeleteProductMutation();
 

const handleDelete= async (id)=>{
await deleteProduct(id);
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
                <button onClick={()=>setEditingProduct(product)}>Edit</button>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
              </article>
            );
          })}
        </section>
      )}
        {editingProduct && <UpdateProduct editingProduct={editingProduct} setEditingProduct={setEditingProduct}/>}
    </div>
  );
};

export default ProductsView;
