import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, IconChip, CTASection } from '@/components/site/Primitives';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { OverlayPlayground } from '@/components/site/OverlayMock';
import { KeyCombo } from '@/components/site/Kbd';
import { FaqList } from '@/components/site/Faq';
import { CAPABILITIES, COMPATIBILITY, GENERAL_FAQS, HOTKEY_GROUPS, LOOP_STEPS } from '@/config/assessdesk';
import { registerUrl } from '@/config/site';

const title = 'Demo & Full Feature Reference | AssessDesk';
const description =
'See exactly how AssessDesk works: hotkey control, OCR question capture, AI answering, keyboard scrolling, brightness and the hide toggle, plus the complete shortcut reference and platform compatibility.';

export default function Demo() {
  return (
    <>
			
      

			{/* Hero */}
			<section className="border-b border-border bg-background">
				<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-24">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl font-semibold leading-[1.14] lg:text-5xl">
							Every part of the tool, shown and explained
						</h1>
						<p className="text-lg leading-relaxed text-muted-foreground">
							This is the complete picture: what AssessDesk captures, how it answers, how you read and control the overlay, and
							why none of it reaches a screen recording. Start with the interactive panel below, then read the full reference.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
							<ButtonAnchor size="lg" href={registerUrl()}>
								Get AssessDesk <ArrowRight className="h-4 w-4" />
							</ButtonAnchor>
							<ButtonLink size="lg" variant="outline" to="/pricing">
								See pricing
							</ButtonLink>
						</div>
					</div>

					{/* Jump links */}
					<nav aria-label="On this page" className="overflow-hidden rounded-md border border-border bg-surface">
						<p className="border-b border-border px-6 py-4 text-sm font-semibold">On this page</p>
						<ul className="divide-y divide-border">
							{CAPABILITIES.map((c) =>
              <li key={c.slug}>
									<a
                  href={`#${c.slug}`}
                  className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-background">
										<span className="font-mono text-xs text-primary">{c.number}</span>
										<span className="flex-1 text-sm font-medium">{c.name}</span>
										<ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
									</a>
								</li>
              )}
						</ul>
						<a
              href="#hotkey-reference"
              className="flex items-center justify-between gap-4 border-t border-border bg-primary-deep px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep/90">
							Full hotkey reference
							<ArrowRight className="h-4 w-4" />
						</a>
					</nav>
				</div>
			</section>

			{/* Playground */}
			<Section>
				<SectionHeading
          title="The overlay, on top of a live exam"
          description="A representative multiple-choice question with the AssessDesk overlay above it. Change the answer mode, lower the opacity, shrink the panel or hide it entirely, just as the hotkeys do in a real session." />
        
				<div className="mt-14">
					<OverlayPlayground />
				</div>
			</Section>

			{/* The loop */}
			<Section tone="surface">
				<SectionHeading
          title="What happens between pressing the key and reading the answer" />
        
				<ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{LOOP_STEPS.map((step) =>
          <li key={step.number} className="flex flex-col rounded-md border border-border bg-background p-6">
							<div className="flex items-center justify-between">
								<IconChip>
									<step.icon className="h-6 w-6" />
								</IconChip>
								<span className="font-mono text-2xl font-bold text-border">{step.number}</span>
							</div>
							<h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
							<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
							<p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{step.meta}</p>
						</li>
          )}
				</ol>
			</Section>

			{/* Capabilities in full */}
			{CAPABILITIES.map((capability, index) =>
      <Section key={capability.slug} id={capability.slug} tone={index % 2 === 0 ? 'default' : 'surface'} className="scroll-mt-24">
					<div className="grid gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
						<div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:h-fit">
							<div className="flex items-center gap-4">
								<IconChip size="lg">
									<capability.icon className="h-7 w-7" />
								</IconChip>
								<span className="font-mono text-3xl font-bold text-border">{capability.number}</span>
							</div>
							<h2 className="text-3xl font-bold lg:text-4xl">{capability.name}</h2>
							<p className="text-lg font-medium text-primary">{capability.tagline}</p>
							<p className="text-base leading-relaxed text-muted-foreground">{capability.summary}</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{capability.details.map((detail) =>
            <div key={detail.title} className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
									<detail.icon className="h-5 w-5 text-primary" />
									<h3 className="text-base font-semibold">{detail.title}</h3>
									<p className="text-sm leading-relaxed text-muted-foreground">{detail.body}</p>
								</div>
            )}
						</div>
					</div>
				</Section>
      )}

			{/* Hotkey reference */}
			<Section id="hotkey-reference" tone="default" className="scroll-mt-24">
				<SectionHeading
          title="The complete hotkey reference"
          description="Every shortcut works while your exam is the focused window. Snip with Ctrl + Alt + Q; everything else sits on Ctrl + Shift." />
        
				<div className="mt-14 flex flex-col gap-10">
					{HOTKEY_GROUPS.map((group) =>
          <div key={group.group} className="overflow-hidden rounded-md border border-border">
							<div className="flex flex-wrap items-center gap-3 border-b border-border bg-surface px-5 py-4">
								<IconChip size="sm">
									<group.icon className="h-4 w-4" />
								</IconChip>
								<div>
									<h3 className="text-base font-semibold">{group.group}</h3>
									<p className="text-sm text-muted-foreground">{group.description}</p>
								</div>
							</div>
							<ul className="divide-y divide-border">
								{group.keys.map((key) =>
              <li
              key={key.action}
              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                
										<div className="min-w-0">
											<p className="text-sm font-semibold">{key.action}</p>
											<p className="mt-0.5 text-sm text-muted-foreground">{key.note}</p>
										</div>
										<div className="shrink-0">
											<KeyCombo combo={key.combo} />
										</div>
									</li>
              )}
							</ul>
						</div>
          )}
				</div>
			</Section>

			{/* Compatibility */}
			<Section tone="soft">
				<SectionHeading title="Where AssessDesk runs" />
				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{COMPATIBILITY.map((group) =>
          <div key={group.title} className="rounded-md border border-border bg-background p-6">
							<h3 className="text-base font-semibold text-foreground">{group.title}</h3>
							<ul className="mt-4 flex flex-col gap-2.5">
								{group.items.map((item) =>
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
										{item}
									</li>
              )}
							</ul>
						</div>
          )}
				</div>
			</Section>

			{/* FAQ */}
			<Section tone="surface">
				<SectionHeading title="Before you set it up" />
				<div className="mx-auto mt-12 max-w-4xl">
					<FaqList faqs={GENERAL_FAQS} />
				</div>
			</Section>

			<CTASection
        title="Install it, learn the hotkeys, run a dry pass"
        description="Setup takes a few minutes. Do it well before the assessment that matters, not the night before it."
        secondary={{ label: 'See pricing', to: '/pricing' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/demo",
  keywords: "assessdesk demo, how assessdesk works, exam overlay hotkeys, ocr question capture, invisible overlay demo, ai exam assistant features, undetectable screen overlay",
  jsonLd: [
        breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Demo', path: '/demo' }]
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Using AssessDesk during an assessment',
          step: LOOP_STEPS.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.body }))
        },
        faqJsonLd(GENERAL_FAQS)]
        
};
