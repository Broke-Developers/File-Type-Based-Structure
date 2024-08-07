### <a id="Src" href="#Src" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Src.svg" width="32px" height="32px"/>Src</h6></a>

<p >The main folder contains the application's main files.</p>

> [!WARNING]  
> There is no need to import from "vue", "vue-router", "pinia" and "vee-validate". All the methods and exported functionalities from these packages are auto-imported.

---
 
### <a id="Assets" href="#Assets" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Assets.svg" width="32px" height="32px"/>Assets</h6></a>
     
Static assets (also called resources) like images, icons (SVG), fonts, and other media files are stored in the assets folder. If you have any static files, feel free to put them in here.

<script setup>
    import Folders from "../components/Folders.vue";

    const items = [
        {
            "img": "../assets/icons/Fonts.svg",
            "title": "fonts/ Any font that is used throughout your application.",
            "link": null
        },
        {
            "img": "../assets/icons/Images.svg",
            "title": "images/ Any image file (exclude favicon icons) comes in here.",
            "link": null
        },
        {
            "img": "../assets/icons/Styles.svg",
            "title": "style/ Contains style related files. We use SCSS and a custom design system.",
            "link": null
        },
        {
            "img": "../assets/icons/Svgs.svg",
            "title": "svg/ SVG files (mostly icons) used in project.",
            "link": null
        }
    ];
</script>

<folders :items="items">
    assets
</folders>

> [!TIP]  
> It is good practice to have `/fonts/${fontName}/regular.woff` structure.

> [!TIP]  
> It is a good practice to separate your SVGs by domains like `/shared/` or `/auth/`.
> Also SVGs will be auto-transformed to a Vue component and accessed by `svg-loader` component. This component is auto-registered and accepts name, transformation(boolean), height, width, color, backgroundColor, and preserveAspectRatio as props. You can also define a pattern for SVG files and even add ignore and custom a transformation function to svg-loader vite-plugin.

---


### <a id="Bridges" href="#Bridges" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Bridges.svg" width="32px" height="32px"/>Bridges</h6></a>

Intended for files that act as intermediaries or connectors between different subdomains of the application(the anti-corruption layer).

For example a shared logout or getting userInfo from auth or userManger domain. 

> [!TIP]
It is a good practice to have `.bridge` file extension at the end of file names.

---

### <a id="Clients" href="#Clients" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Clients.svg" width="32px" height="32px"/>Clients</h6></a>

Intended for code that interfaces with external systems such as back-end APIs, WebAPIs like session and local storage, IndexDb, and ...

On the other hand, a client is: 

- a communicational interface to the persistence layer(where data is persisted such as back-end database or web storage).
- After the client, we don't have any access to data sent to the persistence layer.
- a singleton instance.
- It can contain browser APIs or some library and its configuration that can work like this interface. (like Axios instance or localStorage instance)

> [!TIP]
> There is a client helper class that can easily make an HTTP client for you(Axios).
> It is a good practice to have `.client` extension at the end of the file name. 

--- 

### <a id="Components" href="#Components" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Components.svg" width="32px" height="32px"/>Components</h6></a>

Intended for Vue components used throughout the project.  <br/>

> [!TIP]  
> It is a good practice to have `.component` extension at the end of file names, for example `text-field.component.vue` (this will defer component files from view files).
> Components will be auto-registered and there is no need to import them. Dynamic component (or called component :is) is also available by `dynamic-component` keyword. In the template, we use Pascal-case for using Vue components.

---

### <a id="Composables" href="#Composables" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Composables.svg" width="32px" height="32px"/>Composables</h6></a>

Intended for composables used throughout the project. According to Vue itself a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse stateful logic. So whenever you have these 4 pillars you have a composable: 

- Composition of a logic and extending vue composition API
- reusability
- state (reactive)
- encapsulation 

For example, consider a useToast composable. It is a composition and encapsulation of toast logic that is reused in any part of the application, and it has a reactive toast stack state (this state can be borrowed from another place but it must have a state or return a state). 

If you don't have these 4 pillars, then you may not define a composable.

> [!TIP]  
> It is a good practice to have `.composable` file extension. Compostables are auto-registered if you do only one thing: named export of `use${name}` and name is pascal-case, for example, `export const useToast;`

---

### <a id="Constants" href="#Constants" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Constants.svg" width="32px" height="32px"/>Constants</h6></a>


Intended for storing constants or configurations used across the project. 

Each domain (including shared) can have its constant folder with a facade in `/constants/${name}/index.js`. Other files should have `.constant` file extension.
Use `object.freeze()`, follow CONSTANT_NAMING_CONVENTION and composition rule.

---
 
### <a id="Directives" href="#Directives" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Directives.svg" width="32px" height="32px"/>Directives</h6></a>

Intended for custom Vue directives.<br/>

> [!TIP]  
> It is a good practice to have `.directive` at the end of file names, for example, `v-click-outside.directive.js`.
> Directive will be auto-registred if you follow two rules: 1. file name must be `v-${name}.directive.js` and the name must be in kebab-case. 2. Must name export `v${name}` and name must be pascal-case, for example, `export const vClickOutside;`.

---

### <a id="Entities" href="#Entities" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Entities.svg" width="32px" height="32px"/>Entities</h6></a>


Intended for defining data models or entities used in the application. for example, a class that is responsible for modeling a User.

An entity is:
- A class that represents a unique form of data.
- Instances of this class can be mutated and each one has a lifecycle.
- Smallest part of the data structure which is responsible for modeling BL-related data.
- Mappers of BL usually work with an instance of an entity.

> [!TIP]  
It is a good practice to have `.entity` extension at the end of file names.

---

### <a id="Helpers" href="#Helpers" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Helpers.svg" width="32px" height="32px"/>Helpers</h6></a>

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

---

### <a id="Interfaces" href="#Interfaces" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Interfaces.svg" width="32px" height="32px"/>Interfaces</h6></a>


Intended for general interface definitions (interface or abstract class used to ensure a class has some methods).<br/>

> [!TIP]  
> It is a good practice to have `.interface` extension at the end of file names.
> There is an Interface util that makes making interfaces much easier.
> Repository and Service must implement an interface (the interface of these two can be the same).

---

### <a id="Layouts" href="#Layouts" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Layouts.svg" width="32px" height="32px"/>Layouts</h6></a>

Intended for defining the overall structure of layouts in the application. <br/>

> [!TIP]  
> It is a good practice to have `.layout` at the end of file names and register layouts by layout key in the meta of each route (or the root roure). For this cause, you can use the layout component that is provided in this template. (if there is no layout key determined then the `default.layout.vue` will be rendered as the layout of the page)

---

### <a id="Libs" href="#Libs" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Libs.svg" width="32px" height="32px"/>Libs</h6></a>


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

---

### <a id="Mappers" href="#Mappers" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Mappers.svg" width="32px" height="32px"/>Mappers</h6></a>

Intended for mapping data from one format to another (Used in BL or UI layer).

A mapper is a function, class, or object that is used to map or convert data. (usually returns an entity instance)

> [!TIP]
> It is a good practice to have `.mapper` file extension. 
> It is better to start the mapper name with `to` keyword like toDecoded, toString!

---

### <a id="Plugins" href="#Plugins" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Plugins.svg" width="32px" height="32px"/>Plugins</h6></a>


Intended for Vue plugins or other plugins used by the app. According to Vue itself, plugins are self-contained code that usually add app-level functionality to Vue. So if you have an encapsulated code but want to expose it to the entire app, then you have a plugin. Consider plugins are Vue-related concepts, so in most cases, if you don't have reactivity and logic to add to Vue app functionality then you don't want to define a plugin. <br/>


> [!TIP]  
> It is a common practice in Vue 3 that plugins would provide an injectable with a Symbol key and there is a corresponding composable that injects the injectable with that Symbol key. Defining a key Symbol would make access to the plugin only through the composable.


> [!WARNING]  
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

---

### <a id="Repositories" href="#Repositories" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Repositories.svg" width="32px" height="32px"/>Repositories</h6></a>

Intended for data access logic, such as interacting with APIs or databases (these implement the interface of the external system or in other words the details of communicating with the external systems).

A repository is:
- A wrapper to the client and encapsulates the logic of using the client from the service.
- Uses client to communicate with the persistence layer.

> [!DANGER]
> Each repository must implement an interface.

> [!TIP]  
> It is a good practice to have `.repository` file extension.

---

### <a id="Router" href="#Router" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Router.svg" width="32px" height="32px"/>Router</h6></a>

Contains the routing logic for the application (including routes of each domain and middleware).

The router instance is created with all routes configuration and global middlewares in `/router/index.js`. Middlewares should have `.middleware` file extension as well.

--- 

### <a id="Schemas" href="#Schemas" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Schemas.svg" width="32px" height="32px"/>Schemas</h6></a>

Intended for data validation schemas. Schema is a function, object, or class that is used for validation of data between layers. <br/>

> [!TIP]  
> It is a good practice to have `.schema` file extension.
> In this structure we use [Yup](https://github.com/jquense/yup) to fulfill this mean.

---

### <a id="Services" href="#Services" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Services.svg" width="32px" height="32px"/>Services</h6></a>

Intended for service classes or functions that encapsulate business logic.

A service:
- Is the facade of some methods that are a communicational interface between store and repositories.
- Uses repositories to get data from the persistence layer.
- Chooses to work with which repository.
- Is a wrapper for repository, schema, and mapper.
- Uses repository to get data, schema to validate input and output data, and mapper to map and convert data.


> [!DANGER]  
> A service must implement an interface.

> [!TIP]  
> It is a good practice to have `.service` file extension.

---

### <a id="Stores" href="#Stores" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Stores.svg" width="32px" height="32px"/>Stores</h6></a>

Contains state management logic, likely using pinia or another state management library.

Store Actions use services to communicate with other layers (BL). 

A store can have its own related mapper.

In this structure, the store is used to store both UI and BL states. If you want to pass the state from store to BL (for example passing token from authStore to Axsios-client interceptor) direct passing is forbidden. The only way is to publish an event for example `token:change`, and subscribe to that event in the client interceptor. It applies to BL to UI communication as well, if you want to send data for example logging out when the token is expired with a 401 status code, then you need to publish an event in the client interceptor and subscribe to it in the store. Note that for centralizing these pub-subs, all the subscription and publishing events between UI and BL layers, in UI that affect all domains must be in `sharedStore`.

> [!DANGER]  
> As mentioned all pub-subs that affect multiple subdomains must happen in `sharedStore`. To achieve this goal we must initiate the `sharedStore`, so putting `useSharedStore()` in pinia plugin setup will initiate it and this is obligatory.

> [!TIP]  
> In this structure we use recommended vue state manager pinia. Also, it is a good practice to have `.store` at the end of actions, state, and getters files, and index.js is the place where the store is created.
> You can use `eventBus` lib provided in this structure.  

---

### <a id="Utils" href="#Utils" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Utils.svg" width="32px" height="32px"/>Utils</h6></a>

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

---

### <a id="Views" href="#Views" style="text-decoration:none;"><h6 style="display:flex; gap:10px; align-items:center;color:var(--vt-c-text-light-2);font-size:1rem"><img src="./../assets/icons/Views.svg" width="32px" height="32px"/>Views</h6></a>


Contains the main view components, which are the pages of the application.

It is a good practice to have `.view` extension at the end of the file names.

