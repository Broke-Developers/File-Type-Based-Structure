
# <a id="Packages" class="vt-doc" href="#Packages" style="text-decoration:none;"><h1 style="display:flex; gap:10px; align-items:center;font-size:1.6rem"><img src="./../assets/icons/Packages.svg" width="32px" height="32px"/>Packages</h1></a>

Contains potentially npm packages.

If you want to develop a package that can be used across applications or you have several projects using the same tools, components, etc (with monorepo) then you may define a package.

Each package has its own `package.json` and it must have an `index.js`. The folder structure of packages obeys the src folder structure as well.

<br/>

> [!DANGER]  
> We use yarn to handle workspaces and packages dependancies.
> Always run `yarn link` at the initialization of the project.