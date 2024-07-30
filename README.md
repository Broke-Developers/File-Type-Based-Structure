# introduction 

Welcome to the Vue Boilerplate Project! This project provides a comprehensive and well-structured starting point for developing Vue.js applications. It includes a robust directory structure, essential configurations, and a selection of commonly used utilities and components. Whether you are a beginner looking to learn Vue or an experienced developer seeking a solid foundation for your next project, this boilerplate is designed to save you time and help you adhere to best practices.

This boilerplate has been tested and used in enterprise-level applications, ensuring its reliability and effectiveness. It includes a range of features to help you get started quickly, including state management, routing, and a clean organization of files and directories.

Dive in, and let's build something amazing together!

# Table of Contents
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
   └── <img src="https://github.com/user-attachments/assets/126d7e9b-3e11-4486-86aa-912027d306e8" width="20px" height="20px"/> <a href="#src">src/</a>
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

# Installation

Currently, there are no installations available

# Usage

You can clone or download the repository and start from there.

# Project Structure
The structure is based on file types on the first look (or level) and separated by domain(or sub-domain) in the second level.

In this structure, we follow two rules:

- *File and folder naming:* we use $\color{#3c873a}{kebab-case}$ naming convention. Add the corresponding file extension at the end of the files.

- $\color{#f0db4f}{Compostion}$ Rule: In software engineering composition is the relation between parent and child when a child can't exist without the parent's existence. for example relation between a body part and a human.
When you want to put a file somewhere or even make a file for something, first ask yourself can it exist without its corresponding logic, can I use it alone somewhere else?
If the answer is no, you shouldn't make a file for that. For example, vee-validate rules don't have any meaning without the vee-validate plugin, so it is better to put it alongside its plugin. Or if a constant that is the default value of a function can not exist without that function (or component, or view, it can be anything), so just put it there and there is no need to put it in constants.

<div align="center"> <img src="https://github.com/user-attachments/assets/41564ddc-a780-4f6a-a27b-9862cae378ce" alt="layers" width="50%" height="50%"/> </div>
Layers: In the above picture, you can see the connection between layers. Learn about each one in the descriptions below. 

> [!IMPORTANT]  
> Note that this picture is about one domain. The connection between layers of one domain is like the picture, but if you want to have a connection between two parts that are not adjacent then you will use `eventBus` for this purpose. But if you want a connection between two domains you may use bridges. 

## src
<img src="https://github.com/user-attachments/assets/126d7e9b-3e11-4486-86aa-912027d306e8" width="20px" height="20px"/>
The main folder contains the application's main files.

> [!IMPORTANT]  
> There is no need to import from "vue", "vue-router", "pinia" and "vee-validate". All the methods and exported functionalities from these packages are auto-imported.

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
> Also SVGs will be auto-transformed to a Vue component and accessed by `svg-loader` component. This component is auto-registered and accepts name, transformation(boolean), height, width, color, backgroundColor, and preserveAspectRatio as props. You can also define a pattern for SVG files and even add ignore and custom a transformation function to svg-loader vite-plugin. 

### bridges
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/> 
Intended for files that act as intermediaries or connectors between different subdomains of the application(the anti-corruption layer).

For example a shared logout or getting userInfo from auth or userManger domain. 

> [!TIP]
It is a good practice to have `.bridge` file extension at the end of file names.

### clients
<img src="https://github.com/user-attachments/assets/fb0ac7f8-e2c6-4b2e-b3b4-158c3e88ed59" width="20px" height="20px"/>
Intended for code that interfaces with external systems such as back-end APIs, WebAPIs like session and local storage, IndexDb, and ...

On the other hand, a client is: 

- a communicational interface to the persistence layer(where data is persisted such as back-end database or web storage).
- After the client, we don't have any access to data sent to the persistence layer.
- a singleton instance.
- It can contain browser APIs or some library and its configuration that can work like this interface. (like Axios instance or localStorage instance)

> [!TIP]
> There is a client helper class that can easily make an HTTP client for you(Axios).
> It is a good practice to have `.client` extension at the end of the file name. 

### components 
<img src="https://github.com/user-attachments/assets/3c1171bf-ebc4-4c01-9112-cef698e7c093" width="20px" height="20px"/>
Intended for Vue components used throughout the project. 

> [!IMPORTANT]  
> It is a good practice to have `.component` extension at the end of file names, for example `text-field.component.vue` (this will defer component files from view files).
> Components will be auto-registered and there is no need to import them. Dynamic component (or called component :is) is also available by `dynamic-component` keyword. In the template, we use Pascal-case for using Vue components. 

### composables
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Intended for composables used throughout the project. According to Vue itself a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse stateful logic. So whenever you have these 4 pillars you have a composable: 

- Composition of a logic and extending vue composition API
- reusability
- state (reactive)
- encapsulation 

For example, consider a useToast composable. It is a composition and encapsulation of toast logic that is reused in any part of the application, and it has a reactive toast stack state (this state can be borrowed from another place but it must have a state or return a state). 

If you don't have these 4 pillars, then you may not define a composable.

> [!IMPORTANT]  
> It is a good practice to have `.composable` file extension. Compostables are auto-registered if you do only one thing: named export of `use${name}` and name is pascal-case, for example, `export const useToast;`

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
> Directive will be auto-registred if you follow two rules: 1. file name must be `v-${name}.directive.js` and the name must be in kebab-case. 2. Must name export `v${name}` and name must be pascal-case, for example, `export const vClickOutside;`.

### entities
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Intended for defining data models or entities used in the application. for example, a class that is responsible for modeling a User.

An entity is:
- A class that represents a unique form of data.
- Instances of this class can be mutated and each one has a lifecycle.
- Smallest part of the data structure which is responsible for modeling BL-related data.
- Mappers of BL usually work with an instance of an entity.

> [!TIP]  
It is a good practice to have `.entity` extension at the end of file names.

### helpers
<img src="https://github.com/user-attachments/assets/bc103c2f-45c6-44d5-be20-abb328fdf3fc" width="20px" height="20px"/>
Contains helpers that are used in the application. 

The origin of helper comes from helper classes in Java. Classes that had internal state and sometimes bounded to the app logic. for example ArrayList, or a class that can only be used in your app and depends on the BL of your app. 

If you have these clauses below then you have a helper:

- It has low-mid complexity.
- It is framework independent.
- It can be related to your project logic. (not an obligation)
- It may not be able to use it in other projects. (not an obligation)
- It usually has some internal state. (not an obligation)
- It is a class or an object. It usually is not a function. (and again not an obligation)

If at least two no obligatory clauses above are correct, then you have a helper. A class with an internal state, a function that is dependent on your BL, and a specifically designed class only can be used in your app. All of these are helpers.

It is a good practice to have `.helper` extension at the end of the file name. Helpers can be related only to one domain so, it is a good practice to define a folder for each domain, add an index.js file, and put helpers of each domain in the corepuning folder (shared domain is also there).

> [!TIP]  
> The tricky point is that helpers are different from utils. Utils are pure and app agnostic and don't have an internal state but helpers are usually not pure and bound to the app logic and can not be used outside of the context of the app (usually). 

### interfaces
<img src="https://github.com/user-attachments/assets/98a227ff-d3a8-4d7e-99db-5455c12bc7e9" width="20px" height="20px"/>
Intended for general interface definitions (interface or abstract class used to ensure a class has some methods).

> [!TIP]  
> It is a good practice to have `.interface` extension at the end of file names.
> There is an Interface util that makes making interfaces much easier.
> Repository and Service must implement an interface (the interface of these two can be the same).

### layouts
<img src="https://github.com/user-attachments/assets/4fa69775-3571-437b-9ae7-687e41c96b02" width="20px" height="20px"/>
Intended for defining the overall structure of layouts in the application. 

> [!TIP]  
> It is a good practice to have `.layout` at the end of file names and register layouts by layout key in the meta of each route (or the root roure). For this cause, you can use the layout component that is provided in this template. (if there is no layout key determined then the `default.layout.vue` will be rendered as the layout of the page)

### libs
<img src="https://github.com/user-attachments/assets/d5747e81-f119-4e5f-a7a7-89712b0e3da7" width="20px" height="20px"/>
Intended for including third-party libraries' decorators or custom libraries used in the project.

If you have these clauses below then you have a lib:

- It has mid-high complexity.
- It is framework-independent.
- It is an object or a class that contains some related responsibility (like toasting, encryption, etc.).
- It can be used in other projects.
- It can be team-developed lib or it can be wrapper of third-party lib.
- It commonly can be called a tool as well.
- It can be used in both BL and UI layers.

It is a good practice to have `.lib` extension at the end of the file name. It is also good to have a facade of all libs at `/libs/index.js`.

### mappers
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Intended for mapping data from one format to another (Used in BL or UI layer).

A mapper is a function, class, or object that is used to map or convert data. (usually returns an entity instance)

> [!TIP]
> It is a good practice to have `.mapper` file extension. 
> It is better to start the mapper name with `to` keyword like toDecoded, toString!

### plugins
<img src="https://github.com/user-attachments/assets/859d0af7-f109-4758-a6d4-d2e644b26cb2" width="20px" height="20px"/>
Intended for Vue plugins or other plugins used by the app. According to Vue itself, plugins are self-contained code that usually add app-level functionality to Vue. So if you have an encapsulated code but want to expose it to the entire app, then you have a plugin. Consider plugins are Vue-related concepts, so in most cases, if you don't have reactivity and logic to add to Vue app functionality then you don't want to define a plugin.

> [!TIP]  
> It is a common practice in Vue 3 that plugins would provide an injectable with a Symbol key and there is a corresponding composable that injects the injectable with that Symbol key. Defining a key Symbol would make access to the plugin only through the composable.

> [!IMPORTANT]  
> Plugins are auto-registered by "pluginLoader" if you follow these rules:
> - Define a folder for each plugin, like `/plugins/toast/`.
> - Add an index.js file to the folder and export default the plugin config, like `export default { //config };`
> - The config is like Nuxt and the hierarchy of loading is the same as well:
> ```js
> export default {
>  /* name of plugins, used for dependencies or
>   ignore, if not passed plugin-${number}
>   will be selected as the name. That number
>   is the number for each plugin without a name */
>  name: String,
>  /* defines that the plugin should load before or
> After the app mount default value is pre */
>  enforce: "pre" | "post",
>  /* name of plugins that must load before this plugin */
>  dependOn: Array | string,
>  // declare that this plugin must fully load before going to load the next one or not
>  parallel: Boolean
>  // works like install, the app will be passed as its argument
>  setup: Function,
>};
> ```
> In main.js you can see "pluginLoader" plugin. This plugin accepts a configuration as well: 
> ```js
> const options = {
>  /* Array of plugin-names to ignore
>   A single name is acceptable by string format*/
>  ignore: Array | String,
>  // a function to mount the app default is app.mount("#app")
>  mount: Function,
>};
> ```
> Hierarchy: It just works like Nuxt plugin loading! First, it starts the loading by file name hierarchy, if it depends on some other plugin, it will load them first. if it is not and parallel is set to true it starts loading this plugin and goes to load the next one, and if it is set to false, it fully loads it and then it goes to the next one!
> 
> You can read it in Nuxt documentation as well: [Nuxt plugin directory](https://nuxt.com/docs/guide/directory-structure/plugins)

### repositories
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Intended for data access logic, such as interacting with APIs or databases (these implement the interface of the external system or in other words the details of communicating with the external systems).

A repository is:
- A wrapper to the client and encapsulates the logic of using the client from the service.
- Uses client to communicate with the persistence layer.
  
> [!IMPORTANT]
> Each repository must implement an interface.

> [!TIP]  
> It is a good practice to have `.repository` file extension.

### router
<img src="https://github.com/user-attachments/assets/b1b9b6af-cb11-4d27-adef-b8d7aa657871" width="20px" height="20px"/>
Contains the routing logic for the application (including routes of each domain and middleware).

The router instance is created with all routes configuration and global middlewares in `/router/index.js`. Middlewares should have `.middleware` file extension as well.

### schemas
<img src="https://github.com/user-attachments/assets/29da70d3-9a77-4ffc-82ae-2bfa688e899c" width="20px" height="20px"/>
Intended for data validation schemas. Schema is a function, object, or class that is used for validation of data between layers!

> [!TIP]  
> It is a good practice to have `.schema` file extension.
> In this structure we use [Yup](https://github.com/jquense/yup) to fulfill this mean.

### services
<img src="https://github.com/user-attachments/assets/5d4fd89e-6b05-4f24-8009-1bc39b1c4923" width="20px" height="20px"/>
Intended for service classes or functions that encapsulate business logic.

A service:
- Is the facade of some methods that are a communicational interface between store and repositories.
- Uses repositories to get data from the persistence layer.
- Chooses to work with which repository.
- Is a wrapper for repository, schema, and mapper.
- Uses repository to get data, schema to validate input and output data, and mapper to map and convert data.

> [!IMPORTANT]  
> A service must implement an interface.

> [!TIP]  
> It is a good practice to have `.service` file extension.

### stores
<img src="https://github.com/user-attachments/assets/61f8746f-479c-44fe-ae76-7f79689bc863" width="20px" height="20px"/>
Contains state management logic, likely using pinia or another state management library.

Store Actions use services to communicate with other layers (BL). 

A store can have its own related mapper.

In this structure, the store is used to store both UI and BL states. If you want to pass the state from store to BL (for example passing token from authStore to Axsios-client interceptor) direct passing is forbidden. The only way is to publish an event for example `token:change`, and subscribe to that event in the client interceptor. It applies to BL to UI communication as well, if you want to send data for example logging out when the token is expired with a 401 status code, then you need to publish an event in the client interceptor and subscribe to it in the store. Note that for centralizing these pub-subs, all the subscription and publishing events between UI and BL layers, in UI that affect all domains must be in `sharedStore`.

> [!IMPORTANT]  
> As mentioned all pub-subs that affect multiple subdomains must happen in `sharedStore`. To achieve this goal we must initiate the `sharedStore`, so putting `useSharedStore()` in pinia plugin setup will initiate it and this is obligatory.

> [!TIP]  
> In this structure we use recommended vue state manager pinia. Also, it is a good practice to have `.store` at the end of actions, state, and getters files, and index.js is the place where the store is created.
> You can use `eventBus` lib provided in this structure.  

### utils
<img src="https://github.com/user-attachments/assets/f3163c07-5aae-4444-8d84-1a056a10a818" width="20px" height="20px"/>
Contains utility functions that can be used across the project.

The origin of utils comes from Java classes with all static methods used across the program to help the developer and obey SOLID principles. for example, the Math class or just an isString function.

If you have these clauses below then you have a util:

- It is a class with all static methods or some functions.
- It has low complexity and does a more abstract job.
- It does not have any internal state, so it's a pure function.
- It is usable in other projects.
- It is framework-independent and app-independent.

If you don't have any of the clauses above then you may not define a util.
It is a good practice to have `.util` extension at the end of the file name. It is also good to have a facade of all utils at `/utils/index.js`.
### views

<img src="https://github.com/user-attachments/assets/f6efefe5-bcf5-444a-acb6-789ab0540a52" width="20px" height="20px"/>
Contains the main view components, which are the pages of the application.

It is a good practice to have `.view` extension at the end of the file names.

# Contributing

Provide instructions for contributing to the project.
