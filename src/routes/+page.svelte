<script>
    import "../scss/main.scss";
    import Navbar from "../components/Navbar.svelte";
	import Heroes from "../components/Heroes.svelte";
</script>
<svelte:head>
    <title>Portofolio</title>
</svelte:head>
<Navbar/>
<Heroes/>
<slot></slot>