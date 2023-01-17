import {Link} from 'react-router-dom'
const productList = [
   {
      id: 1,
      name: 'asdsad',
      price: 123123,
      description: "asdasdasfgasgafs"
   },
   {
      id: 2,
      name: 'asdsad2',
      price: 123123,
      description: "asdasdasfgasgafs2"
   },
   {
      id: 3,
      name: 'asdsad3',
      price: 123123,
      description: "asdasdasfgasgafs3"
   }
];

function Products(props) {
   let id = Number(props.match.params.id);
   let product = productList.find(oneProduct => oneProduct.id === id);
   return (
      <div>
         <h2>Soy el componente PRODUCTS</h2>

         <Link to="/products/1">Producto 1</Link><br/>
         <Link to="/products/2">Producto 2</Link><br/>
         <Link to="/products/3">Producto 3</Link><br/>
         
         {
            product &&
            <>
               <p><b>ID:</b> {product.id}</p>
               <p><b>Nombre:</b>{product.name}</p>
               <p><b>Precio: </b>{product.price}</p>
               <p><b>Descripcion: </b>{product.description}</p>
            </>
         }
         {
            !product && <p>No hay productos con ese ID</p>
         }
      </div>
   )
}

export default Products;