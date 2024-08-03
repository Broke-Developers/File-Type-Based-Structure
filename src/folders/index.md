# Directories

<script setup>
    import Folders from "../components/Folders.vue";

    const items = [
        {
            "img": "https://github.com/user-attachments/assets/c8216515-52bd-4460-9aa6-741fea290799",
            "title": ".gitlab/",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/af6489c2-2840-4dbc-ac20-728e3fb4eca5",
            "title": ".husky/",
            "link": "husky.html"
        },
        {
            "img": "https://github.com/user-attachments/assets/b0c5646c-98bd-4bfa-80f4-853bc299b6e0",
            "title": ".vscode/",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/6818b5c9-bf0b-4a9c-a517-cea266b5b652",
            "title": "env/",
            "link": "env.html"
        },
        {
            "img": "https://github.com/user-attachments/assets/baa20c8a-ffc3-4954-bb66-2dba1e51b5a6",
            "title": "node_modules/",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/aefcf5a4-0869-45b8-bfc7-61b749344d24",
            "title": "packages/",
            "link": "packages.html"
        },
        {
            "img": "https://github.com/user-attachments/assets/848036ca-0709-4877-b8bd-1ec7578b1a51",
            "title": "public/",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/126d7e9b-3e11-4486-86aa-912027d306e8",
            "title": "src/",
            "link": "src.html",
            folders: [
                {
                    "img": "https://github.com/user-attachments/assets/4ddc495d-fb72-486f-b16d-befb26043637",
                    "title": "assets",
                    "link": "#assets"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "bridges",
                    "link": "#bridges"
                },
                {
                    "img": "https://github.com/user-attachments/assets/fb0ac7f8-e2c6-4b2e-b3b4-158c3e88ed59",
                    "title": "clients",
                    "link": "#clients"
                },
                {
                    "img": "https://github.com/user-attachments/assets/3c1171bf-ebc4-4c01-9112-cef698e7c093",
                    "title": "components",
                    "link": "#components"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "composables",
                    "link": "#composables"
                },
                {
                    "img": "https://github.com/user-attachments/assets/e34fad94-e848-44f8-a0e2-bcb7560e7664",
                    "title": "constants",
                    "link": "#constants"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "directives",
                    "link": "#directives"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "entities",
                    "link": "#entities"
                },
                {
                    "img": "https://github.com/user-attachments/assets/bc103c2f-45c6-44d5-be20-abb328fdf3fc",
                    "title": "helpers",
                    "link": "#helpers"
                },
                {
                    "img": "https://github.com/user-attachments/assets/98a227ff-d3a8-4d7e-99db-5455c12bc7e9",
                    "title": "interfaces",
                    "link": "#interfaces"
                },
                {
                    "img": "https://github.com/user-attachments/assets/4fa69775-3571-437b-9ae7-687e41c96b02",
                    "title": "layouts",
                    "link": "#layouts"
                },
                {
                    "img": "https://github.com/user-attachments/assets/d5747e81-f119-4e5f-a7a7-89712b0e3da7",
                    "title": "libs",
                    "link": "#libs"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "mappers",
                    "link": "#mappers"
                },
                {
                    "img": "https://github.com/user-attachments/assets/859d0af7-f109-4758-a6d4-d2e644b26cb2",
                    "title": "plugins",
                    "link": "#plugins"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "repositories",
                    "link": "#repositories"
                },
                {
                    "img": "https://github.com/user-attachments/assets/b1b9b6af-cb11-4d27-adef-b8d7aa657871",
                    "title": "router",
                    "link": "#router"
                },
                {
                    "img": "https://github.com/user-attachments/assets/29da70d3-9a77-4ffc-82ae-2bfa688e899c",
                    "title": "schemas",
                    "link": "#schemas"
                },
                {
                    "img": "https://github.com/user-attachments/assets/5d4fd89e-6b05-4f24-8009-1bc39b1c4923",
                    "title": "services",
                    "link": "#services"
                },
                {
                    "img": "https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863",
                    "title": "stores",
                    "link": "#stores"
                },
                {
                    "img": "https://github.com/user-attachments/assets/f3163c07-5aae-4444-8d84-1a056a10a818",
                    "title": "utils",
                    "link": "#utils"
                },
                {
                    "img": "https://github.com/user-attachments/assets/f6efefe5-bcf5-444a-acb6-789ab0540a52",
                    "title": "views",
                    "link": "#views"
                },
                {
                    "img": "https://github.com/user-attachments/assets/d9012bbe-7a34-4f5d-b3ed-419d7a33c6e7",
                    "title": "App.vue",
                    "link": null
                },
                {
                    "img": "https://github.com/user-attachments/assets/79005a9f-8fc4-45b5-9399-2dff45659b81",
                    "title": "main.js",
                    "link": null
                },
            ]
        },
        {
            "img": "https://github.com/user-attachments/assets/974d096c-292f-419a-bc79-c3bd2f5c465c",
            "title": ".eslintrc-auto-import.json",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/c3aad385-41df-46ee-9d3f-e9a4d9855b5a",
            "title": ".gitignore",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/fbdb0684-c8f7-4904-9f4b-bfa708b6796b",
            "title": ".prettierrc.json",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/d9462012-bb2b-47be-93d3-ac38287eb0e5",
            "title": "commitlint.config.js",
            "link": "#commitlint"
        },
        {
            "img": "https://github.com/user-attachments/assets/c76a4932-9a46-46fd-9969-9ab23f7fe1bb",
            "title": "components.d.ts",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/4161c0ff-f9f6-4e15-a093-c6f06ed9ee9e",
            "title": "eslint.config.mjs",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/f5680e4c-5825-42b8-af78-27c66679a107",
            "title": "index.html",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/4bb53694-27a4-4e67-bacc-d82271de4d6d",
            "title": "jsconfig.json",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/4728e1e1-f7b9-436e-8da8-144b9ccc6b74",
            "title": "package.json",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/e476921a-4838-43d7-99f4-721bb187d672",
            "title": "README.md",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/b1690ee9-5946-4e2f-b037-69f4aad05363",
            "title": "vite.config.js",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/01d42464-740a-42f6-ab89-5e5134fbf8b6",
            "title": "vitest.config.js",
            "link": null
        },
        {
            "img": "https://github.com/user-attachments/assets/61713452-cfb1-4e01-bf1f-fc01fc16d9a0",
            "title": "yarn.lock",
            "link": null
        }
    ]
</script>

<folders :items="items">
    root
</folders>