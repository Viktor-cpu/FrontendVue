import InterfaceUser from "@/entities/InterfaceUser";


export default class User{

    public id: number | undefined = 0;

    public firstname: string | undefined = '';
    public secondname: string | undefined = '';

    public username: string | undefined = '';
    public password: string | undefined = '';

    public city: string | undefined = '';
    public street: string | undefined = '';
    public homenumber: string | undefined = '';
    public apartmentnumber: string | undefined = '';

    public moneybalance: number | undefined = 0;

    // apartmentnumber: string = '';
    // city: string = '';
    // firstname: string = '';
    // homenumber: string = '';
    // id: number= 0;
    // moneybalance: number = 0;
    // password: string = '';
    // secondname: string = '';
    // street: string = '';
    // username: string = '';

}