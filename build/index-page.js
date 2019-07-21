import engine from './template-engine.js';
import { indexPage } from './bemJSONs.js';

const body = document.body;
body.innerHTML = engine(indexPage);
