# Directories

<script setup>
    import Folders from "../components/Folders.vue";

    const items = [
        {
            "img": "../assets/icons/Gitlab.svg",
            "title": ".gitlab/",
            "link": null
        },
        {
            "img": "../assets/icons/Husky.svg",
            "title": ".husky/",
            "link": "husky"
        },
        {
            "img": "../assets/icons/Vscode.svg",
            "title": ".vscode/",
            "link": null
        },
        {
            "img": "../assets/icons/Envs.svg",
            "title": "env/",
            "link": "env"
        },
        {
            "img": "../assets/icons/Nodejs.svg",
            "title": "node_modules/",
            "link": null
        },
        {
            "img": "../assets/icons/Packages.svg",
            "title": "packages/",
            "link": "packages"
        },
        {
            "img": "../assets/icons/Public.svg",
            "title": "public/",
            "link": null
        },
        {
            "img": "../assets/icons/Src.svg",
            "title": "src/",
            "link": "src",
            folders: [
                {
                    "img": "../assets/icons/Assets.svg",
                    "title": "assets",
                    "link": "#assets"
                },
                {
                    "img": "../assets/icons/bridges.svg",
                    "title": "bridges",
                    "link": "#bridges"
                },
                {
                    "img": "../assets/icons/clients.svg",
                    "title": "clients",
                    "link": "#clients"
                },
                {
                    "img": "../assets/icons/components.svg",
                    "title": "components",
                    "link": "#components"
                },
                {
                    "img": "../assets/icons/composables.svg",
                    "title": "composables",
                    "link": "#composables"
                },
                {
                    "img": "../assets/icons/constants.svg",
                    "title": "constants",
                    "link": "#constants"
                },
                {
                    "img": "../assets/icons/directives.svg",
                    "title": "directives",
                    "link": "#directives"
                },
                {
                    "img": "../assets/icons/entities.svg",
                    "title": "entities",
                    "link": "#entities"
                },
                {
                    "img": "../assets/icons/helpers.svg",
                    "title": "helpers",
                    "link": "#helpers"
                },
                {
                    "img": "../assets/icons/interfaces.svg",
                    "title": "interfaces",
                    "link": "#interfaces"
                },
                {
                    "img": "../assets/icons/layouts.svg",
                    "title": "layouts",
                    "link": "#layouts"
                },
                {
                    "img": "../assets/icons/libs.svg",
                    "title": "libs",
                    "link": "#libs"
                },
                {
                    "img": "../assets/icons/mappers.svg",
                    "title": "mappers",
                    "link": "#mappers"
                },
                {
                    "img": "../assets/icons/plugins.svg",
                    "title": "plugins",
                    "link": "#plugins"
                },
                {
                    "img": "../assets/icons/repositories.svg",
                    "title": "repositories",
                    "link": "#repositories"
                },
                {
                    "img": "../assets/icons/router.svg",
                    "title": "router",
                    "link": "#router"
                },
                {
                    "img": "../assets/icons/schemas.svg",
                    "title": "schemas",
                    "link": "#schemas"
                },
                {
                    "img": "../assets/icons/services.svg",
                    "title": "services",
                    "link": "#services"
                },
                {
                    "img": "../assets/icons/stores.svg",
                    "title": "stores",
                    "link": "#stores"
                },
                {
                    "img": "../assets/icons/utils.svg",
                    "title": "utils",
                    "link": "#utils"
                },
                {
                    "img": "../assets/icons/views.svg",
                    "title": "views",
                    "link": "#views"
                },
                {
                    "img": "../assets/icons/App.svg",
                    "title": "App.vue",
                    "link": null
                },
                {
                    "img" : "../assets/icons/main.svg",
                    "title": "main.js",
                    "link": null
                },
            ]
        },
        {
            "img": "../assets/icons/Json.svg",
            "title": ".eslintrc-auto-import.json",
            "link": null
        },
        {
            "img": "../assets/icons/Git.svg",
            "title": ".gitignore",
            "link": null
        },
        {
            "img": "../assets/icons/Prettier.svg",
            "title": ".prettierrc.json",
            "link": null
        },
        {
            "img": "../assets/Icons/Commitlint.svg",
            "title": "commitlint.config.js",
            "link": "commitlint"
        },
        {
            "img": "../assets/Icons/Typescript.svg",
            "title": "components.d.ts",
            "link": null
        },
        {
            "img": "../assets/icons/Eslint.svg",
            "title": "eslint.config.mjs",
            "link": null
        },
        {
            "img": "../assets/icons/Json.svg",
            "title": "jsconfig.json",
            "link": null
        },
        {
            "img": "../assets/icons/Nodejs.svg",
            "title": "package.json",
            "link": null
        },
        {
            "img": "../assets/icons/Markdown.svg",
            "title": "README.md",
            "link": null
        },
        {
            "img": "../assets/icons/Vite.svg",
            "title": "vite.config.js",
            "link": null
        },
        {
            "img": "../assets/icons/Vitest.svg",
            "title": "vitest.config.js",
            "link": null
        },
        {
            "img": "../assets/icons/Yarn.svg",
            "title": "yarn.lock",
            "link": null
        }
    ]
</script>

<folders :items="items">
    root
</folders>