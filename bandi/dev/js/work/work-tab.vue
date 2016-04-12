<template>
    <ul class="work-tab-list">
        <li v-for="(index,item) in items" :class="index==0?'work-current':''" >{{item}}</li>
    </ul>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
               items:["All","Branding","Web","Logo Design","Photography"]
            }
        },
        components:{

        }
    }
</script>