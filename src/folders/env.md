# <a id="Env" href="#Env" style="text-decoration:none;"><h1 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1.6rem"><img src="../assets/icons/Envs.svg" width="32px" height="32px"/>Env</h1></a>

Contains environmental variables used in the application.

<script setup>
    import Folders from "../components/Folders.vue";

    const items = [
        {
            "img": "../assets/icons/Envs.svg",
            "title": ".env.dev",
            "link": null
        },
        {
            "img": "../assets/icons/Envs.svg",
            "title": ".env.prod",
            "link": null
        },
        {
            "img": "../assets/icons/Envs.svg",
            "title": ".end.test",
            "link": null
        }
    ];
</script>

<folders :items="items">
    env
</folders>

<br/>

> [!TIP]  
> In this structure we use Vite so envs must start with `VITE_`.
> 
> To use envs in build time there are three different commands: `yarn run build:dev`.
> 
> Also available for dev: `yarn run dev:prod`.
