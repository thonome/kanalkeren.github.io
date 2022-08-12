const mapNextAds = ["https://new.kanalkeren.my.id/main.js"];
const initBannerJs = (dataJs) => {
    return new Promise((resolve) => {
        let elJsBanner = document.createElement("script");
        elJsBanner.setAttribute("src", dataJs);
        document.body.append(elJsBanner);
        elJsBanner.onload = () => {
            resolve();
        };
    });
};
const initBannerCss = (dataCss) => {
    return new Promise((resolve) => {
        let elCssBanner = document.createElement("link");
        elCssBanner.setAttribute("rel", "stylesheet");
        elCssBanner.setAttribute("type", "text/css");
        elCssBanner.setAttribute("href", dataCss);
        document.head.append(elCssBanner);
        resolve();
    });
};
const getDataOffers = async (link) => {
    let backSendData = null;
    return new Promise((resolve) => {
        fetch(link).then(response => response.json()).then(function(data) {
            try {
                const keyOffer = data.offers;
                const randomKeyOffer = keyOffer[parseInt(Math.random() * keyOffer.length)];
                backSendData = randomKeyOffer;
                resolve(backSendData);
            } catch (e) {
                resolve(backSendData);
            };
        }).catch((error) => {
            resolve(backSendData);
        });
    });
};

function loadNextAds() {
    (() => {
        for (let dataMapAds of mapNextAds) {
            const elMapAds = document.createElement("script");
            elMapAds.setAttribute("src", dataMapAds);
            document.querySelector("body").append(elMapAds);
        };
        window.scrollTo({
            top: 0
        });
    })();
};
let statusClickSwallClose = false;

function closeSwallFromAdClick() {
    statusClickSwallClose = true;
    Swal.close();
};
(async () => {
    const urlOpenClick = "https://t.co/pH5kDAc2kj";
    let urlOpenClick2 = "https://t.co/pH5kDAc2kj";
    let htmlOpen = `<a href="https://t.co/pH5kDAc2kj" target="_blank" rel="nofollow" onclick="closeSwallFromAdClick()"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTs-bq5TS0miT9g6PyMhbBxZgcLbmQLGlw4EpXJelYl72lwgJ5AYBq1O3l4ddyVy91B0pfFObDDbPzqnrngnJp8LMnErj7dntJ560imGn0cl51IoZfOBiGKaPpSevql2RTk6AAJS6odr35fa8vlC0153KTDFlflHhsAYeLuDuNW3eHX5eY8HOvsYtR/s16000/Festival%20Pilih%20Lokal%2017.8%20-%20IG%20Story_TikTok.jpg" /></a>`;
    await initBannerJs("https://new.kanalkeren.my.id/sweetalert2.min.js");
    await initBannerCss("https://new.kanalkeren.my.id/sweetalert2.min.css");
    Swal.fire({
        title: "",
        html: htmlOpen,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Please Wait...',
        didOpen: async () => {
            let buttonAdsConfirm = Swal.getConfirmButton();
            await buttonAdsConfirm.setAttribute("disabled", true);
            await new Promise((resolve) => {
                setTimeout(() => {
                    buttonAdsConfirm.removeAttribute("disabled");
                    buttonAdsConfirm.innerText = "Cek Info";
                    resolve();
                }, 2000);
            });
        },
        willClose: () => {
            if (statusClickSwallClose == false) {
                if (locCountry && locCountry == "ID") {
                    window.open(urlOpenClick, "_blank");
                } else {
                    window.open(urlOpenClick2, "_blank");
                };
            };
            loadNextAds();
        }
    });
})();
