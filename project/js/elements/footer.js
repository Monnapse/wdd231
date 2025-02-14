function loadFooter(element) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    element.innerHTML = `
        <div class="footer">
            <nav class="nav-links">
                <a class="page-link" href="termsofservice.html">TERMS OF SERVICE</a>
                |
                <a class="page-link" href="privacypolicy.html">PRIVACY POLICY</a>
                |
                <a class="page-link" href="support.html">SUPPORT</a>
            </nav>
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
            <div class="copyright">
                <div class="copyright-imgs">
                    <img src="assets/images/intrepidus.png" alt="Intrepidus" loading="lazy">
                    <img src="assets/images/logo.svg" alt="SHIFTWAY" loading="lazy">
                </div>
                <p>© 2024 - ${currentYear} Intrepidus Games, SHIFTWAY. All Rights Reserved.</p>
            </div>
        </div>
    `
}