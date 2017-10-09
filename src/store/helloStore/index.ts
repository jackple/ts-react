import { observable, action } from 'mobx'

import { StoreExt } from 'util/reactExt'

class HelloStore extends StoreExt {
  @observable
  public userInfo: any = null

  @observable
  public loading: boolean = false

  @action
  getUserInfo = async(): Promise<any> => {
    this.loading = true
    try {
      const res = await this.api.getUserInfo({})
      this.userInfo = res
      this.$message.success('success!!!')
    } catch (err) {}
    this.loading = false
  }

  @action
  getError = () => {
    this.api.getError({})
  }
}

const helloStore = new HelloStore()

export {
  helloStore as default,
  HelloStore
}
