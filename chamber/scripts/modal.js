function toggleModal(id, open)
{
    console.log(`openModal ${id}`);
    const modal = document.getElementById(id);

    if (modal)
    {
        if (open)
        {
            modal.showModal();
        }
        else {
            modal.close();
        }
    }
}

function openModal(id)
{
    toggleModal(id, true);
}

function closeModal(id)
{
    toggleModal(id, false);
}

//openModal("nonprofit-modal")