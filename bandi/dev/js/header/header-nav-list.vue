<template id="nav-list">
    <ul class="nav-list">
        <li v-for="item in items" v-on:click="notify">{{item}}</li>
    </ul>
</template>
<style>

</style>

<script>
    export default{
        data(){
            return{
                items:["Home","Features","Works","Team","Contact"]
            }
        },
        methods:{
            notify(){
                alert(1)
            }
        }
    }
</script>