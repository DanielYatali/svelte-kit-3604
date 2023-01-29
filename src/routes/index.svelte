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
		Progressbar
	} from 'flowbite-svelte';
	import ProductCard from '../components/ProductCard.svelte';

	let placement='bottom';
	const images = [
		{
			id: 0,
			name: 'Cosmic timetraveler',
			imgurl: 'bg.webp',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			id: 1,
			name: 'Cosmic timetraveler',
			imgurl: 'https://picsum.photos/2000/800',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		}
	];
	const nutritions = [
		{
			id: 0,
			name: 'Calories',
			value: '43',
			unit: 'kcal',
			color: 'red'
		},
		{
			id: 1,
			name: 'Sugar',
			value: '20',
			unit: 'g',
			color: 'yellow'
		},
		{
			id: 3,
			name: 'Carbs',
			value: '20',
			unit: 'g',
			color: 'green'
		}
	];
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="carigro-logo.webp" class="mr-3 h-6 sm:h-9 p-0" alt="Carigo Logo" />
		<!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Flowbite
		</span> -->
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
		<NavLi href="/account">
			<Avatar data-name="Account Settings" rounded border size="xs" />
			<Tooltip triggeredBy="[data-name]" {placement} on:show={e => name = e.target.dataset.name}>{name}</Tooltip>
			
		</NavLi>
	</NavUl>
</Navbar>

<div class="relative">
	<img src="bg.webp" alt="" />
	<div
		class=" text-center dark:text-white text-primary absolute top-1/2 left-1/2 text-2xl font-semibol -translate-x-1/2 -translate-y-1/2 sm:text-4xl lg:text-7xl"
	>
		<div>
			<h1 class="font-extrabold">
				Welcome to Cari<span class="text-orange-400">g</span>ro
			</h1>
			<p>some more text</p>
			<div class="flex justify-center">
				<button class="text-white text-base lg:text-3xl bg-primary-light p-2  m-2 rounded-xl"
					>Join Today</button
				>
			</div>
		</div>
	</div>
</div>
<!-- <div class="grid grid-cols-2 gap-5 p-5">
	<div class="col-span-1">
		<Card padding="none" size="xl" class="grid md:grid-cols-2">
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
						Very easy this was to integrate
					</h3>
					<p class="my-4 font-light">
						If you care for your time, I hands down would go with this."
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
						alt="Karen profile"
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Bonnie Green</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">
							Developer at Open AI
						</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
						Solid foundation for any project
					</h3>
					<p class="my-4 font-light">
						Designing with Figma components that can be easily translated to the utility classes of
						Tailwind CSS is a huge timesaver!"
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
						alt="Robert profile"
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Roberta Casas</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">
							Lead designer at Dropbox
						</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
						Mindblowing workflow
					</h3>
					<p class="my-4 font-light">
						Aesthetically, the well designed components are beautiful and will undoubtedly level up
						your next application."
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
						alt="Jese profile"
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Jese Leos</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">
							Software Engineer at Facebook
						</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">
						Efficient Collaborating
					</h3>
					<p class="my-4 font-light">
						You have many examples that can be used to create a fast prototype for your team."
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
						alt="joseph profile"
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Joseph McFall</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
					</div>
				</figcaption>
			</figure>
		</Card>
	</div>
	<div class="col-span-1">
		<Timeline order="vertical">
			<TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
				<svelte:fragment slot="icon">
					<span
						class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-600 dark:text-blue-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
				</svelte:fragment>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
					and pre-order E-commerce & Marketing pages.
				</p>
			</TimelineItem>
			<TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
				<svelte:fragment slot="icon">
					<span
						class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-600 dark:text-blue-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</TimelineItem>
			<TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
				<svelte:fragment slot="icon">
					<span
						class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
					>
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-600 dark:text-blue-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</TimelineItem>
		</Timeline>
	</div>
</div> -->
<h1 class="text-primary text-center text-3xl m-2 font-semibold">Top Products</h1>
<div class="flex items-center justify-center m-5">
	<div class="grid sm:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4 ">
		<ProductCard rating="4" image="orange.webp" {nutritions} />
		<ProductCard rating="4" image="orange.webp" {nutritions} />
		<ProductCard rating="4" image="orange.webp" {nutritions} />
		<ProductCard rating="4" image="orange.webp" {nutritions} />
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
