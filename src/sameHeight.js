
export function sameHeightF(selector) {
            var elements = document.querySelectorAll(selector),
            max = 0,
            i = 0;
            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight > max) {
                        max = elements[i].offsetHeight;
                    }
                }
            }
            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight < max) {
                        console.log(elements[i].offsetHeight);
                        elements[i].style.height = max + "px";
                        console.log(elements[i].style.height);
                    }
                }
            }
    }

