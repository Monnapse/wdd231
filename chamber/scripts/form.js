function submitForm(page)
{
    if (!page) { return; }

    const formElement = document.querySelector("form");
    if (!formElement) { return; }

    const formData = new FormData(formElement);
    const params = new URLSearchParams();

    for (const pair of formData.entries()) {
        const inputElement = document.querySelector(`[name="${pair[0]}"]`);
        if (inputElement.hasAttribute('required')) {
            params.append(pair[0], pair[1]);
        }
    }

    window.location.href = `${page}?` + params.toString();
}

document.getElementById("thankYouForm").addEventListener(`submit`, event=>{
    event.preventDefault();

    submitForm("thankyou.html");
});