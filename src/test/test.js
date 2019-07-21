var templateEngine = function (obj) {
  if (typeof obj !== 'object') {
    console.error(`Необходимо передать объект, а был передан ${typeof obj}`);
    return ''
  }
  
  if (Object.keys(obj).length === 0) {
    console.error('Вы передали пустой объект');
    return ''
  }
  
  const DEFAULT_TAG = 'div';
  
  const getHTML = (BEMJSON, context) => {
    let result = '';
    
    if (!BEMJSON) {
      return '';
    }
    
    if (BEMJSON.block) {
      context = BEMJSON.block;
    }
    
    if (Array.isArray(BEMJSON)) {
      BEMJSON.forEach((item) => {
        result += getHTML(item, context);
      });
      return result;
    }
    
    let tag = BEMJSON.tag || DEFAULT_TAG;
    let res = `<${tag} ${getClass(BEMJSON, context)}${getAttributes(BEMJSON)}>`;
  
    if (tag === 'img') {
      return `${res}${getHTML(BEMJSON.content, context)}`;
    }
    return `${res}${getHTML(BEMJSON.content, context)}</${tag}>`;
  };
  
  const getClass = (BEMJSON, context) => {
    if (context && BEMJSON.elem && !BEMJSON.block) {
      BEMJSON.block = context;
    }
    
    let cls = getBemClass(BEMJSON);
    
    if (BEMJSON.cls) {
      cls = `${cls} ${BEMJSON.cls}`;
    }
    
    if (cls === '') {
      return '';
    }
    
    return `class="${cls}"`
  };
  
  const getBemClass = (BEMJSON, context) => {
    let block = BEMJSON.block || context;
    
    if (BEMJSON.bem === false || !block) {
      return '';
    }
    
    let base = block + (BEMJSON.elem ? '__' + BEMJSON.elem : '');
    let res = (base === context) ? '' : base;
    let mods = BEMJSON.elem ? BEMJSON.elemMods : BEMJSON.mods;
    
    if (mods) {
      for (let i in mods) {
        if (typeof mods[i] === 'number') {
          mods[i] += '';
        }
        if (mods[i]) {
          res += ' ' + base + '_' + i + (mods[i] === true ? '' : '_' + mods[i]);
        }
      }
    }
    
    if (BEMJSON.mix) {
      if (!Array.isArray(BEMJSON.mix)) {
        BEMJSON.mix = [BEMJSON.mix];
      }
      for (let i = 0; i < BEMJSON.mix.length; i++) {
        let mix = BEMJSON.mix[i];
        if (!mix) {
          continue;
        }
        res += ' ' + getBemClass(mix, block);
      }
    }
    
    return res;
  };
  
  const getAttributes = (BEMJSON) => {
    if (!BEMJSON.attrs) {
      return '';
    }
    let attrs = '';
    
    for (let key in BEMJSON.attrs) {
      let attr = BEMJSON.attrs[key];
      
      if (attr !== null && attr !== undefined) {
        attrs = `${attrs} ${key}="${attr}"`;
      }
    }
    return attrs;
  };
  
  return getHTML(obj);
};
var should = require('should');

describe('Проверка функции:', function () {
  it('Корректно добавляет классы', function () {
    var BEMJSON = {
      block: 'my-block',
      mix: [
        {block: 'other-block', mods: {'mod-name': 'mod-value'}},
        {block: 'other-block', elem: 'second-elem', elemMods: {'elem-mod-name': 'elem-mod-value'}}
      ]
    };
    templateEngine(BEMJSON).should.equal('<div class="my-block other-block other-block_mod-name_mod-value other-block__second-elem other-block__second-elem_elem-mod-name_elem-mod-value"></div>');
  });
  
  it('Использует правильный тэг', function () {
    var BEMJSON = {
      block: 'layout',
      content: [
      {
        block: 'page-header',
        tag: 'header',
        content: {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center'
          }
        }
      }]
    };
    templateEngine(BEMJSON).should.equal('<div class="layout"><header class="page-header"><div class="layout__container layout__container_size_m layout__container_align_center"></div></header></div>');
  });
  
  it('Корректно добавляет аттрибуты', function () {
    var BEMJSON = {
      block: 'header',
      content: {
        elem: 'img',
        tag: 'img',
        attrs: {
          src: '../img/image-placeholder-inverse.svg',
          alt: 'Инопланетное существо'
        }
      }
    };
    templateEngine(BEMJSON).should.equal('<div class="header"><img class="header__img" src="../img/image-placeholder-inverse.svg" alt="Инопланетное существо"></div>');
  });
});
