// ==UserScript==
// @name         Youtube hotkeys unfucker
// @match        https://*.youtube.com/*
// @match        https://youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    function stop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
    }

    function handle_ev(ev) {
        switch(ev.key) {
            case "Home":
                window.scroll({top: 0, left: 0, behavior: "smooth"});
                stop(ev);
                break;
            case "PageUp":
                window.scrollBy({top: -window.innerHeight, behavior: "smooth"});
                stop(ev);
                break;
            case "PageDown":
                window.scrollBy({top: window.innerHeight, behavior: "smooth"});
                stop(ev);
                break;
        }
    }

    document.addEventListener("keydown", handle_ev, true);
})();
