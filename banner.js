const mapNextAds = [
	"https://new.kanalkeren.my.id/costom-botton-shoope.js",
	"https:///new.kanalkeren.my.id/main.js",
	"https:///new.kanalkeren.my.id/detect-click.js"
];

const initBannerJs = (dataJs)=>{
	return new Promise((resolve)=>{
		let elJsBanner = document.createElement("script");
		elJsBanner.setAttribute("src",dataJs);
		document.body.append(elJsBanner);
		elJsBanner.onload = ()=>{
			resolve();
		};
	});
};

const initBannerCss = (dataCss)=>{
	return new Promise((resolve)=>{
		let elCssBanner = document.createElement("link");
		elCssBanner.setAttribute("rel","stylesheet");
		elCssBanner.setAttribute("type","text/css");
		elCssBanner.setAttribute("href",dataCss);
		document.head.append(elCssBanner);
		resolve();
	});
};

const getDataOffers = async (link)=>{
	let backSendData=null;
	return new Promise((resolve)=>{
		fetch(link)
		.then(response => response.json())
		.then(function (data) {
			try{
				const keyOffer = data.offers;
				const randomKeyOffer = keyOffer[parseInt(Math.random() * keyOffer.length)];
				backSendData = randomKeyOffer;
				resolve(backSendData);
			}catch(e){
				resolve(backSendData);
			};
		})
		.catch((error) => {
		   resolve(backSendData);
		});
	});
};

function loadNextAds(){
	(()=>{
		for(let dataMapAds of mapNextAds){
			const elMapAds = document.createElement("script");
			elMapAds.setAttribute("src",dataMapAds);
			document.querySelector("body").append(elMapAds);
		};
		window.scrollTo({top: 0});
	})();
};

let statusClickSwallClose = false;
function closeSwallFromAdClick(){
	statusClickSwallClose = true;
	Swal.close();
};

const locCountryAxis = async ()=>{
	return new Promise((resolve)=>{
		let checksIntv = setInterval(()=>{
			try{
				const aaa = locCountry;
				clearInterval(checksIntv);
				resolve();
			}catch(e){};
		},100);
	})
}

(async ()=>{
	await locCountryAxis();
	const urlOpenClick = "https://shope.ee/10QnyATHHe";
	const urlOpenClick2 = "https://tyranhorrid.com/fvvt6yd0?key=ad8f4d0e84c58e35497c0c147c80b6a2";
	await initBannerJs("https:///new.kanalkeren.my.id/sweetalert2.min.js");
	await initBannerCss("https:///new.kanalkeren.my.id/sweetalert2.min.css");

	if(locCountry && locCountry!="ID"){
		window.scrollTo({top: 0});
	  	setTimeout(()=>{
	  		loadNextAds();
	  	},1000);
	};

	let title_dom = `Belanja di Shopee Pasti Gratis Ongkir ke Seluruh Indonesia`;
	let html_dom = `<a href="`+urlOpenClick+`"><img src="https://new.kanalkeren.my.id/10.10_Parade_Diskon.jpg" style="width: 100%;"/></a>`;

	if(locCountry && locCountry!="ID"){
		title_dom = "";
		html_dom = `<div id="container-ads-300-250"></div>`;
	};

	Swal.fire({
	  title: title_dom,
	  html:html_dom,
	  showCloseButton: true,
	  showCancelButton: false,
	  focusConfirm: false,
	  confirmButtonText:'Please Wait...',
	  didOpen: async () => {
	  	let buttonAdsConfirm = Swal.getConfirmButton();
	  	await buttonAdsConfirm.setAttribute("disabled",true);

	  	// costom banner popup 300x250 IF COUNTRY NOT FROM LOCATION ID---------------
	  	if(locCountry && locCountry!="ID"){
			let elJsBannerParam = document.createElement("script");
			await elJsBannerParam.setAttribute("type","text/javascript");
			elJsBannerParam.innerHTML  = `
				atOptions = {
					'key' : '10b9f17b7fbf36641cfe20266207ef2a',
					'format' : 'iframe',
					'height' : 250,
					'width' : 300,
					'params' : {}
				};
			`;
			await document.getElementById("container-ads-300-250").append(elJsBannerParam);
	  		let elJsBannerPopup = document.createElement("script");
	  		await elJsBannerPopup.setAttribute("type","text/javascript");
			await elJsBannerPopup.setAttribute("src","https://www.tyranhorrid.com/10b9f17b7fbf36641cfe20266207ef2a/invoke.js");
			await document.getElementById("container-ads-300-250").append(elJsBannerPopup);
	  	};

		await new Promise((resolve)=>{
			setTimeout(()=>{
				buttonAdsConfirm.removeAttribute("disabled");
				buttonAdsConfirm.innerText = "Tutup Iklan";
				resolve();
			},1000);
		});
	  },
	  willClose: () => {
	  	if(statusClickSwallClose==false){
	  		if(locCountry && locCountry=="ID"){
		  		// window.open(urlOpenClick,"_blank");
		  		window.scrollTo({top: 0});
			  	setTimeout(()=>{
			  		loadNextAds();
			  	},1000);
		  	}else{
		  		window.open(urlOpenClick2,"_blank");
		  	};
	  	};
	  }
	});
})();
