function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const entries = params.entries();
    const result = {};
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
}

const fnameElement = document.getElementById("fname");
const lnameElement = document.getElementById("lname");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const organizationElement = document.getElementById("organization");
const timestampElement = document.getElementById("timestamp");

const formData = getQueryParams();
for (const key in formData)
{
    switch (key)
    {
        case 'fname':
            if (fnameElement) { fnameElement.textContent = formData[key]; }
            break;
        case 'lname':
            if (lnameElement) { lnameElement.textContent = formData[key]; }
            break;
        case 'email':
            if (emailElement) { emailElement.textContent = formData[key]; }
            break;
        case 'phone':
            if (phoneElement) { phoneElement.textContent = formData[key]; }
            break;
        case 'organization':
            if (organizationElement) { organizationElement.textContent = formData[key]; }
            break;
        case 'timestamp':
            if (timestampElement) { timestampElement.textContent = formData[key]; }
            break;
    }
    console.log(key);
}