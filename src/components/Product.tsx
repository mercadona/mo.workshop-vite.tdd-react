import { Product as ProductType } from "../types";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <button key={product.id} aria-label={product.name} value={product.price}>
      <img src={product.image} alt="" />
    </button>
  );
};

export default Product;
