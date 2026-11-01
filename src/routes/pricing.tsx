import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/Pricing';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/pricing')({
	head: () => seoHead(seo),
	component: Page,
});
