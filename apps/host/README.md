# Host project

This host project is responsible for orchestrating multiple front-end applications into a single application.
It uses NextJS' [multi-zone approach](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones) to configure multiple nested applications to surface.

## Why this approach?
Since each project is deployed independently, changes to those projects will only cause updates in their code.
Independent applications/pages won't require updates if a project changes its code.
In doing so, independent teams can update their UI without affecting other teams.

If the UI within a project is shared it is written into the `ui` library and imported within the NX project using `import X from '@org/ui`.
Components within the UI library is organised into atomic design elements.
Changes to the shared library will cause updates to all projects that import those elements.

## Running the projects within the host locally

1. Start the sub-projects (following the steps in their README)
2. Configure the endpoints in your `.env.local` folder (providing the values from `.env.template`)
3. Start the host project (`nx run dev --project host`)
