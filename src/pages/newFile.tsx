import Card2 from "../components/Card.astro";
import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";

<Fragment>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="viewport" content="width=device-width" />
<meta name="generator" content={Astro.generator} />
<title>Astro</title>
</head>
<body>
<Navbar></Navbar>
<div class="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg">
<h1 class="text-3xl font-bold text-center">
Bienvenido a Astro con Tailwind CSS
</h1>
<p class="mt-4">
Esta es una página de ejemplo que muestra cómo usar Tailwind CSS
en Astro para establecer los márgenes de la página.
</p>

<Header title={"AstroBuild Tips"} />
<Hero />
<Card2 title={"Hello_Astro"} time={22000} tags={["uno", "dos"]} {...{ ",": true }} />
<h1>Astro</h1>
</div>
</body>
</html>

</Fragment>;
