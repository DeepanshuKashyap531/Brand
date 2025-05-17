import './testimonial.styles.scss'
import pic1 from '../../asstes/testi/pic1.jpg'
import pic2 from '../../asstes/testi/pic2.jpg'
import pic3 from '../../asstes/testi/pic3.jpg'
import pic4 from '../../asstes/testi/pic4.jpg'
import pic5 from '../../asstes/testi/pic5.jpg'

const Testi = () => {
    return(
        <div id="testimonial" className='Testi'>
          <div className='Testi-header'> 
            <h1>Clients Review</h1>
          </div>
            <section class="testimonial-section">
  <div class="testimonial-container">
    <div class="testimonial-wrapper">
      <div class="testimonial-card">
        <img src={pic2} class="testimonial-img" alt=""/>
        <div class="testimonial-name">Deepanshu Kashyap</div>
        <div class="testimonial-text">Amazing service and great support. Totally satisfied!</div>
        <div class="stars">★★★★★</div>
      </div>
      <div class="testimonial-card">
        <img src={pic3} class="testimonial-img" alt=""/>
        <div class="testimonial-name">SaurabhShakya</div>
        <div class="testimonial-text">Professional, responsive and talented team!</div>
        <div class="stars">★★★★★</div>
      </div>
      <div class="testimonial-card">
        <img src={pic4}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">James Carter</div>
        <div class="testimonial-text">Impressed with the delivery and attention to detail.</div>
        <div class="stars">★★★★☆</div>
      </div>
      <div class="testimonial-card">
        <img src={pic1}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">Maggi Nihor</div>
        <div class="testimonial-text">Great experience and fast turnaround. Loved it!</div>
        <div class="stars">★★★★★</div>
      </div>
      <div class="testimonial-card">
        <img src={pic5}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">Miles Williamson</div>
        <div class="testimonial-text">Highly recommend their services to anyone.</div>
        <div class="stars">★★★★☆</div>
      </div>
    
      <div class="testimonial-card">
        <img src={pic2} class="testimonial-img" alt=""/>
        <div class="testimonial-name">Deepanshu Kashyap</div>
        <div class="testimonial-text">Amazing service and great support. Totally satisfied!</div>
        <div class="stars">★★★★★</div>
      </div>
      <div class="testimonial-card">
        <img src={pic3} class="testimonial-img" alt=""/>
        <div class="testimonial-name">SaurabhShakya</div>
        <div class="testimonial-text">Professional, responsive and talented team!</div>
        <div class="stars">★★★★★</div>
      </div>
      <div class="testimonial-card">
        <img src={pic1}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">Maggi Nihor</div>
        <div class="testimonial-text">Great experience and fast turnaround. Loved it!</div>
        <div class="stars">★★★★★</div>
      </div>
        <div class="testimonial-card">
        <img src={pic4}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">James Carter</div>
        <div class="testimonial-text">Impressed with the delivery and attention to detail.</div>
        <div class="stars">★★★★☆</div>
      </div>
      <div class="testimonial-card">
        <img src={pic5}  class="testimonial-img" alt=""/>
        <div class="testimonial-name">Miles Williamson</div>
        <div class="testimonial-text">Highly recommend their services to anyone.</div>
        <div class="stars">★★★★☆</div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}


export default Testi;