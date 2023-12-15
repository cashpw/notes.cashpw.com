const Selector = {
  INGREDIENT_LABELS: 'div.ingredients ul li label',
  SERVINGS: '#servings',
};

function createCheckboxListItem(label, id) {
  return '<li>'
    + '<input type="checkbox" id="'+id+'">' 
    + '<label style="padding-left: 10px;" for="'+id+'">' + label + '</label>'
    + '</li>';
}

function maybeAddScaleInput() {
  const servings = document.querySelector(Selector.SERVINGS);
  if (!servings) {
    return;
  }

  var ingredientsHeader = document.querySelector("#ingredients");
  if (!ingredientsHeader) {
    return;
  }

  const twoTimesScaler = '<button class="scaler" onclick="scale(2)">2x</button>';
  const fourTimesScaler = '<button class="scaler" onclick="scale(4)">4x</button>';
  const eightTimesScaler = '<button class="scaler" onclick="scale(8)">8x</button>';
  const custonScaler = '<input id="scaler" class="scaler" type="number" min="0" placeholder="custom" onchange="scale(this.value)"/>';
  const scalers = twoTimesScaler + fourTimesScaler + eightTimesScaler + custonScaler

  ingredientsHeader.insertAdjacentHTML('beforebegin', '<div id="scalers">Scale by ' + scalers + '</div>');
}

function scale(factor) {
    scaleTable(factor);
    updateServings(factor);
    disableScalers();
}

/** Scale ingredients in the table by FACTOR. */
function scaleTable(factor) {
  document.querySelectorAll("div.ingredients table th+th+th").forEach((quantityHeader) => {
    quantityHeader.innerHTML = `${quantityHeader.innerHTML} x${factor}`;
  });

  document.querySelectorAll("div.ingredients table tbody td+td+td").forEach((quantity) => {
    quantity.innerHTML = scaleRecipe.scale(quantity.innerHTML, factor);
  });
}

/** Set serving text based on scaling FACTOR. */
function updateServings(factor) {
  const servings = document.querySelector(Selector.SERVINGS);
  if (!servings) {
    return;
  }

  const [_, numServings, extra] = servings.textContent.match(/^([0-9]+)(.*)/);
  servings.innerHTML = `${numServings}${extra} x ${factor} = ${numServings * factor}${extra}`;
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
