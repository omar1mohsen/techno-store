import fetchData from "./fetchData";

export const getCart = () => {

  return new Promise((resolve, reject) => {
    // the api doesnt work with the new cart id so i put a fixed id to make get data
    fetchData(`${process.env.NEXT_PUBLIC_BASE_URL}/carts/1`)
      .then((res) => {
        if (res && res.products.length) {
          const productsQuantity = res.products;
          const fetchProductPromises = res.products.map((product : any) =>
            fetchData(`${process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL}/${product.productId}`)
          );

          Promise.all(fetchProductPromises)
            .then((productResponses) => {
              const products = productResponses.map((productResponse) => {
                const product = {
                  ...productResponse,
                  quantity: productsQuantity.find((p : any) => p.productId === productResponse.id)?.quantity || 0,
                };
                return product;
              });
              resolve(products);
            })
            .catch((error) => {
              console.log("Error fetching products:", error);
              reject(error);
            });
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        console.log("Error fetching cart:", error);
        reject(error);
      });
  });
};
