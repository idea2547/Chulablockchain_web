if (typeof document !== 'undefined') {
    let faqs = document.querySelectorAll(".faq");

    for (let i = 0; i < faqs.length; i++) {
        let answer = faqs[i].querySelector(".faq-answer");
        let icon = faqs[i].querySelector(".arrow-down");

        faqs[i].addEventListener("click", () => {
            for (let j = 0; j < faqs.length; j++) {
                let answer2 = faqs[j].querySelector(".faq-answer");
                let icon2 = faqs[j].querySelector(".arrow-down");

                if (faqs[i] != faqs[j]) {
                    answer2.style.maxHeight = "0px";
                    icon2.classList.replace("rotate-180", "rotate-0");
                }
            }

            if (icon.classList.contains("rotate-180")) {
                answer.style.maxHeight = 0 + "px";
                icon.classList.replace("rotate-180", "rotate-0");
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.classList.replace("rotate-0", "rotate-180");
            }
        });
    }

}

