import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import User from "@/entities/User";
import axios from "axios";

@Component
export default class DeleteUserScript extends Vue {

    public boolDisabled = true

    public items: Array<User> = []

    public selected = 0

    public selectedUser: User | undefined


    public inputApartmentnumber: string | undefined = ""
    public inputCity: string | undefined = ""
    public inputFirstname: string | undefined = ""
    public inputHomenumber: string | undefined = ""
    public inputId: number | undefined = 0
    public inputMoneybalance: number | undefined = 0
    public inputPassword: string | undefined = ""
    public inputSecondname: string | undefined = ""
    public inputStreet: string | undefined = ""
    public inputUsername: string | undefined = ""

    @Watch('selected')
    nameChanged(newVal: number) {
        this.selectedUser = this.items.find(x => x.id == newVal)

        this.inputApartmentnumber = this.selectedUser?.apartmentnumber
        this.inputCity = this.selectedUser?.city
        this.inputFirstname = this.selectedUser?.firstname
        this.inputHomenumber = this.selectedUser?.apartmentnumber
        this.inputId = this.selectedUser?.id
        this.inputMoneybalance = this.selectedUser?.moneybalance
        this.inputPassword = this.selectedUser?.password
        this.inputSecondname = this.selectedUser?.secondname
        this.inputStreet = this.selectedUser?.street
        this.inputUsername = this.selectedUser?.username

        if (this.selected != 0) {
            this.boolDisabled = false
        }
    }

    get fullName(): string {
        return this.fullName
    }

    // get items(): Array<User> {
    //     return this._items;
    // }
    //
    // set items(value: Array<User>) {
    //     this._items = value;
    // }


    public created() {

        this.$store.dispatch("actionItems")
        this.items = this.$store.getters.items

        // console.log(this.items)

    }

    public updateButton() {
        const user: User = new User()
        user.id = this.inputId
        // Не работает update
        user.apartmentnumber = this.inputApartmentnumber
        user.city = this.inputCity
        user.firstname = this.inputFirstname
        user.homenumber = this.inputHomenumber
        user.moneybalance = this.inputMoneybalance
        user.password = this.inputPassword
        user.secondname = this.inputSecondname
        user.street = this.inputStreet
        user.username = this.inputUsername

        axios.put("users", user).then(x=>{
            console.log(x.statusText)
        })
    }

    public resetUser() {
        this.selected = 0
        this.boolDisabled = true
    }

}