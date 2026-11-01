import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { faqJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, IconChip, CTASection } from '@/components/site/Primitives';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { HeroOverlayVisual } from '@/components/site/OverlayMock';
import { KeyCombo } from '@/components/site/Kbd';
import { FaqList } from '@/components/site/Faq';
import { CAPABILITIES, COMPATIBILITY, GENERAL_FAQS, HOTKEY_GROUPS, LOOP_STEPS, TRUST_POINTS } from '@/config/assessdesk';
import { IMAGES, SITE, registerUrl } from '@/config/site';

const title = 'AssessDesk | Invisible AI Support for Exams, Tests & Interviews';
const description =
'AssessDesk captures any question on your screen, answers it in seconds and shows the result on an overlay that screen capture, recording and remote proctors cannot see. Hotkey-driven, mouse-free, undetectable.';

const jsonLd = [
{
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AssessDesk',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Windows 10, Windows 11, macOS 12+',
  url: SITE.domain,
  description,
  publisher: { '@type': 'Organization', name: 'ScholarDesk', url: 'https://scholardesk.pro' },
  offers: [
  { '@type': 'Offer', name: 'Day Pass', price: '20', priceCurrency: 'USD' },
  { '@type': 'Offer', name: 'Pro', price: '59', priceCurrency: 'USD' },
  { '@type': 'Offer', name: 'Term', price: '159', priceCurrency: 'USD' }]

},
{
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How AssessDesk answers a question during an assessment',
  step: LOOP_STEPS.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.body }))
},
faqJsonLd(GENERAL_FAQS)];


const audiences = [
{
  icon: Briefcase,
  label: 'For Professionals',
  to: '/for-professionals',
  heading: 'Clear the assessment standing between you and the role',
  points: [
  'Certification, licensing and recertification exams',
  'Technical screens and live coding rounds',
  'Speak mode for interviews you answer out loud',
  'Compliance, CPD and internal knowledge checks']

},
{
  icon: GraduationCap,
  label: 'For Students',
  to: '/for-students',
  heading: 'Walk into the exam with the reasoning already beside you',
  points: [
  'Proctored finals, midterms and timed quizzes',
  'Maths, engineering and science notation handled',
  'Programming assessments with runnable solutions',
  'Essay mode for structured long-form answers']

},
{
  icon: UserCheck,
  label: 'Do My Exam For Me',
  to: '/do-my-exam-for-me',
  heading: 'Or hand the whole thing to a vetted expert',
  points: [
  'A subject-matched specialist sits it for you',
  'Fixed quote agreed before anything starts',
  'Funds held in escrow until you approve',
  'A ScholarDesk coordinator on the whole way through']

}];


export default function Index() {
  return (
    <>
			
      

			{/* ---------------- Hero ---------------- */}
			<section className="relative isolate -mt-20 overflow-hidden bg-primary-deep text-primary-foreground">
				<img
        src={IMAGES.students}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="home-cinematic-image absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        
				<div className="home-cinematic-overlay absolute inset-0 -z-10" aria-hidden="true" />

				<div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28">
					<div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
						<div className="flex max-w-2xl flex-col gap-7">

							<h1 className="text-4xl font-semibold leading-[1.14] lg:text-6xl lg:leading-[1.08]">
								The answer is on your screen.{' '}
								<span className="text-primary-foreground/70">Only you can see it.</span>
							</h1>

							<p className="max-w-xl text-lg leading-relaxed text-primary-foreground/85">
								Select any question in any exam, test or interview. OCR reads it exactly as rendered, frontier AI answers it in
								seconds, and the result appears on an overlay excluded from screen capture, recording and remote proctoring,
								driven entirely by hotkeys, with no window switch, no cursor movement and no focus change.
							</p>

							<div className="flex flex-col gap-3 sm:flex-row">
								<ButtonAnchor size="lg" href={registerUrl()}>
									Get AssessDesk <ArrowRight className="h-4 w-4" />
								</ButtonAnchor>
								<ButtonLink size="lg" variant="inverseOutline" to="/demo">
									See it work
								</ButtonLink>
							</div>

							<ul className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-primary-foreground/80">
								{['Invisible to screen capture', 'Answers in 2–6 seconds', 'Windows and macOS'].map((item) =>
                <li key={item} className="flex items-center gap-2">
										<CheckCircle2 className="h-4 w-4 text-primary-foreground" />
										{item}
									</li>
                )}
							</ul>
						</div>

						<div className="lg:justify-self-end lg:pl-4">
							<HeroOverlayVisual />
						</div>
					</div>
				</div>
			</section>

			{/* ---------------- Trust strip ---------------- */}
			<div className="border-b border-border bg-surface">
				<div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
					{TRUST_POINTS.map((t) =>
          <div key={t.label} className="flex items-start gap-3">
							<t.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<p className="text-sm font-medium leading-snug">{t.label}</p>
						</div>
          )}
				</div>
			</div>

			{/* ---------------- The loop ---------------- */}
			<Section id="how-it-works">
				<SectionHeading
          title="Four keystrokes between the question and the answer"
          description="There is no second window to manage, no phone to look at and no tab to switch to. The entire tool is a capture, an answer and an overlay you control from the keyboard." />
        
				<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{LOOP_STEPS.map((step) =>
          <div key={step.number} className="flex flex-col rounded-md border border-border bg-background p-6">
							<div className="flex items-center justify-between">
								<IconChip>
									<step.icon className="h-6 w-6" />
								</IconChip>
								<span className="font-mono text-2xl font-bold text-border">{step.number}</span>
							</div>
							<h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
							<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
							<p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{step.meta}</p>
						</div>
          )}
				</div>
			</Section>

			{/* ---------------- Capabilities ---------------- */}
			<Section tone="surface">
				<SectionHeading
          title="Six capabilities, documented in full"
          description="Hotkeys, capture, answering, scrolling, brightness and the hide toggle. Nothing here is marketing shorthand. Each one is described exactly as it behaves in a live session." />
        
				<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{CAPABILITIES.map((c) =>
          <Link
          key={c.slug}
          to="/demo" hash={c.slug}
          className="group flex h-full flex-col rounded-md border border-border bg-background p-7 transition-colors hover:border-primary/40">
            
							<div className="flex items-center justify-between">
								<IconChip>
									<c.icon className="h-6 w-6" />
								</IconChip>
								<span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">{c.number}</span>
							</div>
							<h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
							<p className="mt-1 text-sm font-medium text-primary">{c.tagline}</p>
							<p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
							<span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
								See how it works
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</span>
						</Link>
          )}
				</div>
			</Section>

			{/* ---------------- Hotkeys teaser ---------------- */}
			<Section>
				<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
					<SectionHeading
            align="left"
            title="Operated entirely from the keyboard, while your exam stays in focus"
            description="Shortcuts are registered at the operating-system level, so they fire without AssessDesk ever being clicked, focused or brought to the front." />
          
					<div className="flex flex-col gap-3">
						{HOTKEY_GROUPS.slice(0, 4).map((group) =>
            <div key={group.group} className="flex items-center justify-between gap-4 rounded-md border border-border bg-background px-5 py-4">
								<div className="flex min-w-0 items-center gap-3">
									<group.icon className="h-4 w-4 shrink-0 text-primary" />
									<div className="min-w-0">
										<p className="truncate text-sm font-semibold">{group.keys[0]!.action}</p>
										<p className="truncate text-xs text-muted-foreground">{group.keys[0]!.note}</p>
									</div>
								</div>
								<div className="shrink-0">
									<KeyCombo combo={group.keys[0]!.combo} />
								</div>
							</div>
            )}
						<ButtonLink variant="outline" size="lg" to="/demo" hash="hotkey-reference" className="mt-2 self-start">
							See the full hotkey reference <ArrowRight className="h-4 w-4" />
						</ButtonLink>
					</div>
				</div>
			</Section>

			{/* ---------------- Audiences ---------------- */}
			<Section tone="surface">
				<SectionHeading
          title="One tool, three ways to use it"
          description="Use AssessDesk yourself in a live assessment, or hand the assessment over entirely to a vetted ScholarDesk expert." />
        
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{audiences.map((a) =>
          <div key={a.label} className="flex flex-col rounded-md border border-border bg-background p-8">
							<IconChip>
								<a.icon className="h-6 w-6" />
							</IconChip>
							<h3 className="mt-5 text-2xl font-semibold">{a.heading}</h3>
							<ul className="mt-6 flex flex-1 flex-col gap-3">
								{a.points.map((point) =>
              <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
										{point}
									</li>
              )}
							</ul>
							<ButtonLink variant="outline" to={a.to} className="mt-8 self-start">
								{a.label} <ArrowRight className="h-4 w-4" />
							</ButtonLink>
						</div>
          )}
				</div>
			</Section>

			{/* ---------------- Compatibility ---------------- */}
			<Section tone="soft">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<SectionHeading
            align="left"
            title="If it renders on your screen, AssessDesk can read it"
            description="Capture works on pixels rather than page content, which is why locked PDFs, copy-disabled pages, canvas-rendered question engines and lockdown browsers are all fair game." />
          
					<div className="grid gap-4 sm:grid-cols-2">
						{COMPATIBILITY.map((group) =>
            <div key={group.title} className="rounded-md border border-border bg-background p-5">
								<h3 className="text-base font-semibold text-foreground">{group.title}</h3>
								<ul className="mt-3 flex flex-col gap-2">
									{group.items.map((item) =>
                <li key={item} className="text-sm text-muted-foreground">
											{item}
										</li>
                )}
								</ul>
							</div>
            )}
					</div>
				</div>
			</Section>

			{/* ---------------- Done for you ---------------- */}
			<Section>
				<div className="overflow-hidden rounded-md border border-border">
					<div className="grid lg:grid-cols-2">
						<img src={IMAGES.clientAtWork} alt="A professional reviewing work at a desk" className="h-64 w-full object-cover lg:h-full" loading="lazy" />
						<div className="flex flex-col justify-center gap-5 bg-primary-deep p-8 text-primary-foreground lg:p-12">
							<h2 className="text-3xl font-bold lg:text-4xl">Would you rather not sit it at all?</h2>
							<p className="text-lg leading-relaxed text-primary-foreground/80">
								Our <strong className="font-semibold text-primary-foreground">Do My Exam For Me</strong> service puts a vetted,
								subject-matched ScholarDesk expert in the seat. A fixed quote is agreed before anything starts, your funds are held
								in escrow rather than paid out, and a coordinator stays with the order from the first message to your approval.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row">
								<ButtonLink size="lg" variant="inverse" to="/do-my-exam-for-me">
									Request a quote <ArrowRight className="h-4 w-4" />
								</ButtonLink>
								<ButtonLink size="lg" variant="inverseOutline" to="/pricing">
									Compare with the tool
								</ButtonLink>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* ---------------- FAQ ---------------- */}
			<Section tone="surface">
				<SectionHeading
          title="The things people actually want to know"
          description="Straight answers on detectability, speed, platforms and what happens when something goes wrong." />
        
				<div className="mx-auto mt-12 max-w-4xl">
					<FaqList faqs={GENERAL_FAQS} />
				</div>
			</Section>

			<CTASection
        title="Set it up once. Use it for everything that follows."
        description="Install on Windows or macOS, learn the hotkeys, run a dry pass against practice questions and be ready long before the assessment that matters."
        primaryLabel="Get AssessDesk"
        secondary={{ label: 'See the live demo', to: '/demo' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/",
  keywords: "assessdesk, invisible ai for exams, undetectable exam helper, ai exam assistant, online exam help, proctored exam overlay, screen capture proof overlay, ai interview assistant, take my exam, certification exam help, ocr question capture",
  jsonLd: jsonLd
};
