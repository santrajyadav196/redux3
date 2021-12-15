import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyItems = [
  {id: "p1", price: 12, title: "First Tittle", description: "Nice product"},
  {id: "p2", price: 24, title: "Second Tittle", description: "Good product"},
  {id: "p3", price: 36, title: "Third Tittle", description: "Best product"},
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyItems.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
