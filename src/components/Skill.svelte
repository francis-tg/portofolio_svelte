<script>
    let doodleStyle  ="";
	import SkillItem from "./SkillItem.svelte";
    import HTML5 from "../img/skill/languages/icons8-html.svg"
    import CSS3 from "../img/skill/languages/icons8-css.svg"
    import JS from "../img/skill/languages/icons8-javascript.svg"
    import SCSS from "../img/skill/languages/icons8-sass.svg"
    import PHP from "../img/skill/languages/icons8-php.svg"
    import PHYTHON from "../img/skill/languages/icons8-python.svg"
    import EXPRESSJS from "../img/skill/framework/icons8-express-js.svg"
    import NEXTJS from "../img/skill/framework/icons8-nextjs.svg"
    import NODEJS from "../img/skill/framework/icons8-node-js.svg"
    import VUEJS from "../img/skill/framework/icons8-vuejs.svg"
    import  REACT from "../img/skill/framework/icons8-react-native-24.png"
     import  Mysql from "../img/skill/db/icons8-mysql-48.png"
     import  MongoDb from "../img/skill/db/icons8-mongodb.svg"
	import { onMount } from "svelte";
    const languages = [
        {
            title:"HTML5",
            icon:HTML5
        },
        {
            title:"CSS3",
            icon:CSS3
        },
        {
            title:"SCSS",
            icon:SCSS
        },
        {
            title:"Javascript",
            icon:JS
        },
        {
            title:"PHYTHON",
            icon:PHYTHON
        },
        {
            title:"PHP",
            icon:PHP
        }
    ]
    const frameworks = [
        {
            title:"Express JS",
            icon:EXPRESSJS
        },
        {
            title:"Node js",
            icon:NODEJS
        },
        {
            title:"NEXT JS",
            icon:NEXTJS
        },
        {
            title:"Vue Js",
            icon:VUEJS
        },
        {
            title:"REACT JS",
            icon:REACT
        },
    ]
    const dbs = [
        {
            title:"Mysql",
            icon:Mysql

        },
        {
            title:"MongoDb",
            icon:MongoDb

        }
    ]
    const css = `
    css-doodle {
      @grid: 7 / 100vmax / #0a0c27;
      @shape: clover 5;
      background: hsla(-@i(*4), 70%, 68%, @r.8);
      transform:
        scale(@r(.2, 1.5))
        translate(@m2.@r(±50%));
    }
  `;
  onMount(()=>{
    doodleStyle= css
  })
</script>

<!-- <div class="container">
    <h1>
        Mes compétences
    </h1>
    <div class="skills">
        <SkillItem icon={HTML5} title="HTML5"/>
    </div>
    <css-doodle click-to-update>
    @grid: 7 / 100vmax / #0a0c27;
    @shape: clover 5;
    background: hsla(-@i(*4), 70%, 68%, @r.8);
    transform:
      scale(@r(.2, 1.5))
      translate(@m2.@r(±50%));
</css-doodle>
</div> -->




<div class="doodle-container">
  <!-- Use the CSS-doodle component here -->
    <div class="doodle-background" style="opacity: 0.8">
    <css-doodle click-to-update>
        @grid: 10 / 100vmax / #0a0c27;
        width:100%;
    @shape: clover 5;
    background: hsla(-@i(*4), 70%, 68%, @r.8);
    transform:
      scale(@r(.2, 1.5))
      translate(@m2.@r(±50%));
    </css-doodle>
  </div>
 <div class="skill-container">
     <div class="content">
        <h1>
        Mes compétences
    </h1>
    <div class="skills">
        <div class="languages">
            <h3>
            Les langages
        </h3>
        <div class="content">
             {#each languages as lang }
            <SkillItem icon={lang.icon} title={lang.title}/>
        {/each}
        </div>
        </div>
        <div class="frameworks">
            <h3>
            Les Frameworks
        </h3>
        <div class="content">
            {#each frameworks as frame }
            <SkillItem icon={frame.icon} title={frame.title}/>
        {/each}
        </div>
        </div>
        <div class="databases">
            <h3>
            Les bases de donnée
        </h3>
        <div class="content">
            {#each dbs as db }
            <SkillItem icon={db.icon} title={db.title}/>
        {/each}
        </div>
        </div>
    </div>
     </div>
 </div>
</div>

<style>
  /* Style for containing the CSS-doodle */
  .doodle-background {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height:100%;
  }

</style>