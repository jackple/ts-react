import { observable, action } from 'mobx'
import * as api from 'util/api'

class LoginStore {
  @observable
  public userInfo: any = null

  @observable
  public loading: boolean = false

  @action
  getUserInfo() {
    this.loading = true
    api.getUserInfo({}).then(res => {
      this.userInfo = res
      this.loading = false
    }).catch(err => {
      this.loading = false
    })
  }
}

const loginStore = new LoginStore()

export {
  loginStore as default,
  LoginStore
}
