import { Visual } from 'ntt-view';
import all from './index';

export default (visual: Visual) => all[visual!.type]!(visual);
