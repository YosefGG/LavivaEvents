import { useStaggerReveal } from '../../hooks/useScrollReveal';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.08, variant: 'up' });

  return (
    <div ref={ref} className={styles.grid}>
      {products.map((product, index) => (
        <div key={product.id} {...getItemProps(index)}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
