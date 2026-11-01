import { ArrowRight, CheckCircle2, Clock3, HeartPulse, TrendingUp } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, IconChip, StatBlock, CTASection } from '@/components/site/Primitives';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { KeyCombo } from '@/components/site/Kbd';
import { CAPABILITIES, HOTKEY_GROUPS, STUDENT_USE_CASES } from '@/config/assessdesk';
import { IMAGES, registerUrl } from '@/config/site';

const title = 'AssessDesk for Students | Online Exams, Quizzes & Proctored Finals';
const description =
'Proctored finals, timed quizzes, maths and science notation, programming assessments and long-form essays, AssessDesk reads the question off your screen and answers it on an overlay recordings cannot see.';

const objectives = [
{
  icon: Clock3,
  title: 'Four assessments, one week, one you',
  body: 'Deadlines do not arrive politely spaced. AssessDesk takes the time pressure out of the assessments that are purely about recall so you can spend your remaining hours on the work that is actually yours.'
},
{
  icon: HeartPulse,
  title: 'Blanking under pressure',
  body: 'Knowing the material and retrieving it in a timed window are different skills, and only one of them is being graded. Having the reasoning beside you removes the part of exam anxiety that is purely about recall.'
},
{
  icon: TrendingUp,
  title: 'A semester that got away from you',
  body: 'Explain and Steps mode mean you read the reasoning, not just a result. The assessment you clear today in Explain mode is material you can actually discuss tomorrow.'
}];


export default function ForStudents() {
  return (
    <>
			
      

			{/* Hero */}
			<section className="border-b border-border bg-background">
				<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-24">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl font-semibold leading-[1.14] lg:text-5xl">
							Walk into the exam with the reasoning already beside you
						</h1>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Proctored finals, midterms, timed quizzes, maths and engineering papers, programming assessments and long-form
							essays. Select the question, and the answer, with the working, in the right notation, in the right language,
							appears on an overlay your recording software never sees.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
							<ButtonAnchor size="lg" href={registerUrl()}>
								Get AssessDesk <ArrowRight className="h-4 w-4" />
							</ButtonAnchor>
							<ButtonLink size="lg" variant="outline" to="/demo">
								See how it works
							</ButtonLink>
						</div>
						<div className="mt-6 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
							<StatBlock value="<5s" label="Typical multiple-choice loop" />
							<StatBlock value="40+" label="Languages answered natively" />
							<StatBlock value="$20" label="For 20 credits valid 24 hours" />
						</div>
					</div>
					<figure className="hidden lg:block overflow-hidden rounded-md border border-border bg-surface">
						<div className="aspect-[16/10] overflow-hidden">
							<img src={IMAGES.students} alt="Students working together on coursework" width={738} height={461} loading="eager" decoding="async" className="h-full w-full object-cover" />
						</div>
					</figure>
				</div>
			</section>

			{/* Objectives */}
			<Section>
				<SectionHeading
          title="The gap is rarely the knowledge"
          description="It is the clock, the format and the retrieval. AssessDesk is built around those three things rather than around pretending they do not exist." />
        
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{objectives.map((o) =>
          <div key={o.title} className="flex flex-col rounded-md border border-border bg-background p-7">
							<IconChip>
								<o.icon className="h-6 w-6" />
							</IconChip>
							<h3 className="mt-5 text-lg font-semibold">{o.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
						</div>
          )}
				</div>
			</Section>

			{/* Use cases */}
			<Section tone="surface">
				<SectionHeading
          title="What AssessDesk covers for students"
          description="Every subject, every question format, every delivery platform, as long as it renders on your screen, it can be captured and answered." />
        
				<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{STUDENT_USE_CASES.map((u) =>
          <div key={u.title} className="flex flex-col rounded-md border border-border bg-background p-7">
							<IconChip>
								<u.icon className="h-6 w-6" />
							</IconChip>
							<h3 className="mt-5 text-lg font-semibold">{u.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
						</div>
          )}
				</div>
			</Section>

			{/* Proctoring */}
			<Section>
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<figure className="overflow-hidden rounded-md border border-border bg-surface">
						<div className="aspect-[16/10] overflow-hidden">
							<img src={IMAGES.howItWorks} alt="A student working through an online assessment" width={738} height={461} loading="lazy" decoding="async" className="h-full w-full object-cover" />
						</div>
					</figure>
					<div className="flex flex-col gap-5">
						<h2 className="text-3xl font-bold lg:text-4xl">Built for the way remote proctoring actually watches</h2>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Proctoring looks at three things: what your screen is sending, whether your window lost focus, and what your face
							and hands are doing. AssessDesk is designed around all three.
						</p>
						<ul className="flex flex-col gap-3">
							{[
              'The overlay is excluded from the capture stream at the OS compositor level',
              'It never takes keyboard focus, so focus-loss detection is never triggered',
              'No taskbar, dock, alt-tab or window-title presence for anything to enumerate',
              'No phone, no second screen and no cursor movement away from the exam',
              'Ctrl + Shift + C clears the panel in one keystroke for a mid-exam room scan'].
              map((item) =>
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
									{item}
								</li>
              )}
						</ul>
						<ButtonLink variant="outline" to="/demo#invisibility" className="mt-2 self-start">
							Read how invisibility works <ArrowRight className="h-4 w-4" />
						</ButtonLink>
					</div>
				</div>
			</Section>

			{/* Capability recap */}
			<Section tone="soft">
				<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
					<SectionHeading
            align="left"
            title="Everything you control, and the keys that do it"
            description="Six capabilities, all keyboard-driven, all usable without ever looking away from the question." />
          
					<div className="grid gap-3 sm:grid-cols-2">
						{CAPABILITIES.map((c) =>
            <div key={c.slug} className="flex flex-col gap-2 rounded-md border border-border bg-background p-5">
								<IconChip size="sm">
									<c.icon className="h-4 w-4" />
								</IconChip>
								<h3 className="mt-1 text-sm font-semibold">{c.name}</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
							</div>
            )}
						<div className="flex flex-col gap-3 rounded-md border border-border bg-background p-5 sm:col-span-2">
							{HOTKEY_GROUPS[2]!.keys.slice(0, 4).map((key) =>
              <div key={key.action} className="flex items-center justify-between gap-4">
									<p className="text-sm font-medium">{key.action}</p>
									<KeyCombo combo={key.combo} />
								</div>
              )}
						</div>
					</div>
				</div>
			</Section>

			<CTASection
        title="Set it up before the week you actually need it"
        description="A Day Pass gives you 20 credits for 24 hours at $20. Install, learn the hotkeys, run a dry pass against practice questions, and be ready."
        secondary={{ label: 'See pricing', to: '/pricing' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/for-students",
  keywords: "online exam help, proctored exam ai, quiz helper, ai exam assistant for students, lockdown browser overlay, maths exam ai, programming exam help, essay exam assistant",
  jsonLd: [breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'For Students', path: '/for-students' }])]
};
