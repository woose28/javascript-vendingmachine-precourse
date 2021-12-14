import { TAG } from '../../constant/dom.js';

export default class AmountView {
  constructor(targetId, labelName, initialMoney) {
    this.$target = document.createElement(TAG.TAG_H4);
    this.labelName = labelName;
    this.targetId = targetId;

    this.render(initialMoney);
  }

  render(money) {
    this.$target.innerHTML = this.template(money);
  }

  template(money) {
    return `
      <span>${this.labelName}:</span>
      <span id="${this.targetId}">${money === null ? '' : money}</span>
      <span>${money === null ? '' : '원'}</span>
    `;
  }

  getTarget() {
    return this.$target;
  }
}
