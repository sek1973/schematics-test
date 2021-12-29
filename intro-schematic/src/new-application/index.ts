import { chain, externalSchematic, Rule, schematic } from '@angular-devkit/schematics';
import { Schema } from './schema';

export function newApplication(options: Schema): Rule {
  return async () => {
    const newProjectRootAsAppRule = schematic(
      'new-project-root',
      { name: 'apps' }
    );

    const createNewApplicationRule = externalSchematic(
      "@schematics/angular",
      "application",
      options
    );

    const newProjectRootAsLibRule = schematic(
      'new-project-root',
      { name: 'apps' }
    );

    return chain([
      newProjectRootAsAppRule,
      createNewApplicationRule,
      newProjectRootAsLibRule
    ]);
  };
}
