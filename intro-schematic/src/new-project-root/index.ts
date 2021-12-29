import { workspaces } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { createHost } from '../common/setup';
import { Schema } from './schema';

export function newProjectRoot(options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const host = createHost(tree);
    let { workspace } = await workspaces.readWorkspace('/', host);

    context.logger.info(`Current root folder for projects & libraries: ${workspace.extensions.newProjectRoot}`);
    context.logger.info(`Requested value: ${options.name}`);

    workspace.extensions.newProjectRoot = options.name;
    return workspaces.writeWorkspace(workspace, host);
  };
}
