function updateContent() {
    // Fetch new content (replace with your actual logic)
    const newContent = `
      <p>This is the new content!</p>
    `;

    // Parse the HTML string
    const parser = new DOMParser();
    const newFragment = parser.parseFromString(newContent, "text/html");

    // Get the element to replace
    const targetElement = document.getElementById("main_body");

    // Replace content
    targetElement.innerHTML = newFragment.body.firstChild; // Get first child (paragraph)
}