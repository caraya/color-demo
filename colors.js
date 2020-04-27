import * as fs from 'fs'

const newDefaults = [
  // whites
  ['white', '#fffefc'],
  ['pearl', '#fbfcf7'],
  ['alabaster', '#fefaf0'],
  ['snow', '#f4fefd'],
  ['ivory', '#fef7e5'],
  ['cream', '#fffbda'],
  ['eggshell', '#fef9e3'],
  ['cotton', '#fbfcf7'],
  ['chiffon', '#fafaf1'],
  ['salt', '#f8efec'],
  ['lace', '#faf3ea'],
  ['coconut', '#fff1e6'],
  ['linen', '#f2ebd3'],
  ['bone', '#e7dfcc'],
  ['porcelain', '#fffffc'],
  ['parchment', '#fcf6df'],
  ['rice', '#fbf6ef'],
  // blues
  ['blue', '#0074d9'],
  ['navy', '#001f3f'],
  ['aqua', '#7fdbff'],
  ['sky', '#00b2ff'],
  ['teal', '#39cccc'],
  ['slate', '#757b87'],
  ['indigo', '#281e5d'],
  ['cobalt', '#1438bd'],
  ['ocean', '#026063'],
  ['peacock', '#002d37'],
  ['azure', '#1621a6'],
  ['cerulean', '#0592c2'],
  ['lapis', '#2632c2'],
  ['spruce', '#2c3e4b'],
  ['stone', '#59788d'],
  ['aegean', '#1e456e'],
  ['berry', '#24146f'],
  ['denim', '#141e3c'],
  ['admiral', '#061094'],
  ['sapphire', '#52b2c0'],
  ['arctic', '#82edfd'],
  // browns
  ['tan', '#e5dbac'],
  ['beige', '#ecdc99'],
  ['macaroon', '#f7df75'],
  ['hazelwood', '#c9bc8e'],
  ['granola', '#d6b75a'],
  ['oat', '#dec98a'],
  ['eggnog', '#fbe29d'],
  ['fawn', '#c7a951'],
  ['sugarcookie', '#f3ebad'],
  ['sand', '#d7b963'],
  ['sepia', '#e3b678'],
  ['latte', '#e9c17b'],
  ['oyster', '#dcd69f'],
  ['biscotti', '#e3c565'],
  ['parmesean', '#fee993'],
  ['hazelnut', '#bda55d'],
  ['sandcastle', '#dbc27d'],
  ['buttermilk', '#fdefb2'],
  ['sanddollar', '#ebe7b9'],
  ['shortbread', '#fce791'],
  // yellows
  ['yellow', '#ffdc00'],
  ['canary', '#fac801'],
  ['gold', '#f9a602'],
  ['daffodil', '#feee88'],
  ['flaxen', '#d5b65a'],
  ['butter', '#fee226'],
  ['lemon', '#effd5f'],
  ['mustard', '#e9b829'],
  ['corn', '#e4cd04'],
  ['medallion', '#e4b103'],
  ['dandelion', '#fdce2a'],
  ['bumblebee', '#fce206'],
  ['banana', '#fcf4a3'],
  ['butterscotch', '#fabd04'],
  ['dijon', '#c29200'],
  ['honey', '#ec9707'],
  ['blonde', '#fdeb75'],
  ['pineapple', '#ffe327'],
  ['tuscansun', '#fcd12a'],
  // oranges
  ['orange', '#ff851b'],
  ['tangerine', '#f98228'],
  ['merigold', '#fdae1d'],
  ['cider', '#b66827'],
  ['rust', '#8c4005'],
  ['ginger', '#bc5703'],
  ['tiger', '#fb6b02'],
  ['bronze', '#b2560c'],
  ['cantaloupe', '#fca172'],
  ['apricot', '#ed810f'],
  ['carrot', '#ed7116'],
  ['squash', '#c95c09'],
  ['spice', '#7a3a03'],
  ['marmalade', '#d16102'],
  ['amber', '#893201'],
  ['sandstone', '#d57128'],
  ['yam', '#cc5801'],
  // reds
  ['red', '#ff4136'],
  ['cherry', '#9a0f02'],
  ['rose', '#e2252a'],
  ['jam', '#600f0b'],
  ['merlot', '#541f1b'],
  ['garnet', '#5f0a04'],
  ['crimson', '#b8100a'],
  ['ruby', '#900503'],
  ['scarlet', '#910d08'],
  ['redwine', '#4c0805'],
  ['redapple', '#a91b0d'],
  ['mahogany', '#420d09'],
  ['blood', '#710c04'],
  ['sangria', '#5f1914'],
  ['currant', '#670c07'],
  ['blush', '#bb544a'],
  ['candy', '#d31603'],
  ['lipstick', '#9b0f02'],
  // pinks
  ['pink', '#f69acd'],
  ['fuchsia', '#f012be'],
  ['punch', '#f25278'],
  ['watermelon', '#fe809c'],
  ['flamingo', '#fda4b8'],
  ['rouge', '#f26c8c'],
  ['salmon', '#fdab9f'],
  ['coral', '#fe7d67'],
  ['peach', '#fb9483'],
  ['strawberry', '#fc4c4e'],
  ['rosewood', '#a04242'],
  ['lemonade', '#fabacb'],
  ['taffy', '#fa85c4'],
  ['bubblegum', '#fd5ca8'],
  ['balletslipper', '#f69abf'],
  ['crepe', '#f1b7c6'],
  ['maroon', '#85144b'],
  ['hotpink', '#ff1696'],
  // purples
  ['purple', '#b10dc9'],
  ['mauve', '#7a4a89'],
  ['violet', '#710193'],
  ['boysenberry', '#630536'],
  ['lavender', '#e3a0f6'],
  ['plum', '#601a36'],
  ['lilac', '#b65fcd'],
  ['periwinkle', '#be93d4'],
  ['eggplant', '#311431'],
  ['iris', '#9866c5'],
  ['heather', '#9b7cb9'],
  ['amethyst', '#a45de4'],
  ['raisin', '#290916'],
  ['orchid', '#af69ee'],
  ['mulberry', '#4d0220'],
  // greens
  ['green', '#2ecc40'],
  ['chartreuse', '#b0fd38'],
  ['juniper', '#395311'],
  ['sage', '#728c69'],
  ['lime', '#01ff70'],
  ['fern', '#5dbc64'],
  ['olive', '#98bf64'],
  ['emerald', '#038911'],
  ['pear', '#74b62d'],
  ['moss', '#476d1e'],
  ['shamrock', '#03ac13'],
  ['seafoam', '#3cec96'],
  ['pine', '#24501e'],
  ['parakeet', '#02c04a'],
  ['mint', '#98ecc3'],
  ['seaweed', '#354b21'],
  ['pickle', '#5a7d36'],
  ['pistachio', '#b2d3c1'],
  ['basil', '#32622d'],
  ['crocodile', '#5f7c3a'],
  // browns
  ['brown', '#241709'],
  ['coffee', '#4b371c'],
  ['mocha', '#3c290d'],
  ['peanut', '#795c34'],
  ['carob', '#35260f'],
  ['hickory', '#371d10'],
  ['pecan', '#4a2512'],
  ['walnut', '#432711'],
  ['caramel', '#66360f'],
  ['gingerbread', '#5d2c04'],
  ['chocolate', '#2c1603'],
  ['tortilla', '#9a7b4f'],
  ['umber', '#352415'],
  ['tawny', '#7e491d'],
  ['brunette', '#391e07'],
  ['cinammon', '#642b0d'],
  ['penny', '#522915'],
  // greys
  ['grey', '#aaaaaa'],
  ['shadow', '#373737'],
  ['graphite', '#584d5b'],
  ['iron', '#332d31'],
  ['pewter', '#6a6880'],
  ['cloud', '#c5c5d0'],
  ['silver', '#dddddd'],
  ['smoke', '#59515f'],
  ['anchor', '#42424c'],
  ['ash', '#554c4d'],
  ['porpoise', '#4d4c5c'],
  ['dove', '#7c6e7f'],
  ['fog', '#655965'],
  ['flint', '#7d7c9c'],
  ['pebble', '#333333'],
  ['lead', '#403f4e'],
  ['coin', '#9897a9'],
  ['fossil', '#787276'],
  // blacks
  ['black', '#111111'],
  ['ebony', '#080401'],
  ['crow', '#25221F'],
  ['charcoal', '#222022']
];

/**
 * @name generateCustomProperty
 * @description generate -- style custom properties
 */
export function generateCustomProperty() {
  const writer = fs.createWriteStream('new-default-props.css');

  writer.write(':root { \n')
  newDefaults.forEach((color) => writer.write(`\t--color-${color[0]}: ${color[1]};\n`))
  writer.write('}\n');

}

generateCustomProperty();


/**
 * @name generateCCSSProperty
 * @description generate @property style custom properties
 */
export function generateCSSProperty() {
  const writer = fs.createWriteStream('new-defaults.css');

  writer.write(':root { \n')
  newDefaults.forEach((color) => writer.write(`@property --color-${color[0]} {
    syntax: "<color>";
    initialValue: "${color[1]}";
    inherits: true;\n}\n\n`))
  writer.write('}\n');
  writer.end();
}

generateCSSProperty();

/**
 * @name generateJSProps
 * @description generate Javascript CSS.registerProperty blocks
 */
export function generateJSProps() {
  const writer = fs.createWriteStream('new-defaults.js');

  newDefaults.forEach((color) => writer.write(`window.CSS.registerProperty({
    name: '--color-${color[0]}',
    syntax: '<color>',
    inherits: true,
    initialValue: '${color[1]}',
  });\n\n`))
  writer.end();
}

generateJSProps();