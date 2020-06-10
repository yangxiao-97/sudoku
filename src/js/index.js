const Grid = require("./ui/grid");
const PopupNumbers = require("./ui/popupnumbers");

function main() {
  const $container = $("#container");
  const $popupNumbers = $("#popupNumbers");

  const grid = new Grid($container);
  grid.bindPopup(new PopupNumbers($popupNumbers));
  grid.rebuild();

  // 绑定按钮事件
  $("#check").on("click", () => {
    if (grid.check()) {
      alert("成功");
    }
  });
  $("#reset").on("click", () => grid.reset());
  $("#clear").on("click", () => grid.clear());
  $("#rebuild").on("click", () => grid.rebuild());

  // 容器改变大小时需要重新计算每个方格的高度
  $(window).on("resize", () => grid.layout());
}

main();




// const Grid = require("./ui/grid");
// const PopupNumbers = require("./ui/popupnumbers");
// // const matrix = toolkit.makeMatrix();
// const grid = new Grid($("#container"));
// grid.build();
// grid.layout();

// const popupnumbers = new PopupNumbers($("#popupNumbers"));
// grid.bindPopup(popupnumbers);

// $("#check").on("click", e => {
//   if (grid.check()) {
//     alert("成功");
//   }
// });

// $("#reset").on("click", e => {
//   grid.reset();
// });

// $("#clear").on("click", e => {
//   grid.clear();
// });

// $("#rebuild").on("click", e => {
//   grid.rebuild();
// });