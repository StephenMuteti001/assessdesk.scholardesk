import { SITE } from '@/config/site';

export interface SeoInput {
	title: string;
	description: string;
	path: string;
	keywords?: string;
	image?: string;
	jsonLd?: Record<string, unknown>[];
}

/** Builds a TanStack route head() payload so metadata is server-rendered. */
export function seoHead({ title, description, path, keywords, image, jsonLd }: SeoInput) {
	const url = `${SITE.domain}${path}`;
	const ogImage = image ?? SITE.ogImage;
	return {
		meta: [
			{ title },
			{ name: 'description', content: description },
			{ name: 'robots', content: 'index, follow' },
			...(keywords ? [{ name: 'keywords', content: keywords }] : []),
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:url', content: url },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:image', content: ogImage },
			{ property: 'og:site_name', content: SITE.fullName },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:image', content: ogImage },
		],
		links: [{ rel: 'canonical', href: url }],
		scripts: (jsonLd ?? []).map((block) => ({ type: 'application/ld+json', children: JSON.stringify(block) })),
	};
}
