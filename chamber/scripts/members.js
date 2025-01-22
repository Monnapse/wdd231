// Fetch the company member json and turn into cards
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        // Clear company cards already there because they are placeholders
        const businessContainerElement = document.getElementById('businessContainer');
        businessContainerElement.innerHTML = '';
        
        data.forEach(member => {
            newCompanyCard(
                member.name, 
                member.tag,
                member.email, 
                member.phone, 
                member.website,
                member.image
            );
        });
    } catch (error) {
        // The fetch got an error
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchMembers();

