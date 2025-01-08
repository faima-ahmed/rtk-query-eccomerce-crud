/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateProductMutation } from "../../services/productsApi";

const UpdateProduct = ({ editingProduct, setEditingProduct}) => {
  const [updatedProduct, setUpdatedProduct] = useState(editingProduct);



  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit= async (e) =>{
    //console.log('hello');
    e.preventDefault();
    try{
        //console.log(updatedProduct);
        await updateProduct({id: editingProduct.id, updatedProduct: updatedProduct});
        setEditingProduct(null);
    }
    catch(err){
        console.error('Failed to update the product: ', err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Product</h2>
        <input
          type="text"
          placeholder="Title"
          value={updatedProduct.title}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, title: e.target.value }) 
          }
        />
        <textarea
          placeholder="Description"
          value={updatedProduct.description}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, description: e.target.value }) 
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={updatedProduct.price}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value ),}) 
          }
        />
<button type="submit">Save</button>
<button type="button" onClick={()=>{setEditingProduct(null)}}>Cancel</button>

      </form>
    </div>
  );
};

export default UpdateProduct;
