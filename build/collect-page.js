import engine from './template-engine.js';
import { collectPage } from './bemJSONs.js';

const body = document.body;
body.innerHTML = engine(collectPage);
