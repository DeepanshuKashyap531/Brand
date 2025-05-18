import './footer.styles.scss';
import dt1 from '../../asstes/logo/dt1.png'

const Footer = () => {
    return (
        <div className='footerr'>
            <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-column">
      <img src={dt1} alt="CotentCove Logo" class="footer-logo"/>
      <p class="footer-about">
        We are committed to delivering excellence and innovation in every project we take on. Join us to build the future.
      </p>
    </div>

      <div class="footer-column">
      <h3>Contact Us</h3>
      <ul class="footer-links">
        <li><a href="mailto:shakyasaurabh98@gmail.com">shakyasaurabh98@gmail.com</a></li>
       <li><a href='#contact'>Contact On - +393497094288 </a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Follow Us</h3>
      <div class="footer-social">
        <a href="https://www.facebook.com/inside0000007" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
        <a href="https://www.instagram.com/shakya.saurabh/?utm_source=qr&igsh=MTl2YXF3bjZiYWxvMg%3D%3D#" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
        <a href="https://www.youtube.com/@SaurabhVlogs129" aria-label="GitHub"><i class="fa-solid fa-circle-play"></i></a>
        <a href="mailto:shakyasaurabh98@gmail.com" aria-label="Gmail"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2025 Dream Technology. All rights reserved.</p>
  </div>
</footer>

        </div>

    )
}

export default Footer;