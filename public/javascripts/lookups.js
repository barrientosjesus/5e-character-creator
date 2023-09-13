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
        color: "231, 98, 62",
        img: "https://i.imgur.com/GuZWwUQ.png",
        bgIMG: BG_IMAGES.BAD
    },
    Bard: {
        color: "171, 109, 172",
        img: "https://i.imgur.com/pzUugz7.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Cleric: {
        color: "145, 161, 178",
        img: "https://i.imgur.com/oYskm76.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Druid: {
        color: "122, 133, 59",
        img: "https://i.imgur.com/zn8XmCr.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Fighter: {
        color: "127, 81, 62",
        img: "https://i.imgur.com/RuRMPrO.png",
        bgIMG: BG_IMAGES.BAD
    },
    Monk: {
        color: "81, 165, 197",
        img: "https://i.imgur.com/XtP5ekj.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Paladin: {
        color: "181, 158, 84",
        img: "https://i.imgur.com/HRDVdaV.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Ranger: {
        color: "80, 127, 98",
        img: "https://i.imgur.com/TXuwZaH.png",
        bgIMG: BG_IMAGES.GOOD
    },
    Rogue: {
        color: "191, 186, 42",
        img: "https://i.imgur.com/x4qvZM6.png",
        bgIMG: BG_IMAGES.BAD
    },
    Sorcerer: {
        color: "153, 46, 46",
        img: "https://i.imgur.com/8BCn1qu.png",
        bgIMG: BG_IMAGES.BAD
    },
    Warlock: {
        color: "123, 70, 155",
        img: "https://i.imgur.com/UXPp1Qu.png",
        bgIMG: BG_IMAGES.BAD
    },
    Wizard: {
        color: "42, 80, 161",
        img: "https://i.imgur.com/ZTVfN4L.png",
        bgIMG: BG_IMAGES.BAD
    }
};

module.exports = { CLASS_LOOKUP };