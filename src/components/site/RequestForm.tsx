import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Copy, Mail } from 'lucide-react';
import { Button, ButtonAnchor } from '@/components/site/SiteButton';
import { SITE } from '@/config/site';
import { cn } from '@/lib/utils';

const field =
'w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring';

const ASSESSMENT_TYPES = [
'Single exam or test',
'Quiz or short assessment',
'Full course or class',
'Certification or licensing exam',
'Interview or viva',
'Something else'];


const PROCTORING = [
'Not proctored',
'Browser lockdown only',
'Automated / AI proctoring (webcam + screen)',
'Live human proctor',
'In-person test centre',
'Not sure'];


interface RequestState {
  name: string;
  email: string;
  type: string;
  subject: string;
  level: string;
  platform: string;
  date: string;
  duration: string;
  proctoring: string;
  target: string;
  notes: string;
}

const EMPTY: RequestState = {
  name: '',
  email: '',
  type: ASSESSMENT_TYPES[0]!,
  subject: '',
  level: '',
  platform: '',
  date: '',
  duration: '',
  proctoring: PROCTORING[0]!,
  target: '',
  notes: ''
};

function buildBody(v: RequestState) {
  return [
  'AssessDesk: Do My Exam For Me request',
  '',
  `Name: ${v.name}`,
  `Email: ${v.email}`,
  `Assessment type: ${v.type}`,
  `Subject / topic: ${v.subject}`,
  `Level: ${v.level || 'n/a'}`,
  `Platform: ${v.platform || 'n/a'}`,
  `Date and time: ${v.date || 'n/a'}`,
  `Duration: ${v.duration || 'n/a'}`,
  `Proctoring: ${v.proctoring}`,
  `Target outcome: ${v.target || 'n/a'}`,
  '',
  'Additional details:',
  v.notes || 'n/a'].
  join('\n');
}

function copyToClipboard(text: string) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'absolute';
  area.style.left = '-9999px';
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  document.body.removeChild(area);
}

export function RequestForm() {
  const [values, setValues] = useState<RequestState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof RequestState) => (e: {target: {value: string;};}) =>
  setValues((v) => ({ ...v, [key]: e.target.value }));

  const subjectLine = `AssessDesk request: ${values.type}${values.subject ? `: ${values.subject}` : ''}`;
  const body = buildBody(values);
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailto;
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-5 rounded-md border border-success/40 bg-success/5 p-8">
				<span className="flex h-12 w-12 items-center justify-center rounded-md bg-success/15 text-success">
					<CheckCircle2 className="h-6 w-6" />
				</span>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-bold">Your request is ready to send</h3>
					<p className="text-sm leading-relaxed text-muted-foreground">
						We have opened your email client with everything filled in. Send it and a coordinator will come back within a few
						hours with a fixed price, a named expert profile and an honest answer on whether we can cover it. If nothing
						opened, use one of the options below.
					</p>
				</div>

				<pre className="max-h-56 overflow-auto whitespace-pre-wrap rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted-foreground">
					{body}
				</pre>

				<div className="flex flex-col gap-3 sm:flex-row">
					<ButtonAnchor href={mailto} size="lg">
						<Mail className="h-4 w-4" /> Open email again
					</ButtonAnchor>
					<Button
            variant="outline"
            size="lg"
            type="button"
            onClick={() => {
              copyToClipboard(`To: ${SITE.email}\nSubject: ${subjectLine}\n\n${body}`);
              setCopied(true);
            }}>
            
						<Copy className="h-4 w-4" /> {copied ? 'Copied' : 'Copy the details'}
					</Button>
					<Button
            variant="ghost"
            size="lg"
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCopied(false);
            }}>
            
						Edit the request
					</Button>
				</div>
			</div>);

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-md border border-border bg-background p-6 sm:p-8">
			<div className="flex flex-col gap-1">
				<h3 className="text-xl font-bold">Request a quote</h3>
				<p className="text-sm leading-relaxed text-muted-foreground">
					The more precise you are, the more precise the quote and the expert match. Nothing is charged at this stage.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="name" className="text-sm font-medium">
						Your name <span className="text-destructive">*</span>
					</label>
					<input id="name" required value={values.name} onChange={set('name')} className={field} placeholder="Alex Mwangi" />
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="email" className="text-sm font-medium">
						Email <span className="text-destructive">*</span>
					</label>
					<input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={set('email')}
          className={field}
          placeholder="you@example.com" />
          
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="type" className="text-sm font-medium">
						What needs covering <span className="text-destructive">*</span>
					</label>
					<select id="type" required value={values.type} onChange={set('type')} className={cn(field, 'cursor-pointer')}>
						{ASSESSMENT_TYPES.map((t) =>
            <option key={t}>{t}</option>
            )}
					</select>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="subject" className="text-sm font-medium">
						Subject or topic <span className="text-destructive">*</span>
					</label>
					<input
          id="subject"
          required
          value={values.subject}
          onChange={set('subject')}
          className={field}
          placeholder="Organic chemistry, AWS Solutions Architect, CFA Level II…" />
          
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="level" className="text-sm font-medium">
						Level
					</label>
					<input
          id="level"
          value={values.level}
          onChange={set('level')}
          className={field}
          placeholder="Undergraduate year 2, Masters, Professional…" />
          
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="platform" className="text-sm font-medium">
						Platform
					</label>
					<input
          id="platform"
          value={values.platform}
          onChange={set('platform')}
          className={field}
          placeholder="Canvas, Blackboard, Pearson VUE, Moodle…" />
          
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="date" className="text-sm font-medium">
						Date and time (with timezone)
					</label>
					<input id="date" value={values.date} onChange={set('date')} className={field} placeholder="14 Dec, 09:00 EST" />
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="duration" className="text-sm font-medium">
						Duration
					</label>
					<input id="duration" value={values.duration} onChange={set('duration')} className={field} placeholder="3 hours, 60 questions" />
				</div>

				<div className="flex flex-col gap-1.5">
					<label htmlFor="proctoring" className="text-sm font-medium">
						How is it proctored? <span className="text-destructive">*</span>
					</label>
					<select
          id="proctoring"
          required
          value={values.proctoring}
          onChange={set('proctoring')}
          className={cn(field, 'cursor-pointer')}>
            
						{PROCTORING.map((p) =>
            <option key={p}>{p}</option>
            )}
					</select>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="target" className="text-sm font-medium">
						Target outcome
					</label>
					<input id="target" value={values.target} onChange={set('target')} className={field} placeholder="Pass, 70%+, distinction…" />
				</div>
			</div>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="notes" className="text-sm font-medium">
					Anything else we should know
				</label>
				<textarea
        id="notes"
        rows={4}
        value={values.notes}
        onChange={set('notes')}
        className={cn(field, 'resize-y')}
        placeholder="Syllabus, question formats, calculator or formula sheet rules, retake history, anything unusual about the setup." />
        
			</div>

			<div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
				<p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
					No payment is taken now. You will receive a fixed quote first, and funds are held in escrow until you approve the
					outcome.
				</p>
				<Button type="submit" size="lg" className="shrink-0">
					Send my request <ArrowRight className="h-4 w-4" />
				</Button>
			</div>
		</form>);

}