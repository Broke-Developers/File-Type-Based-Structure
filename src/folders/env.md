<img src="https://github.com/user-attachments/assets/6818b5c9-bf0b-4a9c-a517-cea266b5b652" width="48px" height="48px"/>

# env

Contains environmental variables used in the application.

<script setup>
    import Folders from "../components/Folders.vue";
    const items = [
        {
            "img": "https://github.com/user-attachments/assets/9342df21-dcbc-4e93-bc7f-809d0d868bbf",
            "title": ".env.dev",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/9342df21-dcbc-4e93-bc7f-809d0d868bbf",
            "title": ".env.prod",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/9342df21-dcbc-4e93-bc7f-809d0d868bbf",
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
