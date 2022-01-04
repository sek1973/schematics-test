import { chain, externalSchematic, Rule, schematic } from '@angular-devkit/schematics';
import { Schema } from './schema';

export function newLibrary(options: Schema): Rule {
  return async () => {
    const newProjectRootRule = schematic(
      'new-project-root',
      { name: 'libs' }
    );

    const createNewLibraryRule = externalSchematic(
      "@schematics/angular",
      "library",
      options
    );

    return chain([newProjectRootRule, createNewLibraryRule]);
  };
}
