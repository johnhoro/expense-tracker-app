const images={
    1: require("../../assets/images/travel1.png"),
    2: require("../../assets/images/travel2.jpg"),
    3: require("../../assets/images/travel3.jpeg"),
    4: require("../../assets/images/travel4.jpeg"),
    5: require("../../assets/images/travel5.jpg"),
    6: require("../../assets/images/travel6.jpg"),
    7: require("../../assets/images/travel7.jpg"),
    8: require("../../assets/images/travel8.png"),
    9: require("../../assets/images/travel9.png"),
    10: require("../../assets/images/travel10.png"),
    11: require("../../assets/images/travel11.png"),
    12: require("../../assets/images/travel12.png"),
    13: require("../../assets/images/travel13.png"),
    14: require("../../assets/images/travel9.png"),
    15: require("../../assets/images/travel10.png"),
    16: require("../../assets/images/travel11.png"),
    17: require("../../assets/images/travel12.png"),
    18: require("../../assets/images/travel13.png"),
}

export function randomImage(){
    let min=1;
    let max=13;
    let random= Math.floor(Math.random()*(max-min+1)) +min;
    console.log(random, "random")
    return images[random]
}