window.addEventListener('load', displaySubmissions);

document.getElementById('supportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const platform = document.getElementById('platform').value;
    const issueType = document.getElementById('issue-type').value;
    const description = document.getElementById('description').value;
    const timestamp = new Date().toLocaleString();

    const submission = {
        name,
        email,
        platform,
        issueType,
        description,
        timestamp
    };

    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    submissions.push(submission);

    localStorage.setItem('submissions', JSON.stringify(submissions));

    document.getElementById('supportForm').reset();

    displaySubmissions();
});

function displaySubmissions() {
    const submissionsContainer = document.getElementById('submissions');
    submissionsContainer.innerHTML = '';

    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    submissions.forEach(submission => {
        const item = document.createElement('div');
        item.classList.add('submission-item');
        item.innerHTML = `
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Platform:</strong> ${submission.platform}</p>
            <p><strong>Issue Type:</strong> ${submission.issueType}</p>
            <p><strong>Description:</strong> ${submission.description}</p>
            <p class="timestamp"><strong>Submitted:</strong> ${submission.timestamp}</p>
        `;
        submissionsContainer.appendChild(item);
    });
}