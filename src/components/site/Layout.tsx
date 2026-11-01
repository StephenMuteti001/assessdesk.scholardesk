import { useEffect, type ReactNode } from 'react';
import { useLocation } from '@tanstack/react-router';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

function HashScroller() {
	const { pathname, hash } = useLocation();
	useEffect(() => {
		if (!hash) return;
		const el = document.getElementById(hash.replace(/^#/, ''));
		el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, [pathname, hash]);
	return null;
}

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<HashScroller />
			<SiteHeader />
			<main className="flex-1">{children}</main>
			<SiteFooter />
		</div>
	);
}
