import core from '@actions/core';
import mergeVariables from './src/mergeVariables.js';

const defaultVariables = core.getInput('default_variables');
const dynamicVariables = core.getInput('dynamic_variables') ?? '';
const overrideVariables = core.getInput('override_variables').replace(",", "\n") ?? ''; //Convert comma delimited to new line

const merged = mergeVariables(defaultVariables, overrideVariables, dynamicVariables)

core.setOutput('merged_variables', merged);