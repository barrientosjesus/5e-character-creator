const BG_IMAGES = {
    GOOD: [
        "https://i.imgur.com/qmWEHAP.png",
        "https://i.imgur.com/7YuSAt5.png",
        "https://i.imgur.com/OBu3C4j.png",
        "https://i.imgur.com/PxsP6j8.png",
        "https://i.imgur.com/m6CIb6x.png",
        "https://i.imgur.com/MYbEysi.png"
    ],
    BAD: [
        "https://i.imgur.com/rqgn5Wr.png",
        "https://i.imgur.com/pGcxe76.png",
        "https://i.imgur.com/ucyD5Gy.png",
        "https://i.imgur.com/EYS4q9M.png",
        "https://i.imgur.com/m6CIb6x.png",
        "https://i.imgur.com/MYbEysi.png"
    ],
};

const CLASS_LOOKUP = {
    Barbarian: {
        color: "#E7623E",
        img: "https://i.imgur.com/GuZWwUQ.png",
        bgIMG: BG_IMAGES.BAD
    },
    Bard: {
        color: "#AB6DAC",
        img: "https://i.imgur.com/pzUugz7.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Cleric: {
        color: "#91A1B2",
        img: "https://i.imgur.com/oYskm76.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Druid: {
        color: "#7A853B",
        img: "https://i.imgur.com/zn8XmCr.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Fighter: {
        color: "#51A5C5",
        img: "https://i.imgur.com/RuRMPrO.png",
        bgIMG: BG_IMAGES.BAD
    },
    Monk: {
        color: "#51A5C5",
        img: "https://i.imgur.com/XtP5ekj.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Paladin: {
        color: "#B59E54",
        img: "https://i.imgur.com/HRDVdaV.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Ranger: {
        color: "#507F62",
        img: "https://i.imgur.com/TXuwZaH.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Rogue: {
        color: "#bfba2a",
        img: "https://i.imgur.com/x4qvZM6.png",
        bgIMG: BG_IMAGES.BAD
    },
    Sorcerer: {
        color: "#992E2E",
        img: "https://i.imgur.com/8BCn1qu.png",
        bgIMG: BG_IMAGES.BAD
    },
    Warlock: {
        color: "#7B469B",
        img: "https://i.imgur.com/UXPp1Qu.png",
        bgIMG: BG_IMAGES.BAD
    },
    Wizard: {
        color: "#2A50A1",
        img: "https://i.imgur.com/ZTVfN4L.png",
        bgIMG: BG_IMAGES.BAD
    }
};

module.exports = { CLASS_LOOKUP };