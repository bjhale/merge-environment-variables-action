import core from '@actions/core';
import ini from 'ini';

const defaultVariables = ini.parse(core.getInput('default_variables'));
const overrideVariables = ini.parse(core.getInput('override_variables'));
const dynamicVariables = ini.parse(core.getInput('dynamic_variables'));

let vars = {...defaultVariables, ...overrideVariables, ...dynamicVariables};

const merged = ini.stringify(vars);

console.log(merged);

core.setOutput('merged_variables', merged);