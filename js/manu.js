(() => {
    const refs = {
        openManuBtn: document.querySelector("[data-manu-open]"),
        closeManuBtn: document.querySelector("[data-manu-close]"),
        manu: document.querySelector("[data-manu]"),
    };

    refs.openManuBtn.addEventListener("click", toggleManu);
    refs.closeManuBtn.addEventListener("click", toggleManu);

    function toggleManu() {
        refs.manu.classList.toggle("is-hidden");
    }
    })();