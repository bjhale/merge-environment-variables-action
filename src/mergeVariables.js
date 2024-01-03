import dotenv from 'dotenv';
import ini from 'ini';
import variableExpand from './variableExpand.js';

export default function mergeVariables(defaultVariables, overrideVariables = '', dynamicVariables = '') {
  //Parse out default and override variables;
  const defaultVars = dotenv.parse(defaultVariables);
  const overrideVars = dotenv.parse(overrideVariables);

  //Parse out dynamic variables and expand them using either the environment or previous default/override vars.
  const dynamicVars = variableExpand(dotenv.parse(dynamicVariables), { 
    ...process.env, 
    ...defaultVars, 
    ...overrideVars
  });

  return ini.stringify({ ...defaultVars, ...overrideVars, ...dynamicVars });

}