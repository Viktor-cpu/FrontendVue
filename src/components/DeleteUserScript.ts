import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import axios from "axios";

@Component
export default class DeleteUserScript extends Vue {

    public boolDisabled = true

    public items: Array<object> = []

    // private selected : number = 0 ;

    public selected = ""

    // get items(): Array<object> {
    //     return this._items;
    // }

    // set items(value: Array<object>) {
    //     this._items = value;
    // }

    @Watch('selected')
    nameChanged(newVal: number) {

        if (this.selected != "") {
            this.boolDisabled = false
        }

    }


    public created() {

        this.$store.dispatch("actionItems")
        this.items = this.$store.getters.items

        // console.log(this.items)

    }

    public deleteButton() {

        axios.delete("users/" + this.selected).then(x => {
            console.log(x.statusText)
        })

        this.boolDisabled = true

        this.selected = ""

    }


}