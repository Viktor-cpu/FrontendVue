import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import User from '@/entities/User'
import axios from 'axios';

@Module
export default class ModuleUsers extends VuexModule {

    public _items: Array<User> = []

    get items() : Array<User> {
        return this._items;
    }

    @Mutation
    public setItems(val: Array<User>) {
        this._items = val
    }

    @Action({ commit: 'setItems' })
    public actionItems() {
     //////------------------БЫЛО---------------------------
        const values: Array<User> = []

        axios.get('users').then(res => {
            // console.log(res.statusText)
            res.data.forEach((item:object) => {
                values.push( Object.assign(new User(), item))
            })
        })

        // console.log(values)
        // console.log(this.items)

        return values
        //////---------------------------------------------

        // return axios.get('users').then(res => res.data.data())
    }


}



