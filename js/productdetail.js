$(document).ready(function () {
   var img=new Vue({
       el:"#imgs",
       data:{
           imgs:[
               {url:"img/productSingle_small/8620.jpg"},
               {url:"img/productSingle_small/8619.jpg"},
               {url:"img/productSingle_small/8618.jpg"},
               {url:"img/productSingle_small/8617.jpg"},
               {url:"img/productSingle_small/8616.jpg"}
           ]
       }
   })
   $("#imgs .smallImage").click(function () {
          $(".bigImg").attr("src",this.src);
          $(this).addClass("active").siblings().removeClass("active");
   })
    var pdetail=new Vue({
        el:"#infoInimgAndInfo",
        data:{
            pprice:399.00,
            pcprice:379.05,
            selled:50,
            comment:19,
            stock:66,
            inputVal:1,
        },
        watch:{
           inputVal:function (val) {
               if(this.inputVal<0){
                   this.inputVal=0;
               }
               if(this.inputVal>this.stock){
                   this.inputVal=this.stock
               }
           }
        }
    })

    $(".addCartLink").click(function () {
         cart.cartcount+=1;
         
    })
})