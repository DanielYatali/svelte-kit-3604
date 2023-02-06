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

	<section id="form" class="absolute center">
		<div class="flex items-center justify-center ">
			<a
				href="#"
				class="flex items-center mb-6 text-7xl font-extrabold text-gray-900 dark:text-white"
			>
			Cari<span class="text-orange-400">g</span>ro
			</a>
			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"
			>
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1
						class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
					>
						Sign Up
					</h1>
					<form class="space-y-4 md:space-y-6" action="#">
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Your email</label
							>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required=""
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Password</label
							>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div>
							<label
								for="confirm-password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Confirm password</label
							>
							<input
								type="confirm-password"
								name="confirm-password"
								id="confirm-password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									id="terms"
									aria-describedby="terms"
									type="checkbox"
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
									required=""
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="terms" class="font-light text-gray-500 dark:text-gray-300"
									>I accept the <a
										class="font-medium text-primary-600 hover:underline dark:text-primary-500"
										href="#">Terms and Conditions</a
									></label
								>
							</div>
						</div>
						<button
							type="submit"
							class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>Create an account</button
						>
						<p class="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account? <a
								href="#"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>Login here</a
							>
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="relative flex justify-center">
	<div
		id="body"
		class=" text-center dark:text-white text-primary absolute top-1 sm:text-4xl lg:text-7xl">
				
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
			opacity: 0.8;
		}
	}
	#form{
		width: 80vw;
	}
</style>
