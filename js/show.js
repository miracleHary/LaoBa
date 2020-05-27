
var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[
            {url:'category.html?id=1',text:'照相机'},
            {url:'category.html?id=2',text:'摄像头'},
            {url:'category.html?id=3',text:'方便面'},
            {url:'category.html?id=4',text:'老八腐乳'}
        ]
    }
})
var category=new Vue({
    el:'#category',
    data:{
        navs:[
            {url:'category.html?id=5',text:'平板电视'},
            {url:'category.html?id=6',text:'马桶'},
            {url:'category.html?id=7',text:'沙发'},
            {url:'category.html?id=8',text:'电热水器'},
            {url:'category.html?id=9',text:'平衡车'},
            {url:'category.html?id=10',text:'扫地机器人'},
            {url:'category.html?id=11',text:'原汁机'},
            {url:'category.html?id=12',text:'冰箱'},
            {url:'category.html?id=13',text:'空调'},
            {url:'category.html?id=14',text:'女表'},
            {url:'category.html?id=15',text:'男表'},
            {url:'category.html?id=16',text:'男士手拿包'},
            {url:'category.html?id=17',text:'男士西服'},
            {url:'category.html?id=18',text:'时尚男鞋'},
            {url:'category.html?id=19',text:'品牌女鞋'},
            {url:'category.html?id=20',text:'太阳镜'},
            {url:'category.html?id=21',text:'安全座椅'}
        ]
    }
})
var cates=new Vue({
    el:'#categoryhide',
    data:{
        rows:[
            {
                cates:[
                    {category:"屏大影院",url:"category.html?id=21"},
                    {category: "周末",url:"category.html?id=21"},
                    {category: "新品特惠",url:"category.html?id=21"},
                    {category: "32吋电视机",url:"category.html?id=21"},
                    {category: "智能网络",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category:"USB高清解",url:"category.html?id=21"},
                    {category: "芒果TV在线",url:"category.html?id=21"},
                    {category: "抢购价",url:"category.html?id=21"},
                    {category: "USB解码",url:"category.html?id=21"},
                    {category: "32英吋",url:"category.html?id=21"},
                    {category: "10核",url:"category.html?id=21"},
                    {category: "TCL品牌日",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category:"不要赠品",url:"category.html?id=21"},
                    {category: "新品上市",url:"category.html?id=21"},
                    {category: "4K硬屏",url:"category.html?id=21"},
                    {category: "领100元券",url:"category.html?id=21"},
                    {category: "智能高清",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "8月，酷暑",url:"category.html?id=21"},
                    {category: "8月大促",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "老八定制",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category:"智能操作系统",url:"category.html?id=21"},
                    {category: "金色外观",url:"category.html?id=21"},
                    {category: "三星屏幕",url:"category.html?id=21"},
                    {category: "客厅爆款",url:"category.html?id=21"},
                    {category: "八核配置",url:"category.html?id=21"},
                    {category: "限时特惠",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category: "限时特惠",url:"category.html?id=21"},
                    {category: "热销爆款",url:"category.html?id=21"},
                    {category: "4K全高清",url:"category.html?id=21"},
                    {category: "六核智能",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "14核4K",url:"category.html?id=21"},
                    {category: "YUNOS",url:"category.html?id=21"},
                    {category: "YUNOS",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "64位处理器",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category: "YUNOS",url:"category.html?id=21"},
                    {category: "微信电视",url:"category.html?id=21"},
                    {category: "4k超清",url:"category.html?id=21"},
                    {category: "64位真4K",url:"category.html?id=21"},
                    {category: "10核机芯",url:"category.html?id=21"},
                    {category: "V字黑釉底座",url:"category.html?id=21"},
                    {category: "4K超清",url:"category.html?id=21"},
                ]
            },
            {
                cates:[
                    {category: "64位14核",url:"category.html?id=21"},
                    {category: "海量影视",url:"category.html?id=21"},
                    {category: "人气爆款",url:"category.html?id=21"},
                    {category: "限时特惠",url:"category.html?id=21"},
                    {category: "真4K屏",url:"category.html?id=21"},
                    {category: "65吋巨屏",url:"category.html?id=21"},
                    {category: "4K超清视界",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "限时特惠",url:"category.html?id=21"}
                ]
            },
            {
                cates:[
                    {category: "55寸旗舰",url:"category.html?id=21"},
                    {category: "4K机皇",url:"category.html?id=21"},
                    {category: "曲面机皇",styles:{color:'rgb(135, 206, 250)'},url:"category.html?id=21"},
                    {category: "轻薄4K",url:"category.html?id=21"}
                ]
            }
        ]
    }
})
var product=new Vue({
    el:"#productshow",
    data:{
        products:[
            {url:"img/9543.jpg",text:"[热销]好先生同款墨镜孙红雷偏光男士太阳镜韩明星",price:"97.5"},
            {url:"img/9532.jpg",text:"[热销]陌森太阳眼镜男女2016偏光定制驾驶近视",price:"518.70"},
            {url:"img/9521.jpg",text:"[热销]帕莎Prsr太阳镜女偏光镜潮范冰冰同款女",price:"624.00"},
            {url:"img/9510.jpg",text:"[热销]变色眼镜男女款半框太阳镜大框潮流防辐射防",price:"170.00"},
            {url:"img/9499.jpg",text:"[热销]新款男士偏光太阳镜日夜两用墨镜潮运动开车",price:"551.00"},
            {url:"img/9499.jpg",text:"[热销]新款男士偏光太阳镜日夜两用墨镜潮运动开车",price:"551.00"}
        ]
    }
})
var good=new Vue({
    el:"#goodshow",
    data:{
        goods:[
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"}
        ]
    }
})
var love=new Vue({
    el:"#loveshow",
    data:{
        loves:[
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"}
        ]
    }
})
var other=new Vue({
    el:"#othershow",
    data:{
        others:[
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"},
            {url:"img/10192.jpg",text:"[热销]新生儿婴儿提篮式安全座椅汽车用车载儿童安",price:"882.00"}
        ]
    }
})