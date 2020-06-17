import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import User from "@/entities/User";
import axios from "axios";

@Component
export default class DeleteUserScript extends Vue {

    public user: User = new User()

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


    public selectCreateButton() {
        this.user.apartmentnumber = this.inputApartmentnumber
        this.user.city = this.inputCity
        this.user.firstname = this.inputFirstname
        this.user.homenumber = this.inputHomenumber
        this.user.moneybalance = this.inputMoneybalance
        this.user.password = this.inputPassword
        this.user.secondname = this.inputSecondname
        this.user.street = this.inputStreet
        this.user.username = this.inputUsername

        axios.post('users', this.user).then(x => {
            console.log(x.statusText)
        })
    }

    public resetBtn() {
        this.inputApartmentnumber = ""
        this.inputCity = ""
        this.inputFirstname = ""
        this.inputHomenumber = ""
        this.inputMoneybalance = 0
        this.inputPassword = ""
        this.inputSecondname = ""
        this.inputStreet = ""
        this.inputUsername = ""
    }

}