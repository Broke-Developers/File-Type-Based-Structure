
<img src="https://github.com/user-attachments/assets/aefcf5a4-0869-45b8-bfc7-61b749344d24" width="48px" height="48px"/>

# packages

Contains potentially npm packages.

If you want to develop a package that can be used across applications or you have several projects using the same tools, components, etc (with monorepo) then you may define a package.

Each package has its own `package.json` and it must have an `index.js`. The folder structure of packages obeys the src folder structure as well.

<br/>

> [!DANGER]  
> We use yarn to handle workspaces and packages dependancies.
> Always run `yarn link` at the initialization of the project.