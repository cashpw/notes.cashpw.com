const Selector = {
  INGREDIENT_LABELS: 'div.ingredients ul li label',
  SERVINGS_HEADER: '#servings-heading',
  YIELD_HEADER: '#yield-heading',
  SERVINGS_CELL: '#servings-cell',
  YIELD_CELL: '#yield-cell',
  RECIPE_META: '.recipe-meta',
};

function createCheckboxListItem(label, id) {
  return '<li>'
    + '<input type="checkbox" id="'+id+'">' 
    + '<label style="padding-left: 10px;" for="'+id+'">' + label + '</label>'
    + '</li>';
}

function maybeAddScaleInput() {
  const servings_cell = document.querySelector(Selector.SERVINGS_CELL);
  const yield_cell = document.querySelector(Selector.YIELD_CELL);
  if (!servings_cell && !yield_cell) {
    return;
  }

  var recipeMeta = document.querySelector(Selector.RECIPE_META);
  if (!recipeMeta) {
    return;
  }

  const twoTimesScaler = '<button class="scaler" onclick="scale(2)">2x</button>';
  const fourTimesScaler = '<button class="scaler" onclick="scale(4)">4x</button>';
  const eightTimesScaler = '<button class="scaler" onclick="scale(8)">8x</button>';
  const custonScaler = '<input id="scaler" class="scaler" type="number" min="0" placeholder="custom" onchange="scale(this.value)"/>';
  const scalers = twoTimesScaler + fourTimesScaler + eightTimesScaler + custonScaler

  recipeMeta.insertAdjacentHTML('afterend', '<div class="recipe-scaler" id="scalers">Scale by ' + scalers + '</div>');
}

function scale(factor) {
    scaleIngredients(factor);
    scaleMeta(factor);
    disableScalers();
}

/** Scale recipe metadata by FACTOR. */
function scaleMeta(factor) {
   scaleServings(factor);
   scaleYield(factor);
}

/** Scale ingredients in the table by FACTOR. */
function scaleIngredients(factor) {
  document.querySelectorAll("div.ingredients table th+th+th").forEach((quantityHeader) => {
    quantityHeader.innerHTML = `${quantityHeader.innerHTML} x${factor}`;
  });

  document.querySelectorAll("div.ingredients table tbody td+td+td").forEach((quantity) => {
    quantity.innerHTML = scaleRecipe.scale(quantity.innerHTML, factor);
  });
}

/** Set serving text based on scaling FACTOR. */
function scaleServings(factor) {
  const servings_header = document.querySelector(Selector.SERVINGS_HEADER);
  if (!servings_header) {
    return;
  }
  servings_header.innerHTML = `${servings_header.innerHTML} x${factor}`;

  const servings_cell = document.querySelector(Selector.SERVINGS_CELL);
  if (!servings_cell) {
    return;
  }
  const [_, numServings, extra] = servings_cell.textContent.match(/^([0-9]+)(.*)/);
  // Double-up on parseFloat to remove trialing zeros decimals (.e.g parseFloat("2.00") -> "2")
  const scaledServings = parseFloat(parseFloat(numServings * factor).toFixed(2));
  servings_cell.innerHTML = `${scaledServings}${extra}`;
}

/** Set yield text based on scaling FACTOR. */
function scaleYield(factor) {
  const yield_header = document.querySelector(Selector.YIELD_HEADER);
  if (!yield_header) {
    return;
  }
  yield_header.innerHTML = `${yield_header.innerHTML} x${factor}`;

  const yield_cell = document.querySelector(Selector.YIELD_CELL);
  if (!yield_cell) {
    return;
  }
  yield_cell.innerHTML = scaleRecipe.scale(yield_cell.innerHTML, factor);
}

function disableScalers() {
  const scalers = document.querySelector("#scalers");
  if (!scalers) {
    return;
  }

  scalers.innerHTML = '<p style="font-size: 0.8em">Refresh to change scaling.</p>';
}

maybeAddScaleInput();

document.querySelectorAll('div.ingredients ul li').forEach((ingredientListItem, index) => {
  ingredientListItem.outerHTML = createCheckboxListItem(ingredientListItem.innerHTML, index);
});
