
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const eyes = document.querySelectorAll('.eye-dot')

const fellas = document.querySelector('.fellas')
const fellasRect = document.querySelector('.fellas').getBoundingClientRect()
document.addEventListener('mousemove', debounce(
    (e) => {
        const { clientX, clientY } = e
        
        const nearestX = Math.max(fellasRect.left, Math.min(clientX, fellasRect.right));
        const nearestY = Math.max(fellasRect.top, Math.min(clientY, fellasRect.bottom));

        const dx = clientX - nearestX;
        const dy = clientY - nearestY;

        const strength = 0.01
        eyes.forEach((el) => {
            const x = dx * strength > 12 ? 12 :dx * strength 
            const y = dy * strength > 12 ? 12 :dy * strength 
            el.style.transform = `translate(${x}px, ${y}px)`;
        })
    }
    , 10
)
)

