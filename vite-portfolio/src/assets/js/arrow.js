export function arrow() {
    const icon = document.querySelector('.icon');
    const arrow = document.querySelectorAll('svg');

    arrow.forEach(arrow => {

        arrow.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 1400,
            iterations: Infinity
        });
    })

}