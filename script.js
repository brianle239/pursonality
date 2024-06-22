let audio_list = []
let element_main = null
let page = 0
let max_page = 3 // 0 index


async function nextPage() {

    let page_file = ""

    // Change if adding more pages
    if (page == 2) {
        page_file = "./end_page/index.html"
    } else {
        page_file = "./page" + (page + 1) + "/index.html"
    }
    console.log(page_file)
    page += 1
    const response = await fetch(page_file).then(x => x.text());
    const parser = new DOMParser();

    const newFragment = parser.parseFromString(response, "text/html");
    const targetElement = document.getElementById("main");

    targetElement.replaceWith(newFragment.getElementById("main"))
    if (page == 2) {
        handleProgress(nextPage)

    }
}

async function prevPage() {
    let page_file = "";
    if (page == 1) {
        page_file = "./index.html";
    } else if (page == max_page) {
        page_file = "./page" + (page - 2) + "/index.html";
        page -= 1

    } else {
        page_file = "./page" + (page - 1) + "/index.html";
    }

    page -= 1;

    const response = await fetch(page_file).then(x => x.text());
    const parser = new DOMParser();

    const newFragment = parser.parseFromString(response, "text/html");
    console.log(newFragment)

    const targetElement = document.getElementById("main");

    console.log("new", newFragment.getElementById("main"))
    targetElement.replaceWith(newFragment.getElementById("main"))

}



function fadeVolume(audioElement, newVolume, duration = 1000) {
    const startVolume = audioElement.volume;
    const volumeStep = (newVolume - startVolume) / (duration / 20); // 20 steps for smooth fade

    let currentVolume = startVolume;
    const fadeInterval = setInterval(() => {
        currentVolume += volumeStep;
        audioElement.volume = Math.min(1, Math.max(0, currentVolume)); // Clamp volume between 0 and 1

        if (Math.abs(currentVolume - newVolume) < Math.abs(volumeStep)) {
            clearInterval(fadeInterval);
            audioElement.volume = newVolume; // Ensure final volume is exact
        }
    }, 20); // Adjust interval for smoother fades (lower value for smoother)
}

function playRandomMusic() {
    random_int = Math.floor(Math.random() * audio_list.length)
    audio = audio_list[random_int]
    audio.volume = 0.2;
    audio.play();
    element_main.removeEventListener("click", playRandomMusic);
    fadeVolume(audio, newVolume = .5, duration = 5000)
}

function fadeVolume(audioElement, newVolume, duration = 1000) {
    const startVolume = audioElement.volume;
    const volumeStep = (newVolume - startVolume) / (duration / 20); // 20 steps for smooth fade

    let currentVolume = startVolume;
    const fadeInterval = setInterval(() => {
        currentVolume += volumeStep;
        audioElement.volume = Math.min(1, Math.max(0, currentVolume)); // Clamp volume between 0 and 1

        if (Math.abs(currentVolume - newVolume) < Math.abs(volumeStep)) {
            clearInterval(fadeInterval);
            audioElement.volume = newVolume; // Ensure final volume is exact
        }
    }, 20); // Adjust interval for smoother fades (lower value for smoother)
}

window.onload = function() {

    let audio1 = document.getElementById("cat_music1")
    audio1.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio1)
    let audio2 = document.getElementById("cat_music2")
    audio2.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio2)
    let audio3 = document.getElementById("cat_music3")
    audio3.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio3)

    element_main = document.getElementById("main");
    element_main.addEventListener("click", playRandomMusic);
}

function changeProgess(bar, i) {
    bar.style.width = `${(i+1)*20}%`
}

function handleProgress(callback) {
    bar_text = ["Gathering Data", "Calling MeowGPT", "Getting IP Address", "Generating Result", "Notifying Angeline and Brian"]
    let bar = document.getElementById("progress_bar");
    let loading_text = document.getElementById("loading_text")
    bar.style.width = 0
    for (let i = 0; i < 6; i++) {
        setTimeout(function() {
            if (i == 5) {
                callback();
            } else {
                bar.style.width = `${(i+1)*20}%`;
                loading_text.innerText = bar_text[i];
            }

        }, 1500 * i)
    }

}


const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');

bars.forEach((bar, index) => {
    const randomWidth = Math.floor((Math.random() * 65) + 10);
    bar.style.width = `${randomWidth}%`;

    progress[index].addEventListener('mouseover', () => {
        const randomTiming = Math.floor((Math.random() * 2) + 2);
        console.log(randomTiming);
        bar.style.transitionDuration = `${randomTiming}s`;
        bar.style.width = '100%';
    });
})