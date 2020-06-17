<template>

    <div>

        <div align="center" style="border-color: gray; border-style: solid; border-width: 1px; margin: 0% 35% 0% 35%; padding: 5px 20px 20px 20px">

            <p style="font-size: 35px">Создать пользователя</p>

<!--            <b-form @submit="selectCreateButton">-->

                <b-form-group
                        id="input-group-1"
                        label="Логин:"
                        label-for="input-1"
                        align="left"
                >
                    <b-form-input
                            id="input-1"
                            v-model="inputUsername"
                            type="text"
                            placeholder="Enter username"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-2"
                        label="Пароль:"
                        label-for="input-2"
                        align="left"
                >
                    <b-form-input
                            id="input-2"
                            v-model="inputPassword"
                            type="password"
                            placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-3"
                        label="Имя:"
                        label-for="input-3"
                        align="left">
                    <b-form-input
                            id="input-3"
                            v-model="inputFirstname"
                            type="text"
                            placeholder="Enter first name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-4"
                        label="Фамилия:"
                        label-for="input-4"
                        align="left">
                    <b-form-input
                            id="input-4"
                            v-model="inputSecondname"
                            type="text"
                            placeholder="Enter second name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-5"
                        label="Город:"
                        label-for="input-5"
                        align="left">
                    <b-form-input
                            id="input-5"
                            v-model="inputCity"
                            type="text"
                            placeholder="Enter city"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-6"
                        label="Улица:"
                        label-for="input-6"
                        align="left">
                    <b-form-input
                            id="input-6"
                            v-model="inputStreet"
                            type="text"
                            placeholder="Enter street"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-7"
                        label="Номер дома:"
                        label-for="input-7"
                        align="left">
                    <b-form-input
                            id="input-7"
                            v-model="inputHomenumber"
                            type="text"
                            placeholder="Enter home number"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-8"
                        label="Номер квартиры:"
                        label-for="input-8"
                        align="left">
                    <b-form-input
                            id="input-8"
                            v-model="inputApartmentnumber"
                            type="text"
                            placeholder="Enter apartment number"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-9"
                        label="Балланс счёта:"
                        label-for="input-9"
                        align="left">
                    <b-form-input
                            id="input-9"
                            v-model="inputMoneybalance"
                            type="number"
                            placeholder="Enter money balance"
                    ></b-form-input>
                </b-form-group>

                <b-button squared variant="outline-success" class="mr-5 mt-3" @click="selectCreateButton">Создать</b-button>
                <b-button squared variant="outline-warning" class="ml-5 mt-3" @click="resetBtn">Сбросить</b-button>

<!--            </b-form>-->

<!--            <b-input-group prepend="username" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputUsername"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="password" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputPassword"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="firstname" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputFirstname"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="secondname" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputSecondname"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="city" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputCity"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="street" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputStreet"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="homenumber" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputHomenumber"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="apartmentnumber" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputApartmentnumber"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-input-group prepend="moneybalance" class="w-25 p-3">-->
<!--                <b-form-input v-model="inputMoneybalance"></b-form-input>-->
<!--            </b-input-group>-->
<!--            <b-button squared variant="outline-success" class="m-3" v-on:click="selectCreateButton">Создать</b-button>-->
        </div>

    </div>

</template>

<script lang="ts" src="./CreateUserScript.ts">
    // export default {
    //     name: "CreateUser"
    // }
</script>

<style scoped>

</style>