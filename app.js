new Vue({
    el:'#main',
    data:{
        age:19,
        a:10,
        b:11
        
    },
    methods :{
        
    },
    computed:{
        AddA : function(){
            console.log("A");
            return this.age+ this.a;
            
        },
        AddB : function(){
            console.log("B");
            return this.age+this.b;
        }
    }
});