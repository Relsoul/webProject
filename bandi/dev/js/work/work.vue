<template>
    <div class="work">
        <div class="wrap-center">
            <h1 class="base-color">WORK</h1>
            <div class="icon love-icon"></div>
            <p class="base-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
            <work-tab></work-tab>
        </div>
        <work-img-gallery></work-img-gallery>
    </div>
</template>
<style>




</style>
<script>
    import WorkTab from "./work-tab.vue"
    import WorkImgGallery from "./work-imgGallery.vue"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            WorkTab,
            WorkImgGallery
        }
    }

</script>