/**
 * AssessDesk site configuration.
 *
 * Branding media is temporarily shared with ScholarDesk and lives in /public/brand,
 * so a file can be swapped by replacing it without touching code.
 */

export const PORTALS = {
	PUBLIC: 'https://scholardesk.pro',
	AUTH: 'https://auth.scholardesk.pro',
	WRITER: 'https://writer.scholardesk.pro',
	CLIENT: 'https://client.scholardesk.pro',
	ADMIN: 'https://admin.scholardesk.pro',
	ASSESSDESK: 'https://assessdesk.scholardesk.pro',
} as const;

export const SITE = {
	name: 'AssessDesk',
	parent: 'ScholarDesk',
	fullName: 'AssessDesk by ScholarDesk',
	domain: 'https://assessdesk.scholardesk.pro',
	email: 'support@scholardesk.pro',
	address: '575 5th Ave Fl 14, New York City, New York',
	ogImage: 'https://assessdesk.scholardesk.pro/brand/og-image-navy.png',
} as const;

export const BRAND = {
	monogram: '/brand/monogram-blue.png',
	monogramNavy: '/brand/monogram-navy.png',
	monogramReverse: '/brand/monogram-reverse.png',
	signature: '/brand/wordmark-full.png',
	wordmark: '/brand/wordmark-full-01.png',
	badge: '/brand/academic-badge.png',
	ogImage: '/brand/og-image.png',
	ogImageNavy: '/brand/og-image-navy.png',
} as const;

export const IMAGES = {
	students: '/images/students-collaborating.jpg',
	working: '/images/hero-working.jpg',
	clientAtWork: '/images/client-at-work.jpg',
	clientAudience: '/images/client-audience.jpg',
	writerAtDesk: '/images/writer-at-desk.jpg',
	writerAudience: '/images/writer-audience.webp',
	howItWorks: '/images/how-it-works-hero.jpg',
	services: '/images/services-hero.jpg',
	support: '/images/contact-support.jpg',
} as const;

export const registerUrl = (plan?: string) =>
	plan ? `${PORTALS.AUTH}/register?product=assessdesk&plan=${plan}` : `${PORTALS.AUTH}/register?product=assessdesk`;

export const loginUrl = () => `${PORTALS.AUTH}?product=assessdesk`;

export const downloadUrl = () => `${PORTALS.AUTH}/register?product=assessdesk&intent=download`;
