<template>

    <div>

        <!--        <b-icon-list></b-icon-list>-->

        <div style="margin: 5px 5px 5px 5px">
            <b-button v-b-toggle.sidebar-variant squared variant="outline-secondary" size="sm">
                <b-icon icon="list" font-scale="3"></b-icon>
            </b-button>
        </div>

        <b-sidebar id="sidebar-variant" title="Навигационная панель" backdrop shadow width="20%" no-header-close>

            <template v-slot:default="{ hide }">
                <div class="p-3">

                    <div>
                        <b-button-group vertical class="w-100 mb-1">
                            <b-button to="/" variant="outline-dark" size="lg" squared><b-icon icon="people"></b-icon>  Список</b-button>
                            <b-button to="/ViewCreateUser" class="mt-1" variant="outline-dark" size="lg" squared><b-icon icon="person"></b-icon><b-icon icon="plus" font-scale="0.9"></b-icon>  Создать</b-button>
                            <b-button to="/ViewUpdateUser" class="mt-1" variant="outline-dark" size="lg" squared><b-icon icon="person"></b-icon><b-icon icon="gear" font-scale="0.8"></b-icon>  Обновить</b-button>
                            <b-button to="/ViewDeleteUser" class="mt-1" variant="outline-dark" size="lg" squared><b-icon icon="person"></b-icon><b-icon icon="dash" font-scale="0.9"></b-icon>  Удалить</b-button>
                        </b-button-group>
                    </div>

                    <b-button variant="outline-danger" block @click="hide" class="w-50 mt-4"><b-icon icon="arrow-bar-left"></b-icon> Close Sidebar</b-button>
                </div>
            </template>

        </b-sidebar>

    </div>

</template>

<script>
    export default {
        name: "NavigBar"
    }
</script>

<style scoped>

</style>