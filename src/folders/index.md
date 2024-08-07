# Directories

<script setup>
    import Folders from "../components/Folders.vue";

    import Gitlab from "../assets/icons/Gitlab.svg";
    import Husky from "../assets/icons/Husky.svg";
    import Vscode from "../assets/icons/Vscode.svg";
    import Envs from "../assets/icons/Envs.svg";
    import Nodejs from "../assets/icons/Nodejs.svg";
    import Packages from "../assets/icons/Packages.svg";
    import Public from "../assets/icons/Public.svg";
    import Src from "../assets/icons/Src.svg";
    import Assets from "../assets/icons/Assets.svg";
    import Bridges from "../assets/icons/Bridges.svg";
    import Clients from "../assets/icons/Clients.svg";
    import Components from "../assets/icons/Components.svg";
    import Composables from "../assets/icons/Composables.svg";
    import Constants from "../assets/icons/Constants.svg";
    import Directives from "../assets/icons/Directives.svg";
    import Entities from "../assets/icons/Entities.svg";
    import Helpers from "../assets/icons/Helpers.svg";
    import Interfaces from "../assets/icons/Interfaces.svg";
    import Layouts from "../assets/icons/Layouts.svg";
    import Libs from "../assets/icons/Libs.svg";
    import Mappers from "../assets/icons/Mappers.svg";
    import Plugins from "../assets/icons/Plugins.svg";
    import Repositories from "../assets/icons/Repositories.svg";
    import Router from "../assets/icons/Router.svg";
    import Schemas from "../assets/icons/Schemas.svg";
    import Services from "../assets/icons/Services.svg";
    import Stores from "../assets/icons/Stores.svg";
    import Utils from "../assets/icons/Utils.svg";
    import Views from "../assets/icons/Views.svg";
    import App from "../assets/icons/App.svg";
    import Main from "../assets/icons/Main.svg";
    import Json from "../assets/icons/Json.svg";
    import Git from "../assets/icons/Git.svg";
    import Prettier from "../assets/icons/Prettier.svg";
    import Commitlint from "../assets/icons/Commitlint.svg";
    import Typescript from "../assets/icons/Typescript.svg";
    import Eslint from "../assets/icons/Eslint.svg";
    import Markdown from "../assets/icons/Markdown.svg";
    import Vite from "../assets/icons/Vite.svg";
    import Vitest from "../assets/icons/Vitest.svg";
    import Yarn from "../assets/icons/Yarn.svg";

    const items = [
        {
            "img": Gitlab,
            "title": ".gitlab/",
            "link": null
        },
        {
            "img": Husky,
            "title": ".husky/",
            "link": "husky"
        },
        {
            "img": Vscode,
            "title": ".vscode/",
            "link": null
        },
        {
            "img": Envs,
            "title": "env/",
            "link": "env"
        },
        {
            "img": Nodejs,
            "title": "node_modules/",
            "link": null
        },
        {
            "img": Packages,
            "title": "packages/",
            "link": "packages"
        },
        {
            "img": Public,
            "title": "public/",
            "link": null
        },
        {
            "img": Src,
            "title": "src/",
            "link": "src",
            folders: [
                {
                    "img": Assets,
                    "title": "assets",
                    "link": "#assets"
                },
                {
                    "img": Bridges,
                    "title": "bridges",
                    "link": "#bridges"
                },
                {
                    "img": Clients,
                    "title": "clients",
                    "link": "#clients"
                },
                {
                    "img": Components,
                    "title": "components",
                    "link": "#components"
                },
                {
                    "img": Composables,
                    "title": "composables",
                    "link": "#composables"
                },
                {
                    "img": Constants,
                    "title": "constants",
                    "link": "#constants"
                },
                {
                    "img": Directives,
                    "title": "directives",
                    "link": "#directives"
                },
                {
                    "img": Entities,
                    "title": "entities",
                    "link": "#entities"
                },
                {
                    "img": Helpers,
                    "title": "helpers",
                    "link": "#helpers"
                },
                {
                    "img": Interfaces,
                    "title": "interfaces",
                    "link": "#interfaces"
                },
                {
                    "img": Layouts,
                    "title": "layouts",
                    "link": "#layouts"
                },
                {
                    "img": Libs,
                    "title": "libs",
                    "link": "#libs"
                },
                {
                    "img": Mappers,
                    "title": "mappers",
                    "link": "#mappers"
                },
                {
                    "img": Plugins,
                    "title": "plugins",
                    "link": "#plugins"
                },
                {
                    "img": Repositories,
                    "title": "repositories",
                    "link": "#repositories"
                },
                {
                    "img": Router,
                    "title": "router",
                    "link": "#router"
                },
                {
                    "img": Schemas,
                    "title": "schemas",
                    "link": "#schemas"
                },
                {
                    "img": Services,
                    "title": "services",
                    "link": "#services"
                },
                {
                    "img": Stores,
                    "title": "stores",
                    "link": "#stores"
                },
                {
                    "img": Utils,
                    "title": "utils",
                    "link": "#utils"
                },
                {
                    "img": Views,
                    "title": "views",
                    "link": "#views"
                },
                {
                    "img": App,
                    "title": "App.vue",
                    "link": null
                },
                {
                    "img" : Main,
                    "title": "main.js",
                    "link": null
                },
            ]
        },
        {
            "img": Json,
            "title": ".eslintrc-auto-import.json",
            "link": null
        },
        {
            "img": Git,
            "title": ".gitignore",
            "link": null
        },
        {
            "img": Prettier,
            "title": ".prettierrc.json",
            "link": null
        },
        {
            "img": Commitlint,
            "title": "commitlint.config.js",
            "link": "commitlint"
        },
        {
            "img": Typescript,
            "title": "components.d.ts",
            "link": null
        },
        {
            "img": Eslint,
            "title": "eslint.config.mjs",
            "link": null
        },
        {
            "img": Json,
            "title": "jsconfig.json",
            "link": null
        },
        {
            "img": Nodejs,
            "title": "package.json",
            "link": null
        },
        {
            "img": Markdown,
            "title": "README.md",
            "link": null
        },
        {
            "img": Vite,
            "title": "vite.config.js",
            "link": null
        },
        {
            "img": Vitest,
            "title": "vitest.config.js",
            "link": null
        },
        {
            "img": Yarn,
            "title": "yarn.lock",
            "link": null
        }
    ]
</script>

<folders :items="items">
    root
</folders>