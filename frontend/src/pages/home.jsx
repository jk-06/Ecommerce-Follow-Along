// import Product from "../components/Product";


// const productDetails = [
//   {
//     name: "Product 1",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "This is a limited-time product offering a perfect balance of quality and value. Grab it while it lasts!",
//     price: 100,
//   },
//   {
//     name: "Product 2",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "This is a limited-time product offering a perfect balance of quality and value. Grab it while it lasts!",
//     price: 200,
//   },
//   {
//     name: "Product 3",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 3",
//     price: 300,
//   },
//   {
//     name: "Product 4",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 4",
//     price: 400,
//   },
//   {
//     name: "Product 5",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 5",
//     price: 500,
//   },
//   {
//     name: "Product 6",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 6",
//     price: 600,
//   },
//   {
//     name: "Product 7",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 7",
//     price: 700,
//   },
//   {
//     name: "Product 8",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 8",
//     price: 800,
//   },
//   {
//     name: "Product 9",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 9",
//     price: 900,
//   },
//   {
//     name: "Product 10",
//     image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
//     description: "Description of product 10",
//     price: 1000,
//   },
// ];


// export default function Home() {
//   return (
//     <div className="w-full min-h-screen bg-neutral-800">
//       <div className="grid grid-cols-5 gap-4 p-4">
//         {productDetails.map((product, index) => <Product key={index} {...product} />)}
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";
import Product from "../components/product";
import NavBar from "../components/NavBar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    fetch("http://localhost:5000/api/v2/product/get-products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <>
    <NavBar />
    <div className="w-full min-h-screen bg-neutral-800">
      <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
    </>
  );
}

