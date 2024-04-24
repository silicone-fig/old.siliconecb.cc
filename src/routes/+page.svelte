<script>
// @ts-nocheck
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>siliconeCB | home</title>
</svelte:head>
<main>
	<h1>hello!👋 <br /> i'm siliconeCB_, a frontend developer based out of the US!</h1>
	<div class="icons">
		<a
			href="mailto:me@siliconecb.cc"
			aria-label="Email"
			on:click|preventDefault={() => {
				window.location.href = 'mailto:me@siliconecb.cc';
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</a>

		<a
			href="https://github.com/silicone-fig"
			aria-label="GitHub"
			on:click|preventDefault={() => {
				window.open('https://siliconecb.cc/github');
			}}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://siliconecb.cc/wasteof"
			aria-label="wasteof.money"
			on:click|preventDefault={() => {
				window.open('https://siliconecb.cc/wasteof');
			}}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<img src="https://u.cubeupload.com/siliconefig/womicon.png" alt="wom" style="width: 36px; height: 36px; border-radius: 15%;">
		  	</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ffffff;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
