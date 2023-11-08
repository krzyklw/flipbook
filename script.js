var files = [
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
];

var currentPage = 0;

function OnNextPageClick() {
    PlayFlipSound();

    if (currentPage == 0)
        document.getElementById("frontPage").style.animation = "flipLeftAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";
    else
        document.getElementById("backPage").style.animation = "flipLeftAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";

    setTimeout(function () {
        currentPage += 2;

        CheckVisibility();

        if (currentPage == 0)
            document.getElementById("frontPage").style.animation = "none";
        else
            document.getElementById("backPage").style.animation = "none";
    }, 800);
}

function OnPreviousPageClick() {
    PlayFlipSound();

    document.getElementById("frontPage").style.animation = "flipRightAnimation 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)";

    setTimeout(function () {
        currentPage -= 2;

        CheckVisibility();

        document.getElementById("frontPage").style.animation = "none";
    }, 800);
}

function OnHomePageClick() {
    PlayFlipSound();

    currentPage = 0;

    document.getElementById("frontPage").children[0].src = files[currentPage];

    CheckVisibility();
}

function CheckVisibility() {
    if (currentPage == 0) {
        document.getElementById("frontPage").children[0].src = files[currentPage];

        document.getElementById("leftIcon").style.visibility = "hidden";
    } else {
        document.getElementById("leftIcon").style.visibility = "visible";
        document.getElementById("rightIcon").style.visibility = "visible";

        document.getElementById("frontPage").children[0].src = files[currentPage - 1];
        document.getElementById("backPage").children[0].src = files[currentPage];
    }

    if (currentPage == files.length - 1) {
        document.getElementById("backPage").style.display = "none";

        document.getElementById("rightIcon").style.visibility = "hidden";
    }

    if (currentPage <= 0)
        currentPage = 0;

    if (currentPage == 0)
        document.getElementById("backPage").style.display = "none";
    else
        document.getElementById("backPage").style.display = "block";
}

function PlayFlipSound() {
    var audio = new Audio('flipSound.mp3');
    audio.play();
}