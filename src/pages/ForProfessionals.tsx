import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Target } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, IconChip, StatBlock, CTASection } from '@/components/site/Primitives';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { KeyCombo } from '@/components/site/Kbd';
import { CAPABILITIES, HOTKEY_GROUPS, PROFESSIONAL_USE_CASES } from '@/config/assessdesk';
import { IMAGES, registerUrl } from '@/config/site';

const title = 'AssessDesk for Professionals | Certification, Technical Screens & Interviews';
const description =
'Clear the certification exam, technical screen or competency interview standing between you and the role. AssessDesk answers on-screen questions in seconds on an overlay no screen share or recording can see.';

const objectives = [
{
  icon: Target,
  title: 'The credential, not the revision',
  body: 'You already do the work. What stands between you and the title is a four-hour exam on material you will use a tool for anyway. AssessDesk shortens the distance between competence you already have and the certificate that proves it.'
},
{
  icon: Clock3,
  title: 'Weeks of study you do not have',
  body: 'Billable hours, delivery deadlines and a family do not pause for a recertification window. AssessDesk removes the three-month study block from the equation without removing the credential from your CV.'
},
{
  icon: ShieldCheck,
  title: 'No second device, no second screen',
  body: 'Everything happens on the machine you are already assessed on, on a layer that screen sharing and recording do not receive, so there is nothing to explain, hide or reach for.'
}];


export default function ForProfessionals() {
  return (
    <>
			
      

			{/* Hero */}
			<section className="border-b border-border bg-background">
				<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-24">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl font-semibold leading-[1.14] lg:text-5xl">
							The exam is not the job. Stop letting it decide your career.
						</h1>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Certification, licensing, recertification, technical screens, competency interviews, compliance modules and
							psychometric tests, AssessDesk reads the question off your screen and returns a complete, reasoned answer in
							seconds, on an overlay that screen sharing, recording and proctoring software never receive.
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
							<StatBlock value="2–6s" label="From capture to answer" />
							<StatBlock value="0" label="Window switches required" />
							<StatBlock value="24/7" label="Human support behind it" />
						</div>
					</div>
					<figure className="hidden lg:block overflow-hidden rounded-md border border-border bg-surface">
						<div className="aspect-[16/10] overflow-hidden">
							<img src={IMAGES.clientAudience} alt="A professional preparing for a certification exam" width={738} height={461} loading="eager" decoding="async" className="h-full w-full object-cover" />
						</div>
					</figure>
				</div>
			</section>

			{/* Objectives */}
			<Section>
				<SectionHeading
          title="What is actually in your way"
          description="Professionals rarely fail assessments because they cannot do the work. They fail them because of time, format and recall under pressure, which are the three things AssessDesk is built around." />
        
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
          title="What AssessDesk covers for professionals"
          description="Any assessment delivered on a screen is in scope, whether it is a four-hour proctored certification or a 45-minute shared-screen interview." />
        
				<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{PROFESSIONAL_USE_CASES.map((u) =>
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

			{/* Capability recap */}
			<Section>
				<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
					<SectionHeading
            align="left"
            title="Six capabilities, working together in one keystroke loop"
            description="Each one exists to remove a specific thing a proctor, an interviewer or a recording could otherwise notice." />
          
					<div className="flex flex-col gap-3">
						{CAPABILITIES.map((c) =>
            <div key={c.slug} className="flex gap-4 rounded-md border border-border bg-background p-5">
								<IconChip size="sm">
									<c.icon className="h-4 w-4" />
								</IconChip>
								<div>
									<h3 className="text-sm font-semibold">{c.name}</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
								</div>
							</div>
            )}
						<ButtonLink variant="outline" size="lg" to="/demo" className="mt-2 self-start">
							Read the full reference <ArrowRight className="h-4 w-4" />
						</ButtonLink>
					</div>
				</div>
			</Section>

			{/* Interview focus */}
			<Section tone="soft">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="flex flex-col gap-5">
						<h2 className="text-3xl font-bold lg:text-4xl">Speak mode, for the questions you answer out loud</h2>
						<p className="text-lg leading-relaxed text-muted-foreground">
							Reading a paragraph aloud is obvious. Speak mode returns short, natural phrasing you can actually say, the key
							point first, then one or two supporting lines you can expand in your own words. The overlay sits near your camera
							so your eyeline barely moves, and it is excluded from the video feed the interviewer is recording.
						</p>
						<ul className="flex flex-col gap-3">
							{[
              'Short, speakable phrasing instead of written prose',
              'Overlay positioned beside your webcam so your gaze stays natural',
              'Excluded from the shared screen and the recording',
              'Opacity steps down to 15% for a discreet panel'].
              map((item) =>
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
									{item}
								</li>
              )}
						</ul>
					</div>
					<div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
						<h3 className="text-base font-semibold text-foreground">Shortcuts you will use most</h3>
						{HOTKEY_GROUPS.flatMap((g) => g.keys).
            slice(0, 6).
            map((key) =>
            <div key={key.action} className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
									<p className="text-sm font-medium">{key.action}</p>
									<KeyCombo combo={key.combo} />
								</div>
            )}
					</div>
				</div>
			</Section>

			<CTASection
        title="Get the credential the work already earned you"
        description="Install on your work or personal machine, learn the hotkeys, run a dry pass, and walk into the assessment with the reasoning already beside you."
        secondary={{ label: 'Or have an expert sit it', to: '/do-my-exam-for-me' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/for-professionals",
  keywords: "certification exam help, licensing exam assistant, technical interview ai, coding screen helper, cpd assessment, psychometric test help, professional exam ai, invisible interview assistant",
  jsonLd: [breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'For Professionals', path: '/for-professionals' }])]
};
