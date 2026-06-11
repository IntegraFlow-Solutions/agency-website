import { Menu } from "lucide-react";

import { NAVLINKS } from "./Navlinks";
import { ContactButton } from "#/components/ContactButton";

export function Header() {
	return (
		<header>
			<nav className=" flex-center fixed w-full top-0 justify-between py-8 sm:px-10 px-5 shadow-sm">
				<div className="bg-brand-surface border border-brand-primary p-2 ">
					LOGO
				</div>
				<ul className="hidden sm:flex-center gap-8 font-medium">
					{NAVLINKS.map((navlink) => (
						<li key={navlink.title}>
							<a href={navlink.path}>{navlink.title}</a>
						</li>
					))}
				</ul>
				<ContactButton />
				<button className="sm:hidden cursor-pointer" type="button">
					<Menu size={30} />
				</button>
			</nav>
		</header>
	);
}
