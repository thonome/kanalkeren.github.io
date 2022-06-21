(()=>{
    //-- direct link shoope 
    const costomAds = "https://shope.ee/3ATcAOap0L";
  
    //-- direct link adsterra ads
    //const costomAds = "//tyranhorrid.com/fvvt6yd0?key=ad8f4d0e84c58e35497c0c147c80b6a2";
  
    let elTarget = document.querySelector(".sg-button__text");
    if(elTarget){
      elTarget.addEventListener("click",()=>{
        window.open(costomAds, "_blank");
      });
    };
  })();