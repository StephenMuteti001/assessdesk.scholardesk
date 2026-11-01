import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/Demo';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/demo')({
	head: () => seoHead(seo),
	component: Page,
});
