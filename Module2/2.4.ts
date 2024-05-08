//interface - generic
interface Developer<T, X= null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike?: X;  //bike have or not 
}

type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper: Developer<EmailWatch, null> ={
    name: "Persian",
    computer: {
        brand: "Asus",
        model: "X-255UR",
        releaseYear: 2013,
    },
    smartWatch: {
        brand: "Emilab",
        model: "kw66",
        display: "OLED",
    },
};

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean,
    sleepTrack: boolean,
}

const richDeveloper: Developer<AppleWatch> ={
    name: "Rich Dev",
    computer: {
        brand: "HP",
        model: "X-25UR",
        releaseYear: 2018,
    },
    smartWtach: {
        brand: "Apple Wach",
        model: "Something",
        heartTrack: true,
        sleepTrack: true,
    }
}