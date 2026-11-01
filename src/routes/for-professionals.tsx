import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/ForProfessionals';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/for-professionals')({
	head: () => seoHead(seo),
	component: Page,
});
