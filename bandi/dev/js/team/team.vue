<template>
    <div class="team">
        <div class="wrap-center">
            <h1 class="base-color">MEET OUR TEAM</h1>
            <div class="icon love-icon"></div>
            <p class="base-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
            <team-gallery></team-gallery>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import TeamGallery from "./team-gallery.vue"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            TeamGallery
        }
    }
</script>