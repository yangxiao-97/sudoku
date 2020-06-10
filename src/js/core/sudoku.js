//游戏生成
//1、生成随机数独面板
//2、按比例随机去除部分数据
const Generator = require("./generator");

module.exports = class Sudoku {
  constructor() {
    //生成解决方案
    const generator = new Generator();
    generator.generate();
    this.solutionMatrix = generator.matrix;
  }

  make(level = 5) {
    //生成面板
    this.puzzleMatrix = this.solutionMatrix.map(row => {
      return row.map(cell => Math.random() * 9 < level ? 0 : cell);
    });
  }
}