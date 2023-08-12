<script>
    import 'css-doodle';
    import "../scss/main.scss";
    import Navbar from "../components/Navbar.svelte";
	import Heroes from "../components/Heroes.svelte";
	import Skill from "../components/Skill.svelte";
</script>
<svelte:head>
    <title>Portofolio</title>
</svelte:head>
<Navbar/>
<Heroes/>
<Skill/>
<slot></slot>