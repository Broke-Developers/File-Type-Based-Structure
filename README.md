## introduction 

Welcome to the Vue Boilerplate Project! This project provides a comprehensive and well-structured starting point for developing Vue.js applications. It includes a robust directory structure, essential configurations, and a selection of commonly used utilities and components. Whether you are a beginner looking to learn Vue or an experienced developer seeking a solid foundation for your next project, this boilerplate is designed to save you time and help you adhere to best practices.

This boilerplate has been tested and used in enterprise-level applications, ensuring its reliability and effectiveness. It includes a range of features to help you get started quickly, including state management, routing, and a clean organization of files and directories.

Dive in, and let's build something amazing together!

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. <details open>
   <summary>
   <a href="#project-structure">Project Strucutre</a>
   </summary>
 
   ├── <img src="https://github.com/user-attachments/assets/c8216515-52bd-4460-9aa6-741fea290799" width="20px" height="20px"/> .gitlab/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/af6489c2-2840-4dbc-ac20-728e3fb4eca5" width="20px" height="20px"/> .husky/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/b0c5646c-98bd-4bfa-80f4-853bc299b6e0" width="20px" height="20px"/> .vscode/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/6818b5c9-bf0b-4a9c-a517-cea266b5b652" width="20px" height="20px"/> env/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/baa20c8a-ffc3-4954-bb66-2dba1e51b5a6" width="20px" height="20px"/> node_modules/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/aefcf5a4-0869-45b8-bfc7-61b749344d24" width="20px" height="20px"/> packages/ <br/>
   ├── <img src="https://github.com/user-attachments/assets/848036ca-0709-4877-b8bd-1ec7578b1a51" width="20px" height="20px"/> public/ <br/> 
   <details open> 
   <summary> 
   └── <img src="https://github.com/user-attachments/assets/126d7e9b-3e11-4486-86aa-912027d306e8" width="20px" height="20px"/> src/ 
   </summary>
    
   &emsp;├── <img src="https://github.com/user-attachments/assets/4ddc495d-fb72-486f-b16d-befb26043637" width="20px" height="20px"/> [assets](#assets) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [bridges](#bridges) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/fb0ac7f8-e2c6-4b2e-b3b4-158c3e88ed59" width="20px" height="20px"/> [clients](#clients) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/3c1171bf-ebc4-4c01-9112-cef698e7c093" width="20px" height="20px"/> [components](#components) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [composables](#composables) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/e34fad94-e848-44f8-a0e2-bcb7560e7664" width="20px" height="20px"/> [constants](#constants) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [directives](#directives) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [entities](#entities) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/bc103c2f-45c6-44d5-be20-abb328fdf3fc" width="20px" height="20px"/> [helpers](#helpers) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/98a227ff-d3a8-4d7e-99db-5455c12bc7e9" width="20px" height="20px"/> [interfaces](#interfaces) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/4fa69775-3571-437b-9ae7-687e41c96b02" width="20px" height="20px"/> [layouts](#layouts) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/d5747e81-f119-4e5f-a7a7-89712b0e3da7" width="20px" height="20px"/> [libs](#libs) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [mappers](#mappers) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/859d0af7-f109-4758-a6d4-d2e644b26cb2" width="20px" height="20px"/> [plugins](#plugins) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [repositories](#repositories) <br/> 
   &emsp;├── <img src="https://github.com/user-attachments/assets/b1b9b6af-cb11-4d27-adef-b8d7aa657871" width="20px" height="20px"/> [router](#router) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/29da70d3-9a77-4ffc-82ae-2bfa688e899c" width="20px" height="20px"/> [schemas](#schemas) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/5d4fd89e-6b05-4f24-8009-1bc39b1c4923" width="20px" height="20px"/> [services](#services)  <br/> 
   &emsp;├── <img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> [stores](#stores) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/f3163c07-5aae-4444-8d84-1a056a10a818" width="20px" height="20px"/> [utils](#utils) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/f6efefe5-bcf5-444a-acb6-789ab0540a52" width="20px" height="20px"/> [views](#views) <br/>
   &emsp;├── <img src="https://github.com/user-attachments/assets/d9012bbe-7a34-4f5d-b3ed-419d7a33c6e7" width="20px" height="20px"/> App.vue <br/>
   &emsp;└── <img src="https://github.com/user-attachments/assets/79005a9f-8fc4-45b5-9399-2dff45659b81" width="20px" height="20px"/> main.js <br/>
   </details>
   
   ├── <img src="https://github.com/user-attachments/assets/974d096c-292f-419a-bc79-c3bd2f5c465c" width="20px" height="20px"/> .eslintrc-auto-import.json <br/>
   ├── <img src="https://github.com/user-attachments/assets/c3aad385-41df-46ee-9d3f-e9a4d9855b5a" width="20px" height="20px"/> .gitignore <br/> 
   ├── <img src="https://github.com/user-attachments/assets/fbdb0684-c8f7-4904-9f4b-bfa708b6796b" width="20px" height="20px"/> .prettierrc.json <br/>
   ├── <img src="https://github.com/user-attachments/assets/d9462012-bb2b-47be-93d3-ac38287eb0e5" width="20px" height="20px"/> commitlint.config.js <br/>
   ├── <img src="https://github.com/user-attachments/assets/c76a4932-9a46-46fd-9969-9ab23f7fe1bb" width="20px" height="20px"/> components.d.ts <br/>
   ├── <img src="https://github.com/user-attachments/assets/4161c0ff-f9f6-4e15-a093-c6f06ed9ee9e" width="20px" height="20px"/> eslint.config.mjs <br/>
   ├── <img src="https://github.com/user-attachments/assets/f5680e4c-5825-42b8-af78-27c66679a107" width="20px" height="20px"/> index.html <br/>
   ├── <img src="https://github.com/user-attachments/assets/4bb53694-27a4-4e67-bacc-d82271de4d6d" width="20px" height="20px"/> jsconfig.json <br/>
   ├── <img src="https://github.com/user-attachments/assets/4728e1e1-f7b9-436e-8da8-144b9ccc6b74" width="20px" height="20px"/> package.json <br/>
   ├── <img src="https://github.com/user-attachments/assets/e476921a-4838-43d7-99f4-721bb187d672" width="20px" height="20px"/> README.md <br/>
   ├── <img src="https://github.com/user-attachments/assets/b1690ee9-5946-4e2f-b037-69f4aad05363" width="20px" height="20px"/> vite.config.js <br/>
   ├── <img src="https://github.com/user-attachments/assets/01d42464-740a-42f6-ab89-5e5134fbf8b6" width="20px" height="20px"/> vitest.config.js <br/>
   └── <img src="https://github.com/user-attachments/assets/61713452-cfb1-4e01-bf1f-fc01fc16d9a0" width="20px" height="20px"/> yarn.lock <br/>
</details>

4. [Contributing](#contributing)

## Installation

Currently, there are no installations available

## Usage

You can clone or download the repository and start from there.

## Project Structure

### assets 
<img src="https://github.com/user-attachments/assets/4ddc495d-fb72-486f-b16d-befb26043637" width="20px" height="20px"/>
Static assets (also called resources) like images, icons (SVG), fonts, and other media files are stored in the assets folder. If you have any static files, feel free to put them in here.

 ├── <img src="https://github.com/user-attachments/assets/58c0c76b-6911-40d7-aa03-142527a09929" width="20px" height="20px"/> fonts/  Any font that is used throughout your application. <br/>
> [!TIP]  
> It is good practice to have `/fonts/${fontName}/regular.woff` structure.
> 
 ├── <img src="https://github.com/user-attachments/assets/fc2799f0-fe47-414d-96ab-eab77384c2e1" width="20px" height="20px"/> images/ Any image file (exclude favicon icons) comes in here. <br/> 
 ├── <img src="https://github.com/user-attachments/assets/30e7b6dc-0aea-4609-b412-7b8691ffb2b3" width="20px" height="20px"/> style/ Contains style related files. We use SCSS and a custom design system in this template. <br/>
 └── <img src="https://github.com/user-attachments/assets/dc9259d8-da5f-4ab0-919f-9a166e2fc4e2" width="20px" height="20px"/> svg/ SVG files (mostly icons) used in project. <br/>
 > [!TIP]  
> It is a good practice to separate your SVGs by domains like `/shared/` or `/auth/`.
> Also SVGs will be auto-transformed to a Vue component and accessed by `svg-loader` component.

### bridges

Intended for files that act as intermediaries or connectors between different subdomains of the application(the anti-corruption layer)

### clients

Intended for code that interfaces with external systems such as back-end APIs, WebAPIs like session and local storage, IndexDb, and ...

### components 
<img src="https://github.com/user-attachments/assets/3c1171bf-ebc4-4c01-9112-cef698e7c093" width="20px" height="20px"/>
Intended for Vue components used throughout the project. 

> [!IMPORTANT]  
> It is a good practice to have `.component` extension at the end of file names, for example `text-field.component.vue` (this will defer component files from view files).
> Components will be auto-registered and there is no need to import them. Dynamic component (or called component :is) is also available by `dynamic-component` keyword. In template, we use Pascal-case for using Vue components. 

### composables

Intended for composables used throughout the project.

### constants
<img src="https://github.com/user-attachments/assets/e34fad94-e848-44f8-a0e2-bcb7560e7664" width="20px" height="20px"/>
Intended for storing constants or configurations used across the project. 

Each domain (including shared) can have its constant folder with a facade in `/constants/${name}/index.js`. Other files should have `.constant` file extension.
Use `object.freeze()`, follow CONSTANT_NAMING_CONVENTION and composition rule.
 
### directives 
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Intended for custom Vue directives.

> [!IMPORTANT]  
> It is a good practice to have `.directive` at the end of file names, for example, `v-click-outside.directive.js`.
> Directive will be auto-registred if you follow two rules: 1. file name must be `v-${name}.directive.js` and the name must be in kebab-case. 2. Must name export `v${name}` and name must be pascal-case, for example `export const vClickOutside;`.

### entities

Intended for defining data models or entities used in the application.
### helpers

Intended for utility functions that perform common tasks across the project (the tricky point is that helpers are different from utils. utils are pure and app agnostic and don't have an internal state but helpers are usually not pure and bound to the app logic and can not be used outside of the context of the app.).

### interfaces

Intended for general interface definitions.

### layouts
<img src="https://github.com/user-attachments/assets/4fa69775-3571-437b-9ae7-687e41c96b02" width="20px" height="20px"/>
Intended for defining the overall structure of layouts in the application. 

> [!TIP]  
> It is a good practice to have `.layout` at the end of file names and register layouts by layout key in the meta of each route (or the root roure). For this cause, you can use the layout component that is provided in this template. (if there is no layout key determined then the `default.layout.vue` will be rendered as the layout of the page)

### libs

Intended for including third-party libraries' decorators or custom libraries used in the project.

### mappers

Intended for mapping data from one format to another.

### plugins

Intended for Vue plugins or other plugins used by the app.

### repositories

Intended for data access logic, such as interacting with APIs or databases (these implement the interface of the external system or in other words the details of communicating with the external systems).

### router
<img src="https://github.com/user-attachments/assets/b1b9b6af-cb11-4d27-adef-b8d7aa657871" width="20px" height="20px"/>
Contains the routing logic for the application (including routes of each domain and middleware).

The router instance is created with all routes configuration and global middlewares in `/router/index.js`. Middlewares should have `.middleware` file extension as well.

### schemas

Intended for data validation schemas.

### services

Intended for service classes or functions that encapsulate business logic.

### stores

Contains state management logic, likely using pinia or another state management library.

### utils

Contains utility functions that can be used across the project (In contrast to helpers, these are pure and app agnostic).

### views

<img src="https://github.com/user-attachments/assets/f6efefe5-bcf5-444a-acb6-789ab0540a52" width="20px" height="20px"/>
Contains the main view components, which are the pages of the application.

It is a good practice to have `.view` extension at the end of the file names.

## Contributing

Provide instructions for contributing to the project.
