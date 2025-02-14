function loadNav(element) {
    element.innerHTML = `
        <div class="nav">
            <div class="nav-links-container">
                <a href="index.html">
                    <img  class="logo-text" src="assets/images/LogoText.svg" alt="logo text" loading="lazy">
                </a>
                <nav class="nav-links">
                    <a class="page-link" href="news.html">NEWS</a>
                    <button class="page-link-button page-link">
                        <div>
                            ABOUT <img src="assets/images/down.svg" alt="🔻" loading="lazy">
                        </div>
                        <div class="page-link-hover">
                            <a class="page-link" href="about.html">ABOUT SHIFTWAY</a>
                            <a class="page-link" href="maps.html">MAPS</a>
                            <a class="page-link" href="gamemodes.html">GAMEMODES</a>
                        </div>
                    </button>
                    <a class="page-link" href="support.html">SUPPORT</a>
                </nav>
            </div>
            <div class="nav-buttons">
                <a class="styled-button" href="jointhebeta.html">JOIN THE BETA</a>
                <div class="social-media-links">
                    <a href="twitter">
                        <img src="assets/images/twitter.svg" alt="twitter" loading="lazy">
                    </a> 
                    <a href="https://www.youtube.com/@IntrepidusGames"> 
                        <img src="assets/images/youtube.svg" alt="youtube" loading="lazy">
                    </a> 
                    <a href="discord"> 
                        <img src="assets/images/discord.svg" alt="discord" loading="lazy">
                    </a> 
                    <a href="tiktok"> 
                        <img src="assets/images/tiktok.svg" alt="tiktok" loading="lazy">
                    </a>
                </div>
            </div>
            <button id="menuButton" class="mobile-menu">
                <img class="logo-text" src="assets/images/hamburger.svg" alt="logo text" loading="lazy">
            </button>
        </div>
    `

    // OPEN MENU
    const menuButton = element.querySelector('#menuButton');
    const nav = element.querySelector('.nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    });

    // BUTTON LIST
    const pageLinkButton = element.querySelector('.page-link-button');
    const navButtons = element.querySelector('.nav-buttons');
    const buttonLinks = element.querySelector('.page-link-hover');

    // Function to toggle desktop hover behavior
    function toggleHover() {
        buttonLinks.classList.toggle("page-link-button-hover");
    }
    function toggleClick() {
        navButtons.classList.toggle("nav-buttons-active");
        buttonLinks.classList.toggle("page-link-button-active");
        pageLinkButton.classList.toggle("page-link-hover-active");
    }
    function removeClickClasses() {
        navButtons.classList.remove("nav-buttons-active");
        buttonLinks.classList.remove("page-link-button-active");
        pageLinkButton.classList.remove("page-link-hover-active");
    }
    function handleDesktopHover() {
        pageLinkButton.addEventListener('mouseenter', () => {
            toggleHover()
        });
        pageLinkButton.addEventListener('mouseleave', () => {
            toggleHover()
        });
    }

    // Function to handle mobile touch/click behavior
    function handleMobileClick() {
        pageLinkButton.addEventListener('click', () => {
            toggleClick();
        });
    }

    // Function to update event listeners based on screen width
    function updateEventListeners() {
        removeClickClasses();
        if (window.matchMedia("(max-width: 1184px)").matches) {
            
            // Mobile behavior
            // Remove desktop event listeners if any are present
            pageLinkButton.removeEventListener('mouseenter', handleDesktopHover);
            pageLinkButton.removeEventListener('mouseleave', handleDesktopHover);

            // Add mobile event listener
            handleMobileClick();
        } else {
            // Desktop behavior
            // Remove mobile event listener if it's present
            pageLinkButton.removeEventListener('click', handleMobileClick);

            // Add desktop hover event listeners
            handleDesktopHover();
        }
    }

    // Initial event listener update on page load
    updateEventListeners();

    // Add resize listener to handle screen resizing
    window.addEventListener('resize', () => {
        updateEventListeners();
    });
}