import { routes } from "./../../shared/routes/routes";

import type { Navlink } from "#/types/nav";

export const NAVLINKS: Navlink[] = [
	{ title: "Our Services", path: routes.services },
	{ title: "About", path: routes.about },
	{ title: "Contact", path: routes.contact },
];
