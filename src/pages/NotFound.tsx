import { ButtonLink } from '@/components/site/SiteButton';

export default function NotFound() {
  return (
    <>
			
			<section className="bg-hero">
				<div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-5 px-4 py-24 text-center sm:px-6">
					<h1 className="text-4xl font-semibold lg:text-5xl">That page does not exist</h1>
					<p className="text-lg leading-relaxed text-muted-foreground">
						The link may be out of date. Everything about the tool lives on the demo page, and pricing is one click away.
					</p>
					<div className="mt-2 flex flex-col gap-3 sm:flex-row">
						<ButtonLink size="lg" to="/">
							Back to home
						</ButtonLink>
						<ButtonLink size="lg" variant="outline" to="/demo">
							See the demo
						</ButtonLink>
					</div>
				</div>
			</section>
		</>);

}
