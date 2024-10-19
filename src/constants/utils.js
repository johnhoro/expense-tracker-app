const images={
    1: require("../../assets/images/travel1.png"),
    2: require("../../assets/images/travel2.jpg"),
    3: require("../../assets/images/travel3.jpeg"),
    4: require("../../assets/images/travel4.jpeg"),
    5: require("../../assets/images/travel5.png"),
    6: require("../../assets/images/travel6.jpg"),
    7: require("../../assets/images/travel7.jpg"),
    8: require("../../assets/images/travel8.png"),
    9: require("../../assets/images/travel9.png"),
    10: require("../../assets/images/travel10.png"),
    11: require("../../assets/images/travel11.png"),
    12: require("../../assets/images/travel12.png"),
    13: require("../../assets/images/travel13.png"),
}

export function randomImage(){
    let min=1;
    let max=10;
    let random= Math.floor(Math.random()*(max-min+1)) +min;
    return images[random]
}
  // Function to generate sober (pastel/muted) colors
export const getSoberColor = () => {
    const baseColor = 180; // Base value to keep the colors light (between 150 and 255)
    const red = Math.floor(Math.random() * 56) + baseColor; // Limit range to pastel colors
    const green = Math.floor(Math.random() * 56) + baseColor;
    const blue = Math.floor(Math.random() * 56) + baseColor;
    
    return `rgb(${red}, ${green}, ${blue})`;
  };
  