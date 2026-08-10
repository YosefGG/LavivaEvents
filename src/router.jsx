import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'catalog', element: <CatalogPage /> },
        { path: 'catalog/:categoryId', element: <CategoryPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'blog/:slug', element: <BlogPostPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
  },
);
