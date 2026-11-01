import {
	Activity,
	ArrowLeftRight,
	BookOpenCheck,
	Brain,
	Calculator,
	Camera,
	Code2,
	Command,
	Cpu,
	Eye,
	EyeOff,
	FileSearch,
	Gauge,
	History,
	Keyboard,
	Languages,
	Layers,
	ListChecks,
	Lock,
	Maximize2,
	MicOff,
	Monitor,
	MonitorOff,
	MousePointerClick,
	Move,
	PanelTopClose,
	RefreshCcw,
	ScanLine,
	ScrollText,
	ShieldCheck,
	SlidersHorizontal,
	Sparkles,
	SquareDashedMousePointer,
	Table2,
	Timer,
	Trash2,
	Type,
	WifiOff,
	Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* The six core capabilities: the honest, complete tool description   */
/* ------------------------------------------------------------------ */

export interface Capability {
	slug: string;
	number: string;
	icon: LucideIcon;
	name: string;
	tagline: string;
	summary: string;
	details: { icon: LucideIcon; title: string; body: string }[];
}

export const CAPABILITIES: Capability[] = [
	{
		slug: 'hotkeys',
		number: '01',
		icon: Keyboard,
		name: 'Hotkey control',
		tagline: 'Everything runs from the keyboard. Nothing runs from the mouse.',
		summary:
			'AssessDesk is driven entirely by global keyboard shortcuts that work no matter which window has focus. You never alt-tab, never click a second application, and never move your cursor off the exam. Eleven shortcuts cover everything: snip, hide, clear, opacity, nudging and scrolling.',
		details: [
			{
				icon: Command,
				title: 'Global, not window-scoped',
				body: 'Shortcuts are registered at the operating-system level. They fire while your browser, lockdown browser or video call is the active window, AssessDesk never needs to be clicked, focused or brought to the front.',
			},
			{
				icon: MousePointerClick,
				title: 'Zero cursor movement',
				body: 'Because nothing requires a click, your mouse stays where a proctor expects it. There is no second cursor, no window drag, no tab switch and no visible interaction to explain.',
			},
			{
				icon: SlidersHorizontal,
				title: 'A small, learnable set',
				body: 'Snip with Ctrl + Alt + Q. Everything else sits on Ctrl + Shift: H to hide, C to clear, [ and ] for opacity, the arrow keys to nudge the panel and Page Up or Page Down to scroll.',
			},
			{
				icon: Timer,
				title: 'Built for speed under pressure',
				body: 'The full loop (capture, answer, read, dismiss) takes four keystrokes. Practised users clear a multiple-choice question in under five seconds without ever leaving the question field.',
			},
			{
				icon: MicOff,
				title: 'Silent by design',
				body: 'No sounds, no notifications, no system tray balloons, no focus flashes in the taskbar. The only feedback is on the overlay itself, which only you can see.',
			},
		],
	},
	{
		slug: 'capture',
		number: '02',
		icon: ScanLine,
		name: 'Question capture',
		tagline: 'Point at the question. AssessDesk reads it exactly as it appears.',
		summary:
			'A single hotkey captures what is on your screen and converts it into text the model can reason about. You can drag a region around one question, grab the full screen, or let AssessDesk detect question boundaries automatically. Capture works on anything rendered on screen, locked PDFs, images, canvas-rendered exams, disabled-copy pages and lockdown browsers included, because it reads pixels, not the page.',
		details: [
			{
				icon: SquareDashedMousePointer,
				title: 'Region, screen or auto-detect',
				body: 'Drag a box around a single question, capture the entire screen, or use auto-detect to let AssessDesk find the question block, its stem and its options without you framing anything.',
			},
			{
				icon: FileSearch,
				title: 'High-accuracy OCR',
				body: 'Text is extracted with layout awareness, so multi-column pages, numbered lists, indented sub-questions and option labels (A/B/C/D) survive the read instead of collapsing into one paragraph.',
			},
			{
				icon: Calculator,
				title: 'Formulas, notation and symbols',
				body: 'Mathematical, chemical, statistical and engineering notation is recognised and reconstructed, fractions, exponents, integrals, matrices, Greek characters, subscripts and units all come through intact.',
			},
			{
				icon: Table2,
				title: 'Tables, charts and diagrams',
				body: 'Data tables are read cell by cell with their headers preserved. Charts, circuit diagrams, anatomical figures, code screenshots and scanned handwriting are passed through visually so the model can interpret them, not just transcribe them.',
			},
			{
				icon: Camera,
				title: 'Invisible to the capture itself',
				body: 'The selection rectangle you drag is drawn on the same protected layer as the overlay. A proctor watching your shared screen never sees the box being drawn.',
			},
			{
				icon: Layers,
				title: 'Multi-part and carried context',
				body: 'Capture a case study, passage or dataset once and pin it. Every following question is answered with that context attached, so long-form sections stay coherent instead of restarting each time.',
			},
		],
	},
	{
		slug: 'answers',
		number: '03',
		icon: Brain,
		name: 'Answer generation',
		tagline: 'A real answer, in the format the question is actually asking for.',
		summary:
			'Captured text is routed to frontier reasoning models and returned in the shape the question demands: a letter for multiple choice, worked steps for calculation, runnable code for programming, a structured argument for essays, and a speakable answer for live interviews. AssessDesk detects the subject and question type on its own, so you are not configuring anything mid-exam.',
		details: [
			{
				icon: Cpu,
				title: 'Model routing by question type',
				body: 'Quick recall questions go to a fast model for a sub-second reply; multi-step reasoning, proofs and case analysis are escalated to a deeper reasoning model automatically. You get the right trade-off between speed and rigour without choosing.',
			},
			{
				icon: ListChecks,
				title: 'Answer-first formatting',
				body: 'Multiple choice returns the letter and the option text on the first line, then the reasoning beneath it. You can act immediately and read the justification only if you want it.',
			},
			{
				icon: Calculator,
				title: 'Shown working for quantitative work',
				body: 'Numerical questions return the final value plus each intermediate step, the formula used and the units, so you can reproduce the working in your own answer box rather than copying a bare number.',
			},
			{
				icon: Code2,
				title: 'Code and technical output',
				body: 'Programming questions return complete, syntax-highlighted, runnable solutions in the language detected from the prompt, with complexity notes and edge cases called out.',
			},
			{
				icon: Sparkles,
				title: 'Answer modes',
				body: 'Cycle between Direct (answer only), Explain (answer plus reasoning), Steps (numbered working), Essay (structured argument with points to expand) and Speak (short conversational phrasing for live interviews).',
			},
			{
				icon: RefreshCcw,
				title: 'Regenerate and follow up',
				body: 'If an answer is ambiguous, regenerate for a fresh approach or ask a follow-up against the same capture (“why not C?”, “shorter”, “in SI units”) without recapturing the question.',
			},
			{
				icon: Activity,
				title: 'Confidence signalling',
				body: 'Each answer carries a confidence indicator. Where a question is genuinely contested or the capture was partial, AssessDesk says so instead of guessing with false certainty.',
			},
			{
				icon: Languages,
				title: 'Language matching',
				body: 'Answers come back in the language of the question. Captures in Spanish, French, German, Arabic, Portuguese, Mandarin and dozens more are answered natively, not translated through English.',
			},
		],
	},
	{
		slug: 'reading',
		number: '04',
		icon: ScrollText,
		name: 'Scrolling and reading',
		tagline: 'Long answers, read comfortably, without a scrollbar or a mouse.',
		summary:
			'An essay plan or a full derivation will not fit in a discreet overlay, so AssessDesk gives you keyboard scrolling that never touches the page behind it. Your exam does not scroll, your position in the question is never lost, and no scroll event reaches the browser underneath.',
		details: [
			{
				icon: ScrollText,
				title: 'Line, page and jump scrolling',
				body: 'Step line by line for careful reading, page at a time to skim, or jump straight to the top or bottom of a long answer.',
			},
			{
				icon: ShieldCheck,
				title: 'Scroll isolation',
				body: 'Scroll input is consumed by the overlay and never forwarded to the window beneath. The exam page stays exactly where you left it, a common giveaway that other tools cannot avoid.',
			},
			{
				icon: History,
				title: 'Session history',
				body: 'Step backwards and forwards through every answer from the current session. Revisit question 4 while you are on question 17 without recapturing it.',
			},
			{
				icon: Type,
				title: 'Readability controls',
				body: 'Adjust text size and line spacing on the fly, or switch to condensed rendering that strips the answer to its essentials when screen space is tight.',
			},
			{
				icon: PanelTopClose,
				title: 'Micro mode',
				body: 'Collapse the whole overlay into a single discreet line, enough for a letter, a number or a short phrase, and expand it again with one keystroke.',
			},
		],
	},
	{
		slug: 'appearance',
		number: '05',
		icon: Gauge,
		name: 'Brightness, size and position',
		tagline: 'Tune the overlay until only you can comfortably read it.',
		summary:
			'The overlay is yours to calibrate. Brightness steps from barely-there to fully opaque so it can sit over white exam pages or dark terminals without straining your eyes or catching anyone else’s. Size, position and theme are adjusted live with hotkeys, never through a settings window you would have to open mid-exam.',
		details: [
			{
				icon: Gauge,
				title: 'Stepped brightness control',
				body: 'Raise or lower overlay opacity in fine increments, from a faint 10% ghost through to 100% solid. Useful when a room is bright, when someone is beside you, or when you simply want maximum legibility.',
			},
			{
				icon: Maximize2,
				title: 'Resize on the fly',
				body: 'Grow the panel for a long derivation, shrink it to a sliver for a single letter. Dimensions persist per monitor so your layout is the same every time you sit down.',
			},
			{
				icon: Move,
				title: 'Keyboard repositioning',
				body: 'Nudge the overlay anywhere on screen, or snap it to an edge or corner, using the keyboard alone. Park it over a blank margin and your eyeline barely changes as you read.',
			},
			{
				icon: Monitor,
				title: 'Multi-monitor aware',
				body: 'Move the overlay between displays instantly, with correct scaling on mixed-DPI and Retina setups. Capture and overlay can live on different screens entirely.',
			},
			{
				icon: MousePointerClick,
				title: 'Click-through',
				body: 'With click-through enabled the overlay is visually present but completely transparent to the mouse. Clicks, drags and text selection pass straight through to the exam behind it.',
			},
			{
				icon: Eye,
				title: 'Light and dark rendering',
				body: 'Switch the overlay between light and dark so it reads cleanly whether it sits on a white question paper or a dark IDE, without fighting the background.',
			},
		],
	},
	{
		slug: 'invisibility',
		number: '06',
		icon: EyeOff,
		name: 'Hide toggle and invisibility',
		tagline: 'Gone in one keystroke. Absent from every recording by default.',
		summary:
			'The overlay is excluded from screen capture at the operating-system compositor level, so screen sharing, recording and screenshots receive the desktop without it, and the hide toggle removes it from your own screen instantly. AssessDesk also keeps itself out of the places software looks: no taskbar entry, no dock icon, no alt-tab presence, no window title and no focus stealing.',
		details: [
			{
				icon: EyeOff,
				title: 'Instant hide toggle',
				body: 'One keystroke hides and restores the overlay with no fade, no animation and no residual frame. Your answer and scroll position are preserved exactly as you left them.',
			},
			{
				icon: MonitorOff,
				title: 'Excluded from screen capture',
				body: 'The overlay window is marked capture-excluded by the OS compositor. Zoom, Teams, Meet, OBS, the native screenshot tools and proctoring recorders all receive the desktop beneath it.',
			},
			{
				icon: WifiOff,
				title: 'No visible process surface',
				body: 'No taskbar button, no dock icon, no alt-tab card, no window title, no tray notification. There is no window for a proctor or a screen-share preview to stumble across.',
			},
			{
				icon: ArrowLeftRight,
				title: 'Never steals focus',
				body: 'The overlay never takes keyboard focus from your exam. Timers keep running, autosave keeps firing, and focus-loss detection in lockdown browsers is never triggered.',
			},
			{
				icon: Trash2,
				title: 'Instant clear',
				body: 'Ctrl + Shift + C clears the panel and the current answer in one keystroke, for the moment someone walks in or a proctor asks for a room scan.',
			},
			{
				icon: Lock,
				title: 'Nothing left behind',
				body: 'Captures and answers are held in memory for the session and discarded when it ends. Nothing is written to disk, no screenshots are saved, and transport is encrypted end to end.',
			},
		],
	},
];

/* ------------------------------------------------------------------ */
/* Complete hotkey reference                                           */
/* ------------------------------------------------------------------ */

export interface HotkeyGroup {
	group: string;
	icon: LucideIcon;
	description: string;
	keys: { combo: string[]; action: string; note: string }[];
}

export const HOTKEY_GROUPS: HotkeyGroup[] = [
	{
		group: 'Capture',
		icon: ScanLine,
		description: 'Get the question into AssessDesk without touching another window.',
		keys: [
			{
				combo: ['Ctrl', 'Alt', 'Q'],
				action: 'Snip a question',
				note: 'Press it when you are ready, then drag over the question with your mouse. The cursor does not change, so nothing looks different on screen.',
			},
		],
	},
	{
		group: 'Visibility',
		icon: EyeOff,
		description: 'Control what is on your screen and remove it instantly when needed.',
		keys: [
			{ combo: ['Ctrl', 'Shift', 'H'], action: 'Hide or show the panel', note: 'Toggles the panel off and back on. Your answer stays where it was.' },
			{ combo: ['Ctrl', 'Shift', 'C'], action: 'Clear the panel', note: 'Removes the current answer so the panel is empty and ready for the next snip.' },
			{ combo: ['Ctrl', 'Shift', '['], action: 'Lower opacity', note: 'Steps the panel down through 100%, 80%, 60%, 35% and 15%.' },
			{ combo: ['Ctrl', 'Shift', ']'], action: 'Raise opacity', note: 'Steps the panel back up to fully solid for easy reading.' },
		],
	},
	{
		group: 'Reading and scrolling',
		icon: ScrollText,
		description: 'Move through long answers without the page behind you moving at all.',
		keys: [
			{ combo: ['Ctrl', 'Shift', 'Page Up'], action: 'Scroll the answer up', note: 'Go back through a long answer or working.' },
			{ combo: ['Ctrl', 'Shift', 'Page Down'], action: 'Scroll the answer down', note: 'Read on to the end of a long answer.' },
		],
	},
	{
		group: 'Position',
		icon: Gauge,
		description: 'Nudge the panel to a spot on screen where you can read it without effort.',
		keys: [
			{ combo: ['Ctrl', 'Shift', '←'], action: 'Nudge panel left', note: 'Moves the panel a step to the left.' },
			{ combo: ['Ctrl', 'Shift', '→'], action: 'Nudge panel right', note: 'Moves the panel a step to the right.' },
			{ combo: ['Ctrl', 'Shift', '↑'], action: 'Nudge panel up', note: 'Moves the panel a step up.' },
			{ combo: ['Ctrl', 'Shift', '↓'], action: 'Nudge panel down', note: 'Moves the panel a step down.' },
		],
	},
];

/* ------------------------------------------------------------------ */
/* The four-step loop                                                  */
/* ------------------------------------------------------------------ */

export const LOOP_STEPS = [
	{
		number: '01',
		icon: SquareDashedMousePointer,
		title: 'Select the question',
		body: 'Press Ctrl + Alt + Q, then drag over the question with your mouse. The cursor does not change, so nothing on screen gives it away.',
		meta: 'One keystroke',
	},
	{
		number: '02',
		icon: ScanLine,
		title: 'OCR reads it',
		body: 'Layout-aware OCR reconstructs the stem, the options, the notation and any table or figure exactly as written, even in locked PDFs, canvas-rendered exams and lockdown browsers.',
		meta: 'Under a second',
	},
	{
		number: '03',
		icon: Brain,
		title: 'AI answers it',
		body: 'The question is routed to the right reasoning model for its type and difficulty, and comes back answer-first: the letter, the value or the solution on line one, the reasoning underneath.',
		meta: '2–6 seconds',
	},
	{
		number: '04',
		icon: EyeOff,
		title: 'You read it invisibly',
		body: 'The answer appears on an overlay excluded from screen capture. Scroll it, dim it, move it or hide it with the keyboard, the exam behind it never moves and never loses focus.',
		meta: 'Invisible to capture',
	},
];

/* ------------------------------------------------------------------ */
/* Compatibility                                                       */
/* ------------------------------------------------------------------ */

export const COMPATIBILITY = [
	{ title: 'Operating systems', items: ['Windows 10 and 11', 'macOS 12 Monterey and later', 'Intel and Apple Silicon', 'Linux (beta)'] },
	{ title: 'Exam delivery', items: ['Browser-based exam portals', 'Lockdown and secure browsers', 'Locked and copy-disabled PDFs', 'Canvas-rendered question engines'] },
	{ title: 'Live sessions', items: ['Zoom, Teams and Google Meet', 'Remote-desktop interviews', 'Shared-screen technical rounds', 'Recorded video assessments'] },
	{ title: 'Displays', items: ['Single and multi-monitor setups', 'Mixed-DPI and Retina scaling', 'Ultrawide and vertical displays', 'Laptop panels at any resolution'] },
];

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export interface Plan {
	slug: string;
	name: string;
	price: string;
	period: string;
	credits: number;
	validity: string;
	tagline: string;
	features: string[];
	cta: string;
	featured?: boolean;
}

export const PLANS: Plan[] = [
	{
		slug: 'session',
		name: 'Day Pass',
		price: '$20',
		period: 'one-off',
		credits: 20,
		validity: '24 hours',
		tagline: 'One exam, one interview, one deadline. Buy it the day you need it.',
		features: [
			'20 credits, so 20 answered questions',
			'Credits valid for 24 hours from purchase',
			'Every capture mode and the full hotkey set',
			'Capture-excluded overlay with hide and clear',
			'Opacity control and panel nudging',
		],
		cta: 'Buy the Day Pass',
	},
	{
		slug: 'pro',
		name: 'Monthly',
		price: '$49',
		period: 'one-off',
		credits: 60,
		validity: '30 days',
		tagline: 'For a month of quizzes, tests and assessments on the calendar.',
		features: [
			'60 credits, so 60 answered questions',
			'Credits valid for 30 days from purchase',
			'Every capture mode and the full hotkey set',
			'Capture-excluded overlay with hide and clear',
			'Opacity control and panel nudging',
		],
		cta: 'Buy Monthly',
		featured: true,
	},
	{
		slug: 'term',
		name: 'Quarterly',
		price: '$119',
		period: 'one-off',
		credits: 150,
		validity: '90 days',
		tagline: 'For a full term of assessments, kept ready for three months.',
		features: [
			'150 credits, so 150 answered questions',
			'Credits valid for 90 days from purchase',
			'Every capture mode and the full hotkey set',
			'Capture-excluded overlay with hide and clear',
			'Opacity control and panel nudging',
		],
		cta: 'Buy Quarterly',
	},
];

export const PLAN_COMPARISON = [
	{ feature: 'Price', session: '$20', pro: '$49', term: '$119' },
	{ feature: 'Credits (1 credit = 1 answered question)', session: '20', pro: '60', term: '150' },
	{ feature: 'Credits valid for', session: '24 hours', pro: '30 days', term: '90 days' },
	{ feature: 'Region capture with layout-aware OCR', session: true, pro: true, term: true },
	{ feature: 'Questions counted per capture', session: true, pro: true, term: true },
	{ feature: 'Capture-excluded overlay', session: true, pro: true, term: true },
	{ feature: 'Full hotkey set', session: true, pro: true, term: true },
	{ feature: 'Hide, clear, opacity and nudge', session: true, pro: true, term: true },
	{ feature: 'Buy another package any time', session: true, pro: true, term: true },
	{ feature: '24/7 human support', session: true, pro: true, term: true },
];

/* ------------------------------------------------------------------ */
/* Done-for-you service                                                */
/* ------------------------------------------------------------------ */

export const DFY_TIERS = [
	{
		name: 'Single exam or test',
		price: 'From $120',
		period: 'per sitting',
		body: 'One timed exam, test or quiz sat end to end by a subject-matched expert. Priced on subject, level, duration and proctoring type after we see the details.',
		features: ['Subject-matched specialist', 'Agreed target grade band', 'Live progress updates', 'Payment released on your approval'],
	},
	{
		name: 'Full course or class',
		price: 'Custom quote',
		period: 'per course',
		body: 'Every assessment in a module handled by one consistent expert, quizzes, midterms, finals, discussions and submissions, so the work reads as one voice throughout.',
		features: ['One expert across the whole course', 'Deadline calendar managed for you', 'Consistent voice and standard', 'Staged payments per milestone'],
		featured: true,
	},
	{
		name: 'Certification or licensing',
		price: 'Custom quote',
		period: 'per attempt',
		body: 'Professional certification, licensing and recertification exams covered by an expert who holds credentials in the same field.',
		features: ['Credentialled specialist', 'Proctoring environment reviewed first', 'Confidentiality agreement available', 'Retake cover where permitted'],
	},
];

export const DFY_PROCESS = [
	{
		number: '01',
		title: 'Tell us what you need covered',
		body: 'Send the subject, level, platform, date, duration and how it is proctored. The more precise you are, the more precise the quote and the expert match.',
	},
	{
		number: '02',
		title: 'We confirm feasibility and quote',
		body: 'A coordinator reviews the assessment and the proctoring setup and comes back within a few hours with a fixed price, a named expert profile and an honest answer on whether we can cover it.',
	},
	{
		number: '03',
		title: 'Funds are held, not paid',
		body: 'You fund the order and the money sits in escrow. The expert can see the work is backed; you keep the leverage until the result is in.',
	},
	{
		number: '04',
		title: 'The expert sits the assessment',
		body: 'Your matched expert handles the exam on the agreed date, with a coordinator monitoring the session and updating you as it progresses.',
	},
	{
		number: '05',
		title: 'You review and release',
		body: 'You see the outcome before you approve. If the agreed standard was not met, the mediation and remedy terms in your order apply before any payment is released.',
	},
];

/* ------------------------------------------------------------------ */
/* Audiences                                                           */
/* ------------------------------------------------------------------ */

export const PROFESSIONAL_USE_CASES = [
	{
		icon: BookOpenCheck,
		title: 'Certification and licensing exams',
		body: 'Cloud, security, networking, finance, accounting, healthcare, project management and trade licensing exams, answered with the depth the question actually requires, including the scenario-based items that carry the most marks.',
	},
	{
		icon: Code2,
		title: 'Technical screens and coding rounds',
		body: 'Capture a problem statement from a shared-screen round and get a complete, runnable solution with complexity analysis and edge cases, while remaining invisible to the interviewer’s view of your screen.',
	},
	{
		icon: Sparkles,
		title: 'Live interviews and competency rounds',
		body: 'Speak mode returns short, natural phrasing you can say out loud rather than a paragraph you would obviously be reading. Ideal for behavioural, situational and domain-knowledge questions.',
	},
	{
		icon: Activity,
		title: 'Compliance, CPD and internal assessments',
		body: 'Mandatory annual training, CPD modules and internal knowledge checks cleared quickly so your time goes to the work that actually matters.',
	},
	{
		icon: Calculator,
		title: 'Quantitative and analytical tests',
		body: 'Psychometric, numerical reasoning, actuarial and data-analysis assessments returned with the working shown, so you can reproduce the method rather than guess at a number.',
	},
	{
		icon: Languages,
		title: 'Assessments in a second language',
		body: 'If you are being assessed in a language you did not train in, AssessDesk answers natively in the language of the question so the content is never lost to the translation.',
	},
];

export const STUDENT_USE_CASES = [
	{
		icon: Monitor,
		title: 'Online and proctored exams',
		body: 'Browser-based finals, midterms and remotely proctored sittings. The overlay is excluded from capture and never steals focus, so timers keep running and the exam never registers a window change.',
	},
	{
		icon: ListChecks,
		title: 'Quizzes and timed tests',
		body: 'Short, fast assessments where every second counts. Answer-first formatting puts the letter on line one so you can act in a couple of seconds and move on.',
	},
	{
		icon: Calculator,
		title: 'Maths, engineering and the sciences',
		body: 'Notation-aware capture handles integrals, matrices, chemical equations, circuit diagrams and statistical tables, and answers come back with every intermediate step and the correct units.',
	},
	{
		icon: Code2,
		title: 'Programming and CS assessments',
		body: 'Capture a problem from any IDE, judge platform or exam portal and receive complete, runnable code in the right language, with complexity notes you can discuss if asked.',
	},
	{
		icon: ScrollText,
		title: 'Essays and long-form answers',
		body: 'Essay mode returns a structured argument, thesis, supporting points, evidence and counterpoints, that you scroll through with the keyboard and expand in your own words.',
	},
	{
		icon: Zap,
		title: 'Catching up when you are behind',
		body: 'When a semester has got away from you, Explain and Steps mode mean you are reading reasoning rather than just a result, so the assessment you clear today is one you understand tomorrow.',
	},
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export interface Faq {
	q: string;
	a: string;
}

export const GENERAL_FAQS: Faq[] = [
	{
		q: 'Can a proctor or a recording see the overlay?',
		a: 'No. The overlay window is marked capture-excluded at the operating-system compositor level, which means screen-sharing, screen-recording and screenshot APIs receive the desktop beneath it rather than the overlay itself. Zoom, Teams, Meet, OBS, the native screenshot tools and proctoring recorders all capture your exam without AssessDesk in the frame. It is visible to your eyes on your physical display only.',
	},
	{
		q: 'Does AssessDesk show up in the taskbar, dock or alt-tab?',
		a: 'No. There is no taskbar button, no dock icon, no alt-tab card, no window title and no system-tray notification. The overlay also never takes keyboard focus from your exam, so timers keep running, autosave keeps firing and focus-loss detection in lockdown browsers is never triggered.',
	},
	{
		q: 'Does it work inside lockdown browsers and locked PDFs?',
		a: 'Yes. AssessDesk reads pixels rather than page content, so anything rendered on your screen can be captured, including lockdown and secure browsers, copy-disabled pages, locked PDFs, canvas-rendered question engines and scanned images.',
	},
	{
		q: 'How fast is an answer?',
		a: 'OCR completes in under a second and most answers return in two to six seconds. Quick recall questions are routed to a fast model and come back almost immediately; multi-step reasoning, proofs and case analysis are escalated to a deeper model, which takes a little longer but is substantially more reliable.',
	},
	{
		q: 'Do I need to use the mouse at all?',
		a: 'Only to drag over the question after pressing Ctrl + Alt + Q, and the cursor does not change while you do. Everything else, including scrolling, opacity, nudging the panel, hiding and clearing, is global hotkeys that work while your exam is the focused window.',
	},
	{
		q: 'What if someone walks in?',
		a: 'The hide toggle removes the overlay instantly with no fade and no residual frame, preserving your answer and scroll position for when you bring it back. If you want the answer gone rather than hidden, Ctrl + Shift + C clears the panel in one keystroke.',
	},
	{
		q: 'Is my data stored?',
		a: 'Captures and answers are held in memory for the duration of your session and discarded when it ends. Nothing is written to disk, no screenshots are saved, and everything in transit is encrypted end to end.',
	},
	{
		q: 'Which platforms are supported?',
		a: 'Windows 10 and 11, and macOS 12 Monterey and later on both Intel and Apple Silicon, with a Linux build in beta. Multi-monitor, ultrawide, vertical and mixed-DPI setups are all supported, and the overlay scales correctly on Retina displays.',
	},
	{
		q: 'What happens if an answer is wrong or ambiguous?',
		a: 'Every answer carries a confidence indicator, and where a question is genuinely contested or the capture was partial AssessDesk says so rather than asserting false certainty. You can regenerate for a different approach, escalate to the deep-reasoning model, or ask a follow-up against the same capture without recapturing the question.',
	},
	{
		q: 'How is this different from just using a chatbot on my phone?',
		a: 'A phone means looking away, typing the question out and losing time on every item, and it is the single most recognisable behaviour a proctor looks for. AssessDesk keeps your eyes on your screen, reads the question exactly as it is rendered including notation and figures, returns the answer in the format the question asks for, and lives on a layer that recordings cannot see.',
	},
];

export const PRICING_FAQS: Faq[] = [
	{
		q: 'What is a credit?',
		a: 'One credit pays for one answered question. When you snip, AssessDesk counts the questions inside the capture, so a capture holding three questions uses three credits. You see your remaining balance on the panel.',
	},
	{
		q: 'What happens when my credits expire?',
		a: 'Credits last for the window of the package you bought: 24 hours, 30 days or 90 days from purchase. Any credits left at the end of that window expire. You can buy a new package at any time, before or after expiry.',
	},
	{
		q: 'Why do longer packages give fewer credits per dollar?',
		a: 'We keep your credits reserved and your account ready for the whole window, which costs more to maintain over 90 days than over 24 hours. Shorter packages are the best value per question; longer ones give you more time to use them.',
	},
	{
		q: 'Is anything unlimited?',
		a: 'No. Every package is a fixed number of credits for a fixed time. That keeps pricing honest and means you only pay for the questions you actually need answered.',
	},
	{
		q: 'Can I try it before an exam that matters?',
		a: 'Yes, and you should. Use a Day Pass on practice questions to set your opacity and panel position and get used to the hotkeys before anything is at stake.',
	},
	{ q: 'Which payment methods do you take?', a: 'All major credit and debit cards, and common digital wallets. Payment is handled by our processor and we never see or store your card details.' },
	{
		q: 'Is there a refund policy?',
		a: 'If AssessDesk cannot run on your setup and our support team cannot resolve it, we refund in full. Contact support within 48 hours of purchase and we will either fix it or return your money.',
	},
	{
		q: 'How is the done-for-you service priced?',
		a: 'It is quoted per assessment rather than listed, because the price depends on the subject, level, duration, platform and proctoring type. Send the details and a coordinator comes back with a fixed price, a named expert profile and an honest answer on whether we can cover it.',
	},
];

export const DFY_FAQS: Faq[] = [
	{
		q: 'How is this different from using the AssessDesk tool myself?',
		a: 'With the tool, you sit the assessment and AssessDesk supports you in real time. With the done-for-you service, a vetted subject expert handles the assessment end to end on the agreed date while a coordinator keeps you updated. One is a tool you drive; the other is a managed service you hand over.',
	},
	{
		q: 'How quickly can you cover something?',
		a: 'Most requests are quoted within a few hours and matched to an expert within a day. Urgent same-day cover is often possible depending on subject and proctoring type, send the details and we will tell you honestly either way.',
	},
	{
		q: 'Who are the experts?',
		a: 'They are ScholarDesk’s vetted specialists, identity-verified and credential-checked in the exact subject and level before they are ever assigned work, with a public performance record covering quality, punctuality and revision rate that determines who gets matched next.',
	},
	{
		q: 'When do I pay?',
		a: 'You fund the order up front and the money is held in escrow rather than paid out. The expert can see the work is backed, and the funds are only released once you have reviewed the outcome and approved it.',
	},
	{
		q: 'What if the agreed standard is not met?',
		a: 'Every order carries an agreed standard in writing before it starts. If it is not met, the mediation and remedy terms in your order apply before any payment is released, and a ScholarDesk coordinator handles the process rather than leaving you to argue it out.',
	},
	{
		q: 'Is my information kept confidential?',
		a: 'Yes. Details are shared only with the coordinator and the matched expert, communication stays inside the order thread, and a confidentiality agreement is available on request for professional and licensing work.',
	},
];

/* ------------------------------------------------------------------ */
/* Trust signals                                                       */
/* ------------------------------------------------------------------ */

export const TRUST_POINTS = [
	{ icon: MonitorOff, label: 'Excluded from screen capture at the OS level' },
	{ icon: Lock, label: 'End-to-end encrypted, nothing written to disk' },
	{ icon: ShieldCheck, label: 'No taskbar, dock, alt-tab or focus presence' },
	{ icon: Activity, label: '24/7 human support from the ScholarDesk team' },
];
