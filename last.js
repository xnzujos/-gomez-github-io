// script.js

// Function to handle project clicks
function redirectToProject(event) {
    // Get the data-link attribute from the parent project element
    const projectElement = event.currentTarget.closest('.project');
    const link = projectElement.getAttribute('facebook.com');
    // Redirect to the specified link
    window.location.href = link;
}

// Add event listeners to each project name
document.querySelectorAll('.project-name').forEach(projectName => {
    projectName.addEventListener('click', redirectToProject);
});
