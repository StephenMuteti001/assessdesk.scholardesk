import { useEffect, useState } from 'react';
import { CheckCircle2, EyeOff, Gauge, Lock, ScanLine, Sparkles } from 'lucide-react';
import { Kbd } from '@/components/site/Kbd';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* The exam window sitting behind the overlay                          */
/* ------------------------------------------------------------------ */

export function ExamWindow({ scanning = false, children }: {scanning?: boolean;children?: React.ReactNode;}) {
  return (
    <div className="relative overflow-hidden rounded-md border border-border bg-background">
			{/* Window chrome */}
			<div className="flex items-center gap-2 border-b border-border bg-surface-strong px-4 py-2.5">
				<span className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-border" />
					<span className="h-2.5 w-2.5 rounded-full bg-border" />
					<span className="h-2.5 w-2.5 rounded-full bg-border" />
				</span>
				<span className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-sm border border-border bg-background px-2.5 py-1">
					<Lock className="h-3 w-3 shrink-0 text-success" />
					<span className="truncate font-mono text-[11px] text-muted-foreground">exams.university.edu/attempt/4821 · Secure Browser</span>
				</span>
				<span className="hidden shrink-0 rounded-sm bg-destructive/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-destructive sm:inline">
					REC
				</span>
			</div>

			{/* Exam body */}
			<div className="relative p-5 sm:p-7">
				<div className="flex items-center justify-between border-b border-border pb-4">
					<p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Question 14 of 60</p>
					<p className="font-mono text-[11px] font-semibold text-foreground">41:08 remaining</p>
				</div>

				<div className="relative mt-5">
					{scanning ?
          <span className="pointer-events-none absolute inset-x-0 top-0 z-10 overflow-hidden" aria-hidden="true">
							<span className="scan-sweep block h-10 w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
						</span> :
          null}

					<div className="rounded-sm border border-dashed border-primary/45 bg-primary/[0.03] p-4">
						<p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
							A 0.250 mol sample of an ideal gas occupies 6.20 L at 310 K. The gas is compressed isothermally and reversibly to
							2.10 L. Which expression gives the work done <em>on</em> the gas?
						</p>
						<ul className="mt-4 flex flex-col gap-2">
							{[
              ['A', 'w = −nRT ln(V₂ / V₁)'],
              ['B', 'w = +nRT ln(V₁ / V₂)'],
              ['C', 'w = −P_ext ΔV'],
              ['D', 'w = nC_v ΔT']].
              map(([letter, text]) =>
              <li key={letter} className="flex items-center gap-3 rounded-sm border border-border px-3 py-2">
									<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[10px] font-semibold text-muted-foreground">
										{letter}
									</span>
									<span className="font-mono text-xs text-muted-foreground sm:text-sm">{text}</span>
								</li>
              )}
						</ul>
					</div>

					<p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Capture region</p>
				</div>

				{children}
			</div>
		</div>);

}

/* ------------------------------------------------------------------ */
/* The AssessDesk overlay                                              */
/* ------------------------------------------------------------------ */

const MODES = ['Direct', 'Explain', 'Steps', 'Essay', 'Speak'] as const;
export type OverlayMode = (typeof MODES)[number];

const BODY: Record<OverlayMode, string[]> = {
  Direct: ['Isothermal reversible compression of an ideal gas.', 'Work done on the gas is positive when V₂ < V₁.'],
  Explain: [
  'For a reversible isothermal process, w = −nRT ln(V₂/V₁).',
  'Because the gas is compressed, V₂ < V₁, so ln(V₂/V₁) is negative and w is positive, work is done on the gas.',
  'Rewriting with the ratio inverted gives the equivalent positive form w = +nRT ln(V₁/V₂), which is option B.',
  'C applies only to irreversible expansion against a constant external pressure. D is the internal-energy change, not work.'],

  Steps: [
  '1 · Identify the process: reversible, isothermal, ideal gas.',
  '2 · Apply w = −nRT ln(V₂/V₁).',
  '3 · Substitute V₁ = 6.20 L, V₂ = 2.10 L → ln(2.10/6.20) = −1.083.',
  '4 · w = −(0.250)(8.314)(310)(−1.083) = +697.8 J.',
  '5 · Positive sign confirms work done on the gas → option B.'],

  Essay: [
  'Thesis: the sign convention follows from the direction of volume change.',
  'Point 1: define reversible isothermal work and its integral form.',
  'Point 2: show why compression yields a positive w on the system.',
  'Counterpoint: distinguish from irreversible −P_extΔV.'],

  Speak: ['It is B: positive nRT ln of V-one over V-two.', 'Because we are compressing, work is done on the gas, so the sign is positive.']
};

export function OverlayPanel({
  opacity = 100,
  hidden = false,
  mode = 'Explain',
  micro = false,
  className = '',
  typing = false







}: {opacity?: number;hidden?: boolean;mode?: OverlayMode;micro?: boolean;className?: string;typing?: boolean;}) {
  return (
    <div
    className={cn(
      'overflow-hidden rounded-md border border-primary-foreground/15 bg-primary-deep text-primary-foreground transition-opacity duration-200',
      hidden && 'pointer-events-none opacity-0',
      className
    )}
    style={{ opacity: hidden ? 0 : opacity / 100 }}
    aria-hidden={hidden}>
      
			{/* Overlay header */}
			<div className="flex items-center justify-between gap-3 border-b border-primary-foreground/10 bg-primary-foreground/[0.04] px-4 py-2.5">
				<span className="flex items-center gap-2">
					<EyeOff className="h-3.5 w-3.5 text-primary-foreground/70" />
					<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
						AssessDesk · not captured
					</span>
				</span>
				<span className="flex items-center gap-2">
					<span className="rounded-sm bg-primary-foreground/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider">
						{mode}
					</span>
					<span className="hidden items-center gap-1 font-mono text-[10px] text-success sm:inline-flex">
						<CheckCircle2 className="h-3 w-3" /> 97%
					</span>
				</span>
			</div>

			{/* Answer */}
			<div className={cn('px-4', micro ? 'py-2.5' : 'py-4')}>
				<div className="flex items-baseline gap-3">
					<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-success font-mono text-xs font-bold text-success-foreground">
						B
					</span>
					<p className="font-mono text-sm font-semibold leading-snug text-primary-foreground">
						w = +nRT ln(V₁ / V₂)
						{typing ? <span className="caret-blink ml-1 inline-block h-3.5 w-1.5 translate-y-px bg-primary-foreground" /> : null}
					</p>
				</div>

				{!micro ?
        <div className="mt-3 flex flex-col gap-2 border-l border-primary-foreground/15 pl-3">
						{BODY[mode].map((line) =>
          <p key={line} className="rise-in text-[13px] leading-relaxed text-primary-foreground/75">
								{line}
							</p>
          )}
					</div> :
        null}
			</div>

			{/* Overlay footer */}
			{!micro ?
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-primary-foreground/10 px-4 py-2.5">
					<span className="flex items-center gap-2">
						<Gauge className="h-3.5 w-3.5 text-primary-foreground/50" />
						<span className="h-1 w-20 overflow-hidden rounded-full bg-primary-foreground/15">
							<span className="block h-full bg-primary-foreground/70" style={{ width: `${opacity}%` }} />
						</span>
						<span className="font-mono text-[10px] text-primary-foreground/50">{opacity}%</span>
					</span>
					<span className="flex items-center gap-3 font-mono text-[10px] text-primary-foreground/45">
						<span>Ctrl Shift PgUp/PgDn scroll</span>
						<span className="hidden sm:inline">Ctrl Shift H hide</span>
					</span>
				</div> :
      null}
		</div>);

}

/* ------------------------------------------------------------------ */
/* Composed, self-running hero visual                                  */
/* ------------------------------------------------------------------ */

const CYCLE: {label: string;mode: OverlayMode;opacity: number;hidden: boolean;note?: string;scanning: boolean;}[] = [
{ label: 'Ctrl + Alt + Q: snip the question', mode: 'Explain', opacity: 100, hidden: true, note: 'Reading the question…', scanning: true },
{ label: 'Answer returned', mode: 'Explain', opacity: 100, hidden: false, scanning: false },
{ label: 'Ctrl + Shift + [: lower opacity', mode: 'Explain', opacity: 60, hidden: false, scanning: false },
{ label: 'Ctrl + Shift + H: hide the panel', mode: 'Explain', opacity: 60, hidden: true, note: 'Panel hidden. Press Ctrl + Shift + H to bring it back.', scanning: false },
{ label: 'Ctrl + Shift + C: clear the panel', mode: 'Explain', opacity: 100, hidden: true, note: 'Panel cleared. Ready for the next snip.', scanning: false }];


export function HeroOverlayVisual() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % CYCLE.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  const state = CYCLE[step]!;

  return (
    <div className="relative">
			<ExamWindow scanning={state.scanning} />
			{/* Fixed-height frame: an invisible copy of the tallest panel reserves the space,
			    so hiding or clearing the live panel never moves the page. */}
			<div className="relative -mt-10 ml-6 mr-0 sm:-mt-14 sm:ml-16">
				<div aria-hidden="true" className="invisible">
					<OverlayPanel mode="Explain" />
				</div>
				<div className="absolute inset-0">
					<OverlayPanel opacity={state.opacity} hidden={state.hidden} mode={state.mode} typing={state.scanning} />
				</div>
				<div
          className={cn(
            'pointer-events-none absolute inset-0 flex items-center justify-center rounded-md border border-dashed border-primary-foreground/25 px-6 text-center transition-opacity duration-300',
            state.hidden && state.note ? 'opacity-100' : 'opacity-0'
          )}>
					<p className="font-mono text-xs text-primary-foreground/70">{state.note}</p>
				</div>
			</div>
			<p className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground/60">
				<Sparkles className="h-3.5 w-3.5" />
				{state.label}
			</p>
		</div>);

}

/* ------------------------------------------------------------------ */
/* Interactive playground for the demo page                            */
/* ------------------------------------------------------------------ */

export function OverlayPlayground() {
  const [opacity, setOpacity] = useState(85);
  const [hidden, setHidden] = useState(false);
  const [micro, setMicro] = useState(false);
  const [mode, setMode] = useState<OverlayMode>('Explain');

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
			<div className="flex flex-col gap-0">
				<ExamWindow />
				<div className="relative z-10 -mt-10 ml-4 sm:ml-12">
					<OverlayPanel opacity={opacity} hidden={hidden} micro={micro} mode={mode} />
				</div>
			</div>

			<div className="flex h-fit flex-col gap-6 rounded-md border border-border bg-surface p-6">
				<div className="flex flex-col gap-1">
					<h3 className="text-base font-semibold text-foreground">Try the controls</h3>
					<p className="text-sm leading-relaxed text-muted-foreground">
						In the real tool each of these is a global hotkey. Here they are buttons so you can see exactly what they do.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="brightness" className="flex items-center justify-between text-sm font-medium">
						<span className="flex items-center gap-2">
							<Gauge className="h-4 w-4 text-primary" /> Opacity
						</span>
						<span className="font-mono text-xs text-muted-foreground">{opacity}%</span>
					</label>
					<input
          id="brightness"
          type="range"
          min={10}
          max={100}
          step={5}
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary" />
          
					<p className="flex items-center gap-2 text-xs text-muted-foreground">
						<Kbd>Ctrl</Kbd> <Kbd>Shift</Kbd> <Kbd>[</Kbd> / <Kbd>]</Kbd>
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<p className="flex items-center gap-2 text-sm font-medium">
						<Sparkles className="h-4 w-4 text-primary" /> Answer mode
					</p>
					<div className="flex flex-wrap gap-1.5">
						{MODES.map((m) =>
            <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              'rounded-sm border px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors',
              mode === m ?
              'border-primary bg-primary text-primary-foreground' :
              'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary'
            )}>
              
								{m}
							</button>
            )}
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<button
          type="button"
          onClick={() => setHidden((v) => !v)}
          className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary">
            
						<span className="flex items-center gap-2">
							<EyeOff className="h-4 w-4 text-primary" /> {hidden ? 'Show overlay' : 'Hide overlay'}
						</span>
						<span className="flex items-center gap-1">
							<Kbd>Ctrl</Kbd>
							<Kbd>Shift</Kbd>
							<Kbd>H</Kbd>
						</span>
					</button>
					<button
          type="button"
          onClick={() => setMicro((v) => !v)}
          title="Shrinks the panel to the answer line only" 
          className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary">
            
						<span className="flex items-center gap-2">
							<ScanLine className="h-4 w-4 text-primary" /> {micro ? 'Expand panel' : 'Micro mode'}
						</span>
						<span className="flex items-center gap-1">
						</span>
					</button>
				</div>

				<p className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
					This is an interactive illustration of the overlay. In a live session nothing on this panel is reachable by a mouse,
					and none of it appears in a screen recording.
				</p>
			</div>
		</div>);

}