<template>
    <div>

        <div align="center" style="border-color: gray; border-style: solid; border-width: 1px; margin: 0% 35% 0% 35%; padding: 20px 20px 20px 20px">
            <p style="font-size: 35px">Удалить пользователя</p>

            <p style="font-size: 20px" align="left">Выберите пользователя:</p>
            <b-form-select
                    v-model="selected"
                    :options="items"
                    text-field="secondname"
                    value-field="id"
            ></b-form-select>

            <div class="mt-3">Уникальный номер удаляемого пользователя: <strong>{{ selected }}</strong></div>
            <b-button squared variant="outline-danger" class="mt-3" v-on:click="deleteButton" :disabled="boolDisabled">Удалить</b-button>
        </div>


    </div>
</template>

<script lang="ts" src="./DeleteUserScript.ts">
    // export default {
    //     name: "DeleteUser"
    // }
</script>

<style scoped>

</style>