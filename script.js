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
    console.log(targetElement.innerHTML)
    targetElement.replaceWith(newFragment.body.firstChild)
        // targetElement.innerHTML = newFragment.body.firstChild; // Get first child (paragraph)
        // console.log(newFragment.body.firstChild)
        // console.log(newFragment.innerHTML)
}