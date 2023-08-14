export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Home - Naman Agrawal",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
			download: false
		},
		{
			label: "Projects",
			href: "/projects",
			download: false
		},
		
	],
	navMenuItems: [
		{
			label: "Home",
               href: "/",
			download: false,
		},
		{
			label: "Projects",
			href: "/projects",
			download: false,
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
