import { ArrowRight, KeyRound, LifeBuoy, ShieldCheck } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { ProductLockup } from '@/components/site/Logo';
import { IMAGES, PORTALS, SITE, loginUrl, registerUrl } from '@/config/site';

const title = 'Log in | AssessDesk by ScholarDesk';
const description =
'Sign in to your AssessDesk account. One ScholarDesk account covers AssessDesk, your orders and every ScholarDesk service.';

const points = [
{ icon: ShieldCheck, title: 'One account, every service', body: 'Your ScholarDesk sign-in covers AssessDesk, your orders and the client portal.' },
{ icon: KeyRound, title: 'Secure by default', body: 'Authentication is handled on the ScholarDesk auth portal with encrypted sessions.' },
{ icon: LifeBuoy, title: 'Support around the clock', body: 'A human is available 24/7 if you cannot get in before an assessment.' }];


export default function Login() {
  return (
    <>
			

			<section className="relative isolate overflow-hidden">
				<div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
					{/* Panel */}
					<div className="flex items-center justify-center bg-background px-4 py-16 sm:px-6 lg:px-12">
						<div className="flex w-full max-w-md flex-col gap-7">
							<ProductLockup />
							<div className="flex flex-col gap-3">
								<h1 className="text-3xl font-semibold leading-tight lg:text-4xl">Log in to AssessDesk</h1>
								<p className="text-base leading-relaxed text-muted-foreground">
									AssessDesk uses your ScholarDesk account. Sign in on the secure ScholarDesk auth portal and you will be
									returned straight to your AssessDesk session, licence and download.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<ButtonAnchor size="lg" href={loginUrl()} className="w-full">
									Continue to secure log in <ArrowRight className="h-4 w-4" />
								</ButtonAnchor>
								<ButtonAnchor size="lg" variant="outline" href={registerUrl()} className="w-full">
									Create an account
								</ButtonAnchor>
							</div>

							<ul className="flex flex-col gap-4 border-t border-border pt-7">
								{points.map((p) =>
                <li key={p.title} className="flex items-start gap-3">
										<p.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
										<span>
											<span className="block text-sm font-semibold">{p.title}</span>
											<span className="block text-sm text-muted-foreground">{p.body}</span>
										</span>
									</li>
                )}
							</ul>

							<p className="text-sm text-muted-foreground">
								Trouble signing in?{' '}
								<a href={`mailto:${SITE.email}`} className="font-medium text-primary hover:underline">
									{SITE.email}
								</a>{' '}
								·{' '}
								<a href={PORTALS.PUBLIC} className="font-medium text-primary hover:underline">
									ScholarDesk
								</a>
							</p>
						</div>
					</div>

					{/* Visual */}
					<div className="relative isolate hidden overflow-hidden bg-primary-deep lg:block">
						<img
            src={IMAGES.working}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
            
						<div className="home-cinematic-overlay absolute inset-0 -z-10" aria-hidden="true" />
						<div className="relative flex h-full flex-col justify-end gap-5 p-12 text-primary-foreground">
							<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
								AssessDesk by ScholarDesk
							</p>
							<p className="max-w-md text-2xl font-semibold leading-snug">
								The answer is on your screen. Only you can see it.
							</p>
							<ButtonLink variant="inverseOutline" to="/demo" className="w-fit">
								See how it works
							</ButtonLink>
						</div>
					</div>
				</div>
			</section>
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/login"
};
