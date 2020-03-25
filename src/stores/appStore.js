import { observable } from 'mobx';

class AppStore {
  @observable sidebar = {
    isOpen: false
  }
}

const store = new AppStore()

export default store