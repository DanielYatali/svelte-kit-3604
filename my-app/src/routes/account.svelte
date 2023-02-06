<script lang="ts">
	import {
		Avatar,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider,
		CarouselTransition,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		Timeline,
		Tooltip,
		TimelineItem,
		Card,
		Button,
		Rating,
		Badge,
		Progressbar,
		ToolbarButton,
		Modal,
		Label,
		Input,
		Checkbox,
        Toggle
	} from 'flowbite-svelte';
    let hCard = false;
</script>

<div class="relative flex justify-center">
	<img class="image" src="bg.webp" alt="" />

	<div id="body" class=" text-center dark:text-white text-primary absolute top-1 sm:text-4xl lg:text-7xl">
        <h1>Profile</h1>

	</div>
</div>

<Footer>
	<FooterCopyright href="/" by="Carigro™" year={2023} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/">About</FooterLink>
		<FooterLink href="/">Privacy Policy</FooterLink>
		<FooterLink href="/">Licensing</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>

<style>
	.image {
		animation: fadeInAnimation ease 3s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	@keyframes fadeInAnimation {
		0% {
			opacity: 1;
		}
		100% {
			filter: blur(8px);
			-webkit-filter: blur(8px);
			opacity: 0.05;
		}
	}
</style>
