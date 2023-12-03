export function hover() {
    const list = document.querySelectorAll(".menu li a");

    list.forEach(li => {
        li.addEventListener("mouseover", () => {
            list.forEach(el => {
                if (el !== li) {
                    el.style.color = "#eaeaea";
                }
            })
        })
        li.addEventListener("mouseout", () => {
            list.forEach(el => {
                if (el !== li) {
                    el.style.color = "#22242a";
                }
            });
        });
    })
}
