import { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ProductLockup } from '@/components/site/Logo';
import { ButtonAnchor } from '@/components/site/SiteButton';
import { PORTALS, loginUrl, registerUrl } from '@/config/site';
import { cn } from '@/lib/utils';

const navigation = [
{ name: 'Demo', href: '/demo' },
{ name: 'For Professionals', href: '/for-professionals' },
{ name: 'For Students', href: '/for-students' },
{ name: 'Pricing', href: '/pricing' },
{ name: 'Do My Exam For Me', href: '/do-my-exam-for-me' }] as
const;

const linkClass = (active: boolean, inverse: boolean) =>
cn(
  'text-sm font-medium transition-colors',
  inverse ?
  active ?
  'text-primary-foreground' :
  'text-primary-foreground/75 hover:text-primary-foreground' :
  active ?
  'text-primary' :
  'text-muted-foreground hover:text-primary'
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const hasDarkHero = pathname === '/';
  const inverse = hasDarkHero && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
    className={cn(
      'sticky top-0 z-50 transition-[background-color,border-color] duration-300',
      inverse ?
      'border-b border-primary-foreground/10 bg-primary-deep text-primary-foreground' :
      'border-b border-border bg-background/95 text-foreground backdrop-blur'
    )}>
      
			<div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
				<Link to="/" aria-label="AssessDesk home" className="shrink-0">
					<ProductLockup tone={inverse ? 'inverse' : 'default'} />
				</Link>

				<nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main">
					{navigation.map((item) =>
          <Link key={item.href} to={item.href} className={linkClass(pathname === item.href, inverse)}>
							{item.name}
						</Link>
          )}
					<a
          href={PORTALS.PUBLIC}
          className={cn(
            'inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors',
            inverse ?
            'border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15' :
            'border-primary/25 bg-primary/5 text-primary hover:bg-primary/10'
          )}>
            
						ScholarDesk
						<ArrowUpRight className="h-3.5 w-3.5" />
					</a>
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<ButtonAnchor variant={inverse ? 'inverseOutline' : 'ghost'} href={loginUrl()}>
						Log in
					</ButtonAnchor>
					<ButtonAnchor variant={inverse ? 'inverse' : 'primary'} href={registerUrl()}>
						Get AssessDesk
					</ButtonAnchor>
				</div>

				<button
        type="button"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden',
          inverse ? 'text-primary-foreground' : 'text-foreground'
        )}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}>
          
					{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{open ?
      <div className="border-t border-border bg-background lg:hidden">
					<div className="flex flex-col gap-1 px-4 pb-5 pt-3">
						{navigation.map((item) =>
          <Link
          key={item.href}
          to={item.href}
          className={cn(
            'rounded-md px-3 py-2.5 text-base font-medium',
            pathname === item.href ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent'
          )}>
            
								{item.name}
							</Link>
          )}
						<a
          href={PORTALS.PUBLIC}
          className="flex items-center justify-between rounded-md border border-primary/20 bg-primary/5 px-3 py-2.5 text-base font-semibold text-primary">
            
							ScholarDesk
							<ArrowUpRight className="h-4 w-4" />
						</a>
						<div className="flex flex-col gap-2 pt-3">
							<ButtonAnchor variant="outline" size="lg" href={loginUrl()}>
								Log in
							</ButtonAnchor>
							<ButtonAnchor size="lg" href={registerUrl()}>
								Get AssessDesk
							</ButtonAnchor>
						</div>
					</div>
				</div> :
      null}
		</header>);

}