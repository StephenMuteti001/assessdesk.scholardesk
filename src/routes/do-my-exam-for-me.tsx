import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/DoMyExamForMe';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/do-my-exam-for-me')({
	head: () => seoHead(seo),
	component: Page,
});
