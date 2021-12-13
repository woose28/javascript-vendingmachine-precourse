import VendingMachine from '../store/VendingMachine.js';
import TabProductAdd from '../component/TabProductAdd.js';
import TabMachineManage from '../component/TabMachineManage.js';
import TabPurchase from '../component/TabPurchase.js';

export default class TabContainer {
  constructor($target) {
    this.$target = $target;
    this.tabProductAdd = null;
    this.tabMachineManage = null;
    this.tabPurchase = null;
    this.vendingMachine = new VendingMachine();

    this.init();
  }

  init() {
    this.tabProductAdd = new TabProductAdd(this.$target, {
      addProduct: this.addProduct.bind(this),
    });
    this.tabMachineManage = new TabMachineManage(this.$target, {
      rechargeCoin: this.rechargeCoin.bind(this),
    });
    this.tabPurchase = new TabPurchase(this.$target);
  }

  showFocusedTab() {
    this.tabProductAdd.determineDisplaying();
    this.tabMachineManage.determineDisplaying();
    this.tabPurchase.determineDisplaying();
  }

  addProduct(name, price, quantity) {
    this.vendingMachine.addProduct(name, Number.parseInt(price, 10), Number.parseInt(quantity, 10));
    this.updateProductTable();
  }

  updateProductTable() {
    this.tabProductAdd.updateProductTable();
  }

  rechargeCoin(amount) {
    this.vendingMachine.rechargeCoin(Number.parseInt(amount, 10));
    this.updateRechargeState();
  }

  updateRechargeState() {
    this.tabMachineManage.updateRechargeState();
  }
}
