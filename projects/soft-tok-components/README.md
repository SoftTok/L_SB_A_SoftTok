

Publishing the library:
The library is published from the dist/soft-tok-components directory
You can build the library using npm run build which runs ng build
The build process uses ng-packagr (Angular's library packaging tool)
The entry point is defined in src/public-api.ts which exports components
Opening Storybook:
You can run Storybook using npm run storybook which runs ng run soft-tok-components:storybook
The Storybook configuration is in projects/soft-tok-components/.storybook
Storybook runs on port 6006 by default
To build Storybook for static hosting, you can use npm run build-storybook
The Storybook static output goes to the storybook-static directory
To summarize:
Publish from: dist/soft-tok-components (after running npm run build)
Open Storybook: Run npm run storybook from the workspace root directory