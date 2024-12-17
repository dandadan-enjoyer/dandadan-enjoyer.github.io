let numer = 0;

function next() {
    numer = numer + 1;
    photo.src = `./assets/images/photo-${numer}.jpg`;

    caption.innerHTML = `Photo #${numer}`;

    if (numer >= 8) {
        numer = 0;
    }
}