NextJS Boilerplate
==================

> An opinionated React/Next.JS boilerplate, made with some features I often use in projects out there.

-----

Features
--------

> Not all features are needed, depending on the project, so you may delete whatever you don't need for your project.
> 
> _Still very WIP!_

- Custom SSR routing with Express;
- CSS modules;
- SASS/SCSS transpiling/import;
- MDX support;
- Redux with devtools extension support;

-----

Available Commands
------------------

> **IMPORTANT:** 
> 
> Prepend _ALL_ commands below with `npm run` when executing!

- **`start`**: executes the application in production mode with the Express custom server, `NODE_ENV` flag defined to `production`;
- **`start:next`**: executes the application in production mode the `Next.JS` way, `NODE_ENV` flag defined to `production`;
- **`dev`**: executes the application in development mode with the Express custom server, `NODE_ENV` flag defined to `development`;
- **`dev:next`**: executes the application in development mode the `Next.JS` way, `NODE_ENV` flag defined to `development`;
- **`build`**: generates an optimized build for production, with `Next.JS`;
- **`export`**: generates a static build for the whole project, though **experimental**, since some exports just won't happen as of now (too lazy to solve it now);

> **NOTE:**
> 
> After executing `npm build` for the first time, you can just execute the project by using `node server.js`. Some _hot reloading_ problems might occur, though.

> **IMPORTANT:**
> 
> Some of the features from Express, like SSR routing, aren't available when executing it purely with Next, so do it with **CAUTION**.

-----

Project Structure
-----------------

- **`assets/`**: data files, images, media and other things you import into React should be placed here, they're served publicly, but their names are converted to hashes;
- **`components/`**: components that render something should be placed here;
- **`core/`**: code files that don't render anything should be placed here;
- **`dummy/`**: dummy files used for reference and easy copy/paste (because I'm lazy to search for information);
  - _I know, docs are in portuguese since I wrote'em for myself, will translate these._;
- **`pages/`**: page/view components should be placed in this folder, it also defines the routing used by Next.JS;
  - **`api/`**: we're placing something here for reference, in case you need API endpoints from your project too;
- **`public/`**: publicly available files, which aren't imported, but directly accessed should be placed in this folder here, they're served from root;
- **`routes/`**: route files for SSR should be put in here;
- **`scss/`**: put your style in here;
- **`state/`**: everything Redux should go in here;
- **`.env`**: environment variables file, use it to set flags and other things you don't want to share on repositories, like access keys to services and APIs (put it on `.gitignore` too!);
- **`jsconfig.json`**: for now, we're mostly using it so VS Code (and other IDEs) resolve absolute paths as coming from the repository root so we don't have to use `../`;
- **`next.config.js`**: NextJS custom settings file, can be used for extensions and Webpack customization;
- **`routes.js`**: the master routes file, imports and assigns all approved routes so `server.js` may use'em;
- **`server.js`**: the main application, executes the server and serves routes;

-----

Authors
-------

See [`AUTHORS.md`](AUTHORS.md).

-----

License
-------

This project is licensed under the `MIT License`, please check the `LICENSE.md` file for more details.
