const unlockBtn = document.querySelector(".btn-js");
const main = document.querySelector(".main");
const body = document.querySelector(".body");
const buttonSlap = document.querySelector(`[data-id="slap"]`);
const buttonKiss = document.querySelector(`[data-id="kiss"]`);
const modal = document.querySelector(".modal");
const moreBtn = document.querySelector('[data-id="more"]');
const resultBtn = document.querySelector('[data-id="result"]');
const modalContainerBtn = modal.querySelector(".modal__btn-container-js");
const modalContainerForm = modal.querySelector(".modal__form-container");
const modalContainer = modal.querySelector(".modal__container-js");
const modalContainerGirls = document.querySelector(".modal__select-container-js");
const footer = main.querySelector(".footer-js");

let countGirl = 0;
const maxCountGirl = 12;

unlockBtn.addEventListener("click", () => {
    main.classList.add("main__loading");
    setTimeout(() => {
        main.classList.add("main__gallery");
    }, 2000);
});

const girls = [
    // {
    //     id: 1,
    //     info: "Wendy, 25",
    //     millies: "13",
    //     bg: "./img/content/wendy.jpg",
    // },
    // {
    //     id: 2,
    //     info: "Choi, 37",
    //     millies: "19",
    //     bg: "./img/content/choi.jpg",
    // },
    {
        id: 3,
        info: "Yang, 29",
        millies: "36",
        bg: "./img/content/yang.jpg",
    },
    // {
    //     id: 4,
    //     info: "Min, 23",
    //     millies: "16",
    //     bg: "./img/content/min.jpg",
    // },
    {
        id: 5,
        info: "Amy, 25",
        millies: "47",
        bg: "./img/content/amy.jpg",
    },
    // {
    //     id: 6,
    //     info: "Lily, 27",
    //     millies: "21",
    //     bg: "./img/content/lily.jpg",
    // },
    {
        id: 7,
        info: "Jane, 30",
        millies: "11",
        bg: "./img/content/jane.jpg",
    },
    {
        id: 8,
        info: "Yujin, 25",
        millies: "43",
        bg: "./img/content/yujin.jpg",
    },
    {
        id: 9,
        info: "Jenny, 29",
        millies: "13",
        bg: "./img/content/jenny.jpg",
    },
    {
        id: 10,
        info: "Alice, 22",
        millies: "51",
        bg: "./img/content/alice.jpg",
    },
    {
        id: 11,
        info: "Jiwon, 23",
        millies: "76",
        bg: "./img/content/jiwon.jpg",
    },
    {
        id: 12,
        info: "Min, 30",
        millies: "46",
        bg: "./img/content/min30.jpg",
    },
    {
        id: 13,
        info: "Amy, 27",
        millies: "33",
        bg: "./img/content/amy27.jpg",
    },
    {
        id: 14,
        info: "Jeong, 29",
        millies: "20",
        bg: "./img/content/jeong.jpg",
    },
    {
        id: 15,
        info: "Cindy, 20",
        millies: "63",
        bg: "./img/content/cindy.jpg",
    },
    {
        id: 16,
        info: "Lin, 28",
        millies: "47",
        bg: "./img/content/lin.jpg",
    },
    {
        id: 17,
        info: "Emily, 28",
        millies: "21",
        bg: "./img/content/emily.jpg",
    },
    {
        id: 18,
        info: "Grace, 25",
        millies: "31",
        bg: "./img/content/grace.jpg",
    },
    // {
    //     id: 19,
    //     info: "Kang, 29",
    //     millies: "11",
    //     bg: "./img/content/kang.jpg",
    // },
    {
        id: 20,
        info: "Lucy, 29",
        millies: "45",
        bg: "./img/content/lucy.jpg",
    },
    {
        id: 21,
        info: "Sujin, 25",
        millies: "38",
        bg: "./img/content/sujin.jpg",
    },
    {
        id: 22,
        info: "Zhang, 22",
        millies: "27",
        bg: "./img/content/zhang.jpg",
    },
    {
        id: 23,
        info: "Subin, 21",
        millies: "14",
        bg: "./img/content/subin.jpg",
    },
    {
        id: 24,
        info: "Jessica, 29",
        millies: "41",
        bg: "./img/content/jessica.jpg",
    },
    {
        id: 25,
        info: "Jung, 29",
        millies: "25",
        bg: "./img/content/jung.jpg",
    },
    {
        id: 26,
        info: "Sunny, 19",
        millies: "57",
        bg: "./img/content/sunny.jpg",
    },
    {
        id: 27,
        info: "Sumin, 21",
        millies: "62",
        bg: "./img/content/sumin.jpg",
    },
    {
        id: 28,
        info: "Liu, 22",
        millies: "27",
        bg: "./img/content/liu.jpg",
    },
    {
        id: 29,
        info: "Sarah, 23",
        millies: "19",
        bg: "./img/content/lucy.jpg",
    },
    // {
    //     id: 30,
    //     info: "Yoon, 24",
    //     millies: "49",
    //     bg: "./img/content/yoon.jpg",
    // },
    {
        id: 31,
        info: "Rachel, 25",
        millies: "36",
        bg: "./img/content/rachel.jpg",
    },
    {
        id: 32,
        info: "Tina, 26",
        millies: "22",
        bg: "./img/content/tina.jpg",
    },
    {
        id: 33,
        info: "Vivian, 36",
        millies: "35",
        bg: "./img/content/vivian.jpg",
    },
    {
        id: 34,
        info: "Jisu, 27",
        millies: "10",
        bg: "./img/content/jisu.jpg",
    },
    {
        id: 35,
        info: "Ann, 28",
        millies: "32",
        bg: "./img/content/ann.jpg",
    },
    {
        id: 36,
        info: "Heyjin, 29",
        millies: "21",
        bg: "./img/content/heyjin.jpg",
    },
    {
        id: 37,
        info: "Crystal, 30",
        millies: "18",
        bg: "./img/content/crystal.jpg",
    },
    {
        id: 38,
        info: "Chloe, 31",
        millies: "50",
        bg: "./img/content/chloe.jpg",
    },
    {
        id: 39,
        info: "Zoe, 29",
        millies: "27",
        bg: "./img/content/zoe.jpg",
    },
    {
        id: 40,
        info: "Song, 28",
        millies: "30",
        bg: "./img/content/song.jpg",
    },
    {
        id: 41,
        info: "Jang, 27",
        millies: "20",
        bg: "./img/content/jang.jpg",
    },
    {
        id: 42,
        info: "Cherry, 31",
        millies: "25",
        bg: "./img/content/cherry.jpg",
    },
    {
        id: 43,
        info: "Bella, 28",
        millies: "43",
        bg: "./img/content/bella.jpg",
    },
    // {
    //     id: 44,
    //     info: "Yejin, 27",
    //     millies: "32",
    //     bg: "./img/content/yejin.jpg",
    // },
    {
        id: 45,
        info: "Jo, 26",
        millies: "59",
        bg: "./img/content/jo.jpg",
    },
    {
        id: 46,
        info: "Yuri, 25",
        millies: "17",
        bg: "./img/content/yuri.jpg",
    },
    {
        id: 47,
        info: "Soyeon, 24",
        millies: "31",
        bg: "./img/content/soyeon.jpg",
    },
    {
        id: 48,
        info: "Daisy, 23",
        millies: "51",
        bg: "./img/content/daisy.jpg",
    },
    // {
    //     id: 49,
    //     info: "Minju, 22",
    //     millies: "35",
    //     bg: "./img/content/minju.jpg",
    // },
    {
        id: 50,
        info: "Wendy, 29",
        millies: "40",
        bg: "./img/content/wendy29.jpg",
    },
];

function shuffle(sourceArray) {
    for (var i = 0; i < 12; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray.slice(0, maxCountGirl);
}
const girlsRandom = shuffle(girls);
const girlUpdate = (num) => {
    const girlBg = document.querySelector(".girl-js");
    const girlTitle = document.querySelector(".girl__title-js");
    const distance = document.querySelector(".girl__distance-js");
    let img = document.createElement('img');
    img.src = girlsRandom[num].bg;
    girlBg.src = 'img/content/spin.gif'; 
    girlBg.style = 'object-fit: none;';
    girlTitle.textContent = girlsRandom[num].info;
    distance.textContent = girlsRandom[num].millies;
    img.onload = function() {
      girlBg.style = 'object-fit: cover;';
      girlBg.src = img.src;
    }
};

const selectUpdate = () => {
    const selectGirl = document.querySelector("#select-girl");
    const element = selectGirl.content.cloneNode(true);
    const girlBg = document.querySelector(".girl-js").src;
    const girlTitle = document.querySelector(".girl__title-js").textContent;
    element.querySelector(".select-girl-img-js").src = girlBg;
    element.querySelector(".select-girl-img-js").alt = girlTitle;
    element.querySelector(".modal__select-name-js").textContent = girlTitle;
    modalContainerGirls.append(element);
};

girlUpdate(countGirl);

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

const openModal = () => {
    const bodyItems = body.children;
    modalContainer.append(bodyItems[2]);
    modal.classList.add("modal_opened");
};

const checkLastGirl = () => countGirl < maxCountGirl - 1;

buttonKiss.addEventListener("click", () => (checkLastGirl() ? (selectUpdate(), countGirl++, girlUpdate(countGirl)) : openModal()));

buttonSlap.addEventListener("click", () => (checkLastGirl() ? (countGirl++, girlUpdate(countGirl)) : openModal()));
function tgtrimm(str) {
    var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, "").replace(/\s+/gi, ", ");
    return ars;
}

modalContainerGirls.addEventListener("click", (e) => {
    const method = modal.querySelector(".modal__form-method-js");
    const name = modal.querySelector(".modal__form-name-js");
    const girl = e.target.closest(".modal__select-girl-js");
    const button = e.target.closest(".modal__icon-js");
    if (button) {
        const btn = button.dataset.btn;
        switch (btn) {
            case "video":
                modalContainerForm.classList.add("modal__form-container_active");
                method.textContent = "video call";
                name.textContent = tgtrimm(girl.querySelector(".modal__select-name-js").textContent);
                break;
            case "chat":
                modalContainerForm.classList.add("modal__form-container_active");
                method.textContent = "chat";
                name.textContent = tgtrimm(girl.querySelector(".modal__select-name-js").textContent);
                break;
            default:
                return;
        }
        document.querySelector(".footer").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
});

moreBtn.addEventListener("click", () => modalContainerBtn.classList.add("modal__btn-container_hidden"));
resultBtn.addEventListener("click", () => {
  if(modalContainerGirls.children.length === 0) {
    modalContainerBtn.classList.add("modal__btn-container_hidden");
  } else {
    modal.classList.add("modal_bg");
    modalContainerBtn.classList.add("modal__btn-container_result");
    const formbtn = modal.querySelector('[data-id="register"]');
    formbtn.textContent = "start chating";
  };
});
