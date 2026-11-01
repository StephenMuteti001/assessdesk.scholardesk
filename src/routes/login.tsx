import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/Login';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/login')({
	head: () => seoHead(seo),
	component: Page,
});
