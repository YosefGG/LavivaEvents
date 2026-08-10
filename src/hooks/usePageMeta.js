import { useEffect } from 'react';
import { getText } from '../config/language';
import { businessInfo } from '../data/businessInfo';

const SITE_SUFFIX = 'Laviva Events';

function upsertMeta(name, content, attribute = 'name') {
  if (!content) return;

  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;

  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function getCanonicalUrl(pathname) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${origin}${base}${path}`;
}

/**
 * Updates document title and SEO meta tags for organic search.
 */
export default function usePageMeta({
  title,
  description,
  keywords,
  pathname = '/',
  type = 'website',
}) {
  useEffect(() => {
    const pageTitle = title ? `${getText(title)} | ${SITE_SUFFIX}` : `${getText(businessInfo.tagline)} | ${SITE_SUFFIX}`;
    const pageDescription = getText(description ?? businessInfo.shortDescription);
    const canonical = getCanonicalUrl(pathname);

    document.title = pageTitle;
    upsertMeta('description', pageDescription);
    upsertMeta('keywords', keywords);
    upsertMeta('og:title', pageTitle, 'property');
    upsertMeta('og:description', pageDescription, 'property');
    upsertMeta('og:type', type, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('og:site_name', SITE_SUFFIX, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', pageTitle);
    upsertMeta('twitter:description', pageDescription);
    upsertLink('canonical', canonical);

    return () => {
      document.title = `${getText(businessInfo.tagline)} | ${SITE_SUFFIX}`;
    };
  }, [title, description, keywords, pathname, type]);
}

export function useJsonLd(id, data) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;

    if (!data) {
      document.getElementById(scriptId)?.remove();
      return undefined;
    }

    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [id, data]);
}
