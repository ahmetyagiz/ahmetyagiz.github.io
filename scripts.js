// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    const projects = document.querySelectorAll('.project');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.getAttribute('data-filter');
            projects.forEach(project => {
                if (project.getAttribute('data-category') === filter || filter === 'all') {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});