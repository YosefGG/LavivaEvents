import { categories } from './categories';

export const featuredPackages = categories.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.shortDescription,
  image: category.image,
  href: `/catalog/${category.id}`,
}));
