import { deepMerge } from 'grommet/utils';
import { neo as defaultNeo } from '.';

const neo = deepMerge(defaultNeo, {
  title: 'Yahoo',
});

console.log('NEO', neo.title);

export default neo;
