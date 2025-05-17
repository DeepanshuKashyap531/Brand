import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footerr'>
            <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-column">
      <img src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on" alt="CotentCove Logo" class="footer-logo"/>
      <p class="footer-about">
        We are committed to delivering excellence and innovation in every project we take on. Join us to build the future.
      </p>
    </div>

      <div class="footer-column">
      <h3>Contact Us</h3>
      <ul class="footer-links">
        <li><a href="mailto:deepanshukashyap531@gmail.com">deepanshukashyap@gmail.com</a></li>
       <li><a href='#contact'>Contact On - 91+ 7000759451 </a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Follow Us</h3>
      <div class="footer-social">
        {/* <a href="#" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
        <a href="#" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
        <a href="#" aria-label="GitHub"><i class="ri-github-line"></i></a> */}
        <a href="mailto:deepanshukashyap531@gmail.com" aria-label="Gmail"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2025 Content Cove. All rights reserved.</p>
  </div>
</footer>

        </div>

    )
}

export default Footer;