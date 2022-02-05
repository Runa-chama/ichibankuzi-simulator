let items = [
  "タペストリー　スペシャルウィーク", "タペストリー　サイレンススズカ",
  "タペストリー　トウカイテイオー", "イラストボード",
  "アクリルスタンド", "アクリッツチャーム①",
  "アクリッツチャーム②", "アクリッツチャーム③"
];

let value_boxes = [
  document.getElementById("item_A"), document.getElementById("item_B"),
  document.getElementById("item_C"), document.getElementById("item_D"),
  document.getElementById("item_E"), document.getElementById("item_F"),
  document.getElementById("item_G"), document.getElementById("item_H")
];

let name_setboxes = [
  document.getElementById("item_A_setname"), document.getElementById("item_B_setname"),
  document.getElementById("item_C_setname"), document.getElementById("item_D_setname"),
  document.getElementById("item_E_setname"), document.getElementById("item_F_setname"),
  document.getElementById("item_G_setname"), document.getElementById("item_H_setname")
];

let name_boxes = [
  document.getElementById("item_A_name"), document.getElementById("item_B_name"),
  document.getElementById("item_C_name"), document.getElementById("item_D_name"),
  document.getElementById("item_E_name"), document.getElementById("item_F_name"),
  document.getElementById("item_G_name"), document.getElementById("item_H_name")
];

let result_boxes = [
  document.getElementById("item_A_result"), document.getElementById("item_B_result"),
  document.getElementById("item_C_result"), document.getElementById("item_D_result"),
  document.getElementById("item_E_result"), document.getElementById("item_F_result"),
  document.getElementById("item_G_result"), document.getElementById("item_H_result")
];

let random_lotteries = [];
let all_lotteries = 0;

function count_lotteries() {
  all_lotteries = 0;
  value_boxes.forEach(function (value_box) {
    all_lotteries += Number(value_box.value);
    document.getElementById("lotteries").value = all_lotteries;
  });
}

function set_name() {
  for (let i = 0; i < items.length; i++) {
    items[i] = name_setboxes[i].value;
    name_boxes[i].value = items[i];
  }
}

function shuffler() {
  rondom_lotteries = [];
  drew = 0;
  document.getElementById("reload_button").disabled = true;
  for (let i = 0; i < all_lotteries; i++)
    random_lotteries.push(i)

  let l = random_lotteries.length
  while (l) {
    var r = Math.floor(Math.random() * l);
    var c = random_lotteries[--l];
    random_lotteries[l] = random_lotteries[r];
    random_lotteries[r] = c;
  }
  document.getElementById("reload_button").disabled = false;
  document.getElementById("drew_times").value = drew;
}

function reset() {
  random_lotteries = [];
  count_lotteries();
  shuffler();
  set_name(onload);
  result_boxes.forEach(function (result_box) {
    result_box.value = 0;
  });
  document.getElementById("spent_money").value = 0;
}

window.onload = function () {
  for (let i = 0; i < items.length; i++) {
    name_setboxes[i].value = items[i];
  }
  reset();
  console.log(items);
}

let drew = 0;
function draw() {
  let i_n = [
    Number(value_boxes[0].value), Number(value_boxes[1].value),
    Number(value_boxes[2].value), Number(value_boxes[3].value),
    Number(value_boxes[4].value), Number(value_boxes[5].value),
    Number(value_boxes[6].value), Number(value_boxes[7].value)
  ];
  let draw_times = Number(document.getElementById("times").value) + drew;

  let price = Number(document.getElementById("price").value);

  for (let i = 0 + drew; i < draw_times; i++) {
    if (all_lotteries == 0) {
      document.getElementById("lotteries").value = 0;
      rabdin_lottery = [];
      break;
    }

    let random_lottery = random_lotteries[i];
    drew++;
    all_lotteries--;
    console.log(random_lottery);
    if (random_lottery < i_n[0]) {
      result_boxes[0].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1])) {
      result_boxes[1].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1] + i_n[2])) {
      result_boxes[2].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1] + i_n[2] + i_n[3])) {
      result_boxes[3].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1] + i_n[2] + i_n[3] + i_n[4])) {
      result_boxes[4].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1] + i_n[2] + i_n[3] + i_n[4] + i_n[5])) {
      result_boxes[5].value++;
    }
    else if (random_lottery < (i_n[0] + i_n[1] + i_n[2] + i_n[3] + i_n[4] + i_n[5] + i_n[6])) {
      result_boxes[6].value++;
    }
    else {
      result_boxes[7].value++;
    }
    document.getElementById("lotteries").value = all_lotteries;
    document.getElementById("drew_times").value = drew;
    document.getElementById("spent_money").value = Number(document.getElementById("spent_money").value) + price;
  }
}

function reload() {
  reset();
}