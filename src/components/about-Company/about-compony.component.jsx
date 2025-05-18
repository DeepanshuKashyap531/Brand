import './about-company.styles.scss';
import office from '../../asstes/about/office.jpg'
import founder from '../../asstes/about/founder.jpg'
import dt3 from '../../asstes/logo/dt3.png'
const AboutCompany = () => {
    return(
        <div>
 <nav class="sky-nav">
  <div class="sky-flexbox">
    <a href="/" class="brand-anchor">
      <img src={dt3} alt="Company Logo" class="brand-symbol" />
    </a>
    <a href="/" class="go-back-link">
      <i class="fas fa-arrow-left"></i> Back
    </a>
  </div>
</nav>

    <div class="container">

      <section class="company-intro">
        <h1>About Our Company</h1>
        <p>
          We are a leading firm providing top-notch services to our clients
          worldwide. Our vision is to innovate and empower businesses globally.
        </p>
        <img
          src={office}
          alt="Company Overview"
          class="intro-image"
        />
      </section>


      <section class="details">
        <div class="left">
          <h2>Our Mission</h2>
        </div>
        <div class="right">
          <p>
            Saurabh Shakya is the visionary founder of our company, bringing
            nearly four years of experience as a Java Developer and a profound
            commitment to driving technological innovation. With a solid
            foundation in software engineering, Saurabh’s journey began at the
            prestigious Apple Academy, where his hands-on experience ignited a
            passion for solving complex problems through data-driven solutions.
            Currently pursuing a Master’s degree in Data Science at the
            University of Federico II in Naples, Italy, Saurabh possesses
            expertise in machine learning, statistical modeling, and data
            analysis. This advanced education complements his extensive
            experience in software development, empowering him to bridge the gap
            between technical solutions and actionable business insights. As
            both a strategic thinker and practical problem-solver, Saurabh is
            deeply committed to leveraging the power of data and technology to
            help organizations across Europe make smarter, faster decisions. His
            vision for the company is not only to create innovative solutions
            but also to build long-term, impactful partnerships that foster
            business growth and operational excellence. With a focus on
            integrity, collaboration, and continuous improvement, Saurabh leads
            the company with a forward-thinking approach, ensuring its ongoing
            success and positive contribution to the tech industry.
          </p>
        </div>
      </section>

      <section class="founder">
        <div class="founder-image">
          <img src={founder} alt="Founder" />
        </div>
        <div class="founder-text">
          <h2>Meet Our Founder</h2>
          <p>
            Saurabh Shakya, with nearly four years of experience as a skilled
            Java Developer, brings a strong foundation in software engineering
            and a deep passion for technology. His journey began at the renowned
            Apple Academy, where he completed a hands-on internship that sparked
            a lasting interest in data-driven solutions. Currently pursuing a
            Master’s degree in Data Science at the University of Federico II in
            Naples, Italy, he is equipped with cutting-edge knowledge in machine
            learning, statistical modeling, and data analysis. This unique
            combination of software development experience and advanced data
            science education empowers him to bridge the gap between code and
            insight. As both a strategic thinker and practical problem-solver,
            Saurabh is committed to using data and technology to create
            meaningful impact. His vision for the company is rooted in helping
            organizations across Europe harness the power of data to make
            smarter, faster decisions.
          </p>
        </div>

        <div class="social-icons">
          <a
            href="https://www.instagram.com/shakya.saurabh/?utm_source=qr&igsh=MTl2YXF3bjZiYWxvMg%3D%3D#"
            
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/inside0000007"  aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.youtube.com/@SaurabhVlogs129"  aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </div>
    </div>
    )
}

export default AboutCompany;

