import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import User from "@/entities/User";
import setTimeout = jest.setTimeout;
// import axios from 'axios';
// import { namespace } from 'vuex-class'
// const test = namespace('test')
// import Test from '@/store/modules/test'
// import {getModule} from "vuex-module-decorators";

// import { getModule } from "vuex-module-decorators";
// import UserAdmin from "@/store/modules/test";
//
// const userAdminState = getModule(Test);


@Component
export default class HelloWorld extends Vue {

    public items: Array<User> = []

    // public items: Array<object> = []


    // get items(): Array<User> {
    //     return this._items;
    // }
    //
    // set items(value: Array<User>) {
    //     this._items = value;
    // }




    public created(){
    // public beforeUpdate(){
    //     console.log("created")
        this.$store.dispatch("actionItems")
        this.items = this.$store.getters.items
         // console.log(this.$store.getters.items)
        // console.log(this.items)
    }




}