import core from '@actions/core';
import mergeVariables from './src/mergeVariables.js';
import { markdownTable } from 'markdown-table';

const defaultVariables = core.getInput('default_variables');
const dynamicVariables = core.getInput('dynamic_variables') ?? '';
const overrideVariables = core.getInput('override_variables').replaceAll(",", "\n") ?? ''; //Convert comma delimited to new line

const merged = mergeVariables(defaultVariables, overrideVariables, dynamicVariables)

core.setOutput('merged_variables', merged);

const table = markdownTable(
  [
    ['Variable', 'Value'],
    ...merged.split('\n').map((line) => line.split('='))
  ]
);

console.log(table);