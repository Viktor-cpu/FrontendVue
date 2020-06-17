<template>
    <div>

        <b-container fluid>

            <b-row>
                <b-col>
                    <div id="qwe">
                        <p style="font-size: 35px">Список пользователей.</p>
                        <b-table :items="items" foot-clone head-variant="light" caption-top>

                        </b-table>
                    </div>
                </b-col>
            </b-row>

<!--            <b-sidebar no-close-on-backdrop="" id="sidebar-1" title="Sidebar" shadow>-->
<!--                <div class="px-3 py-2">-->
<!--                    <p>-->
<!--                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis-->
<!--                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.-->
<!--                    </p>-->
<!--                    <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>-->
<!--                </div>-->
<!--            </b-sidebar>-->

<!--            <b-row class="text-center">-->
<!--                <div v-for="item in items" v-bind:key="item.id">-->
<!--                    <b-col class="py-2 px-3">-->
<!--                        <b-card-->
<!--                                v-bind:title="item.firstname"-->
<!--                                img-src="https://picsum.photos/600/300/?image=25"-->
<!--                                img-alt="Image"-->
<!--                                img-top-->
<!--                                tag="article"-->
<!--                                style="max-width: 20rem;"-->
<!--                                class="mb-2"-->
<!--                        >-->
<!--                            <b-collapse id="my-collapse">-->
<!--                                <b-card-text>-->
<!--                                    {{item.firstname}}-->
<!--                                </b-card-text>-->
<!--                            </b-collapse>-->

<!--                            <b-button v-b-toggle.my-collapse variant="primary">Подробнее</b-button>-->
<!--                        </b-card>-->
<!--                    </b-col>-->
<!--                </div>-->
<!--            </b-row>-->

        </b-container>


    </div>
</template>

<script lang="ts" src="./HomeScript.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    #qwe {
        padding: 20px 0px;
        margin: 0 auto;
    }

</style>
