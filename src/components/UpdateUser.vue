<template>
    <div>

        <div align="center" style="border-color: gray; border-style: solid; border-width: 1px; margin: 0% 35% 0% 35%; padding: 5px 20px 20px 20px">

            <p style="font-size: 35px">Обновить пользователя</p>

            <p style="font-size: 20px" align="left">Выберите пользователя:</p>
            <b-form-select
                    v-model="selected"
                    :options="items"
                    text-field="secondname"
                    value-field="id"
                    style="margin: 0px 0px 15px 0px;"
            ></b-form-select>

<!--            <b-form @submit="updateButton">-->

                <b-form-group
                        id="input-group-0"
                        label="Уникальный номер пользователя:"
                        label-for="input-0"
                        align="left"
                >
                    <b-form-input
                            id="input-0"
                            v-model="inputId"
                            type="text"
                            placeholder="Disable"
                            disabled
                    ></b-form-input>
                </b-form-group>

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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
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
                            :disabled="boolDisabled"
                    ></b-form-input>
                </b-form-group>

                <b-button squared type="submit" variant="outline-primary" class="mr-5 mt-3" @click="updateButton" :disabled="boolDisabled">Обновить</b-button>
                <b-button squared type="reset" variant="outline-warning" class="ml-5 mt-3" @click="resetUser" :disabled="boolDisabled">Сбросить</b-button>

<!--            </b-form>-->

        </div>

<!--        <b-input-group prepend="id" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputId" disabled></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="username" class="w-25 p-3" >-->
<!--            <b-form-input v-model="inputUsername"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="password" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputPassword"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="firstname" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputFirstname"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="secondname" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputSecondname"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="city" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputCity"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="street" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputStreet"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="homenumber" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputHomenumber"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="apartmentnumber" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputApartmentnumber"></b-form-input>-->
<!--        </b-input-group>-->
<!--        <b-input-group prepend="moneybalance" class="w-25 p-3">-->
<!--            <b-form-input v-model="inputMoneybalance"></b-form-input>-->
<!--        </b-input-group>-->

<!--        <b-button squared variant="outline-primary" class="m-3" @click="updateButton">Обновить</b-button>-->

    </div>
</template>

<script lang="ts" src="./UpdateUserScript.ts">

</script>

<style scoped>

</style>