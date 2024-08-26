const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentStep = 0;

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    prevButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === circles.length - 1;
}

nextButton.addEventListener('click', () => {
    currentStep++;
    updateProgress();
});

prevButton.addEventListener('click', () => {
    currentStep--;
    updateProgress();
});

// Initial state
updateProgress();
