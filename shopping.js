var item = ["Apples", "Oranges", "Peaches"];
var price = [1, 2, 3];
var total = 0;
var itemlist = [];
var pricelist = [];

function add(items) {
  if (items === "apples") {
    itemlist.push(item[0]);
    pricelist.push(price[0]);
  } else if (items === "oranges") {
    itemlist.push(item[1]);
    pricelist.push(price[1]);
  } else if (items === "peaches") {
    itemlist.push(item[2]);
    pricelist.push(price[2]);
  }
}
function checklist(){
  alert(itemlist + " " + pricelist);
}

  function checkout() {
    for (var i = 0; i < pricelist.length; i++) {
  total += pricelist[i]
}
    alert ("$" + total);
  }