// TS ESM loader for dev. Registers ts-node without the deprecated --loader flag.
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('ts-node/esm', pathToFileURL('./'));
