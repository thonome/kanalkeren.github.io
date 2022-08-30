const mapNextAds = ["new.kanalkeren.my.id/costom-botton-shoope.js", "https://new.kanalkeren.my.id/main.js", "https://new.kanalkeren.my.id/detect-click.js"];
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
(async()=> {
    await locCountryAxis();
    const urlOpenClick="https://shope.ee/10QnyATHHe";
    const urlOpenClick2="https://tyranhorrid.com/fvvt6yd0?key=ad8f4d0e84c58e35497c0c147c80b6a2";
    await initBannerJs("https://new.kanalkeren.my.id/sweetalert2.min.js");
    await initBannerCss("https://new.kanalkeren.my.id/sweetalert2.min.css");
    if(locCountry&&locCountry!="ID") {
        window.scrollTo({
        top:0
    });
        setTimeout(()=> {
            loadNextAds();
        }, 1000);
    };
    let title_dom=`Belanja di Shopee Gratis Ongkir Seluruh Indonesia`;
    let html_dom=`<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEih1stovjQY7Wtr31iHiYfn4eV_jjvxTI9lWHcqxl9Q9M-DyfLgNrSQioNe8roUeZl15BTvGqSO7VEQWFgiOfdOC7KPFyAJHg1E71HFIlUv7C3zM09dRz4SQPfyP23GvgX5hPXgskPEBf017gw7EzL0OEl-GdO-tvbR1h5mi-Q0ND2vTfP1Mcng0jCe/w400-h400/unnamed%20(1).jpg" style="width: 100%;"/>`;
    if(locCountry&&locCountry!="ID") {
        title_dom="";
        html_dom=`<div id="container-ads-300-250"></div>`;
};
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
            if(locCountry&&locCountry!="ID") {
                let elJsBannerParam=document.createElement("script");
                await elJsBannerParam.setAttribute("type","text/javascript");
                elJsBannerParam.innerHTML=`
                atOptions = {
                    'key' : '5b9bb815a5d7f812bbd4762237899e19',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            await document.getElementById("container-ads-300-250").append(elJsBannerParam);
            let elJsBannerPopup=document.createElement("script");
            await elJsBannerPopup.setAttribute("type","text/javascript");
            await elJsBannerPopup.setAttribute("src","https://tyranhorrid.com/5b/9b/b8/5b9bb815a5d7f812bbd4762237899e19.js");
            await document.getElementById("container-ads-300-250").append(elJsBannerPopup);
        };
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
