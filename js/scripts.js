document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.course-item a[href="enroll.html"]');
    const enrolledCoursesContainer = document.getElementById('enrolled-courses');

    enrollButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const courseItem = document.createElement('div');
            courseItem.classList.add('col-lg-3', 'col-md-6', 'enrolled-course-item');
            courseItem.innerHTML = `
                <h5>HTML Course for Beginners</h5>
                <p>Duration: 7.0 Hrs</p>
                <p>Rating: 4.3</p>
                <p>Learners: 5.8L+</p>
            `;
            enrolledCoursesContainer.appendChild(courseItem);
        });
    });
});

