new Vue({
    el:'#main',
    data:{
        name: 'Kanchan',
        job: 'Student',
        website:'https://www.google.com',
        webtag:'<a href="https://www.google.com">Link for html to render</a>'
    },
    methods :{
        greet: function(time){
            return ('Good '+ time+' '+this.name);
        }
    }
});