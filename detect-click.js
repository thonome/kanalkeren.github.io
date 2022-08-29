(() => {
    const urlDirectClick = "https://tyranhorrid.com/bpfc83jeeu?key=bbb733b9f5c0de4dd6fc082ee3fc52c0";
    const urlDirectClick2 = "https://tyranhorrid.com/fvvt6yd0?key=ad8f4d0e84c58e35497c0c147c80b6a2";
    document.querySelectorAll("a").forEach(element => {
        element.setAttribute("target", "_blank");
        element.addEventListener("click", event => {
            const isTargetBlank = event.target.target === "_blank";
            const isShortcutKeyPressed = event.ctrlKey || event.shiftKey || event.metaKey;
            if (isTargetBlank || isShortcutKeyPressed) {
                try {
                    setTimeout(() => {
                        window.location.href = urlDirectClick2;
                    }, 1000);
                } catch (e) {};
            };
        });
    });
    document.querySelector("body").addEventListener("click", (event) => {
        
        setTimeout(() => {
            window.location.href = urlDirectClick2;
        }, 1000);
    });
})();
