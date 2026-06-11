import { routes } from "#/shared/routes/routes";

export function ContactButton() {
	return (
		<div>
			<a
				className="bg-brand-primary outline-none transition-colors duration-300 text-background rounded-lg px-6 py-4 hover:bg-brand-secondary"
				href={routes.contact}
			>
				Contact Us
			</a>
		</div>
	);
}
