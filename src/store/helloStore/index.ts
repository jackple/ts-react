import { observable, action } from 'mobx'
import * as api from 'util/api'

class HelloStore {
  @observable
  public userInfo: any = null

  @observable
  public loading: boolean = false

  @action
  getUserInfo = async(): Promise<any> => {
    this.loading = true
    try {
      const res = await api.getUserInfo({})
      this.userInfo = res
    } catch (err) {}
    this.loading = false
  }

  @action
  getError = () => {
    api.getError({})
  }
}

const helloStore = new HelloStore()

export {
  helloStore as default,
  HelloStore
}
