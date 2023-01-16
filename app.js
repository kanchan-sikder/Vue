new Vue({
    el:'#main',
    data:{
        available:false,
        nearby:false
    },
    methods :{
        
    },
    computed:{
        change:function(){
            return{
                available:this.available,
                nearby:this.nearby
            };
        }
    }
});