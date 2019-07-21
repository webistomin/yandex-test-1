import engine from './template-engine.js';
import { productPage } from './bemJSONs.js';

const body = document.body;
body.innerHTML = engine(productPage);
