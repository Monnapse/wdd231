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

        const indexes = Math.floor(Math.random() * 2) + 2;

        for (var i=0; i < indexes; i++)
        {
            const index = Math.floor(Math.random() * data.length);
            const member = data[index]
            newCompanyCard(
                member.name, 
                member.tag,
                member.email, 
                member.phone, 
                member.website,
                member.image
            );

            data.splice(index, 1)
        }
    } catch (error) {
        // The fetch got an error
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchMembers();

