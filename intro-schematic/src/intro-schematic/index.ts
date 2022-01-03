import { normalize, strings, workspaces } from '@angular-devkit/core';
import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, SchematicsException, Tree, url } from '@angular-devkit/schematics';
import { createHost } from '../common/setup';
import { Schema } from './schema';

export function introSchematic(options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // context.addTask(new NodePackageInstallTask());

    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace('/', host);

    if (!options.project && typeof workspace.extensions.defaultProject === 'string') {
      options.project = workspace.extensions.defaultProject;
    }

    const project = (options.project != null) ? workspace.projects.get(options.project) : null;
    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    const projectType = project.extensions.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name
      }),
      move(normalize(options.path as string))
    ]);

    const root = workspace.extensions.newProjectRoot;
    context.logger.info(`Root value: ${root}`);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}
