import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Clock, Mail, MapPin } from 'lucide-react';
import { ProductLockup } from '@/components/site/Logo';
import { PORTALS, SITE, loginUrl, registerUrl } from '@/config/site';
import { CAPABILITIES } from '@/config/assessdesk';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
					<div className="lg:col-span-1">
						<ProductLockup />
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
							Invisible, hotkey-driven AI support for exams, tests and interviews. Built and operated by ScholarDesk.
						</p>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">The tool</h3>
						<ul className="mt-4 flex flex-col gap-3 text-sm">
							{CAPABILITIES.map((c) =>
              <li key={c.slug}>
									<Link to="/demo" hash={c.slug} className="text-muted-foreground hover:text-primary">
										{c.name}
									</Link>
								</li>
              )}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">Product</h3>
						<ul className="mt-4 flex flex-col gap-3 text-sm">
							<li>
								<Link to="/demo" className="text-muted-foreground hover:text-primary">
									See the demo
								</Link>
							</li>
							<li>
								<Link to="/pricing" className="text-muted-foreground hover:text-primary">
									Pricing
								</Link>
							</li>
							<li>
								<Link to="/for-professionals" className="text-muted-foreground hover:text-primary">
									For Professionals
								</Link>
							</li>
							<li>
								<Link to="/for-students" className="text-muted-foreground hover:text-primary">
									For Students
								</Link>
							</li>
							<li>
								<Link to="/do-my-exam-for-me" className="font-semibold text-primary hover:text-primary-deep">
									Do My Exam For Me
								</Link>
							</li>
							<li>
								<Link to="/demo" hash="hotkey-reference" className="text-muted-foreground hover:text-primary">
									Hotkey reference
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">Company</h3>
						<ul className="mt-4 flex flex-col gap-3 text-sm">
							<li>
								<a href={PORTALS.PUBLIC} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary">
									ScholarDesk <ArrowUpRight className="h-3.5 w-3.5" />
								</a>
							</li>
							<li>
								<a href={`${PORTALS.PUBLIC}/contact`} className="text-muted-foreground hover:text-primary">
									Contact
								</a>
							</li>
							<li>
								<a href={loginUrl()} className="text-muted-foreground hover:text-primary">
									Log in
								</a>
							</li>
							<li>
								<a href={registerUrl()} className="text-muted-foreground hover:text-primary">
									Create an account
								</a>
							</li>
							<li>
								<a href={`${PORTALS.PUBLIC}/privacy`} className="text-muted-foreground hover:text-primary">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href={`${PORTALS.PUBLIC}/terms`} className="text-muted-foreground hover:text-primary">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
						<ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
							<li className="flex items-start gap-3">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<a href={`mailto:${SITE.email}`} className="hover:text-primary">
									{SITE.email}
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<span>Support available 24/7</span>
							</li>
							<li className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<span>{SITE.address}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} {SITE.parent}. AssessDesk is a {SITE.parent} product. All rights reserved.
					</p>
					<p className="mx-auto max-w-3xl text-xs leading-relaxed">
						AssessDesk is provided for assessment support. Users are responsible for complying with the rules, policies and terms of
						any institution, employer or examining body they are assessed by.
					</p>
				</div>
			</div>
		</footer>);

}