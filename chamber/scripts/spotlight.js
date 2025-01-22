// Fetch the company member json and turn into cards
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        if (!data) { return; }

        // Clear company cards already there because they are placeholders
        const businessContainerElement = document.getElementById('businessContainer');
        businessContainerElement.innerHTML = '';

        // Remove all that dont have silver or gold
        var memberIndex = 0;
        data.forEach(member => {
            var found = false;
            member.membership_levels.forEach(level => {
                if (level.name.toLowerCase() == "silver" || level.name.toLowerCase() == "gold")
                {
                    found = true;
                }
            })

            if (!found)
            {
                data.splice(memberIndex, 1)
            }

            memberIndex++;
        });


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

