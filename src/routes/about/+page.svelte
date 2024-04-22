<svelte:head>
	<title>siliconeCB | about me</title>
</svelte:head>

<div class="container">
	<main>
		<h1>about me</h1>
		<p>
			Heyo! I'm siliconeCB_, an amateur web developer with just under 2 years of experience! 
			I got into programming through Scratch in elementary school, and my life has never been the same! 
			My favorite programming language is Svelte, which is the framework running the website you're looking at right now!
			<br>
			<br>
			I also enjoy playing around with graphics and VFX in Adobe Photoshop and After Effects! 😃
		</p>
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}
</style>
