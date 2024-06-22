async function updateContent() {
    // Fetch new content (replace with your actual logic)
    const response = await fetch("./page1/index.html").then(x => x.text());
    const parser = new DOMParser();
    console.log(response)
        // newContent = response
        // console.log(response)

    // Parse the HTML string

    const newFragment = parser.parseFromString(response, "text/html");
    console.log(newFragment)

    // Get the element to replace
    const targetElement = document.getElementById("main_body");

    // Replace content

    targetElement.replaceWith(newFragment.body.firstChild)
        // targetElement.innerHTML = newFragment.body.firstChild; // Get first child (paragraph)
        // console.log(newFragment.body.firstChild)
        // console.log(newFragment.innerHTML)
}



// const audio2 = document.getElementById("cat_music2")
// audio2.load()
// audio2.addEventListener("ended", function() {
//     playRandomMusic()
// })



let audio_list = []
let element = null

function playRandomMusic() {
    random_int = Math.floor(Math.random() * audio_list.length)
    audio = audio_list[random_int]
    audio.play();
    element.removeEventListener("click", playRandomMusic);
}

window.onload = function() {

    const audio1 = document.getElementById("cat_music1")
    audio1.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio1)
    const audio2 = document.getElementById("cat_music2")
    audio2.load()
    audio2.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio2)
    const audio3 = document.getElementById("cat_music3")
    audio3.load()
    audio3.addEventListener("ended", function() {
        playRandomMusic()
    })
    audio_list.push(audio3)
    element = document.getElementById("main");
    element.addEventListener("click", playRandomMusic);
}