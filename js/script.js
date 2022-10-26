
const {createApp } = Vue;
createApp({
    data(){
        return {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            currentElement:0,
            startInterval:"",
        
        }
    },
    methods:{
        slideUp: function(){
            if(this.currentElement<this.slides.length-1)
                this.currentElement++;
            else
            this.currentElement=0;
            },
    
    slideDown: function(){
        if(this.currentElement>0)
        this.currentElement--;
        else
        this.currentElement=this.slides.length-1;
        },
    changeSlider:function(currentPosition){
        this.currentElement=currentPosition;
    },

    startRepeat:function(){
        this.startInterval=setInterval(this.slideUp,1000)
    },
    stopRepeatInterval:function(){
        clearInterval(this.startInterval);
    
    }
    
},
    created:function(){
        this.startRepeat();
    }




}).mount("#app");













