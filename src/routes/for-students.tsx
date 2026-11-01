import { createFileRoute } from '@tanstack/react-router';
import Page, { seo } from '@/pages/ForStudents';
import { seoHead } from '@/components/site/Seo';

export const Route = createFileRoute('/for-students')({
	head: () => seoHead(seo),
	component: Page,
});
