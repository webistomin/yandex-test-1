import engine from './template-engine.js';
import { contentPage } from './bemJSONs.js';

const body = document.body;
body.innerHTML = engine(contentPage);
