import { SITE } from '@/config/site';

/** Convenience builder for a FAQPage JSON-LD block. */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a },
		})),
	};
}

/** Convenience builder for a BreadcrumbList JSON-LD block. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${SITE.domain}${item.path}`,
		})),
	};
}
