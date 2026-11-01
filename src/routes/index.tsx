import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/Index';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/')({
	head: () => seoHead(seo),
	component: Page,
});
