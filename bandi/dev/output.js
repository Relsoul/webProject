/**
 * Created by soul on 2016/3/26.
 */


/*let child=new class extends Vue {
    constructor(){
        super();
        this.template="#nav-list";
        this.props=["items"];
        this.methods={
            notify(){
                alert(1)
            }
        }
    }

};*/

/*let child=Vue.extend();*/

import HeaderNav from "./js/header/header.vue"
import Features from "./js/features/features.vue"
import Work from "./js/work/work.vue"
import Team from "./js/team/team.vue"

new Vue({
    el:"body",
    components:{
        HeaderNav,
        Features,
        Work,
        Team
    }
});




