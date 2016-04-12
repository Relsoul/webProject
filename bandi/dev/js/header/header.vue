<template id="header">
    <header class="nav-bg">
        <div class="wrap-center">
            <nav class="clearfix">
                <div class="logo">
                    <img src="" alt="">
                    <p></p>
                </div>
                <header-nav-list></header-nav-list>
            </nav>
            <div class="header-text">
                <h1>{{h1}}</h1>
                <h2><span>{{h3.highlight}}</span>{{h3.text}}</h2>
                <p><span class="borderLine"></span>{{p}} <span class="borderLine"></span></p>
            </div>
            <ul class="header-share">
                <li class="icon"></li>
                <li class="icon"></li>
                <li class="icon"></li>
                <li class="icon"></li>
            </ul>
        </div>
    </header>
</template>
<style >

</style>


<script>
    import HeaderNavList from "./header-nav-list.vue"

    export default{
        data(){
            return{
                msg:'hello vue',
                h1:"Meet Brandi!",
                h3:{
                    highlight:"/creative",
                    text:"one page template"
                },
                p:"We are a tearn of professionals"
            }
        },
        components:{
            HeaderNavList
        }
    }
</script>

