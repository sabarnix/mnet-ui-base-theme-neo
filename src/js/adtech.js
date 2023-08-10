import { deepMerge } from 'grommet/utils';
import { neo as defaultNeo } from '.';

const neo = deepMerge(defaultNeo, {
  title: 'Ad.Tech',
});

export default neo;
