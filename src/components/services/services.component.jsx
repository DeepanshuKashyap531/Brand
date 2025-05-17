import './services.styles.scss';
import { useEffect,useRef } from 'react';
const Services = () => {

const revealRefs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Take a snapshot of current refs to avoid stale ref issue
  const refs = revealRefs.current;

  refs.forEach(ref => {
    if (ref) observer.observe(ref);
  });

  return () => {
    refs.forEach(ref => {
      if (ref) observer.unobserve(ref);
    });
  };
}, []);

  const setRefs = (el, index) => {
    revealRefs.current[index] = el;
  };
  
    return (
        <div id="services" className='services'>
            <div className='services-header reveal' ref={el => setRefs(el, 0)}>
            <h1> Sevices We Provide </h1>
            </div>
            <div className='services-container'>
                <div className='services-card reveal' ref={el => setRefs(el, 1)}>
                    <div className='inside-services-card'>
                        <h1>Web Development</h1>
                        <p>In today's digital-first world, a strong online presence is the backbone of every successful brand. At our agency, we specialize in custom web development that not only looks stunning but also performs flawlessly.</p>
                        <a href='#contact'> Click Here</a>
                    </div>
                </div>

                <div className='services-card reveal' ref={el => setRefs(el, 2)}>
                    <div className='inside-services-card'>
                         <h1>Graphic Designing</h1>
                        <p>In a visually-driven world, graphic design is more than just aesthetics — it’s how your brand communicates, connects, and captivates. At our agency, we combine creativity with strategy to deliver design that speaks louder than words.</p>
                       <a href='#contact'> Click Here</a>
                    </div>
                </div>

                <div className='services-card reveal' ref={el => setRefs(el, 3)}>
                    <div className='inside-services-card'>
                         <h1>App Development</h1>
                        <p>From iOS and Android apps to cross-platform solutions using Flutter or React Native, we build apps that offer seamless performance and intuitive user experiences. Whether it's an e-commerce platform, a social networking app, or a productivity tool — we turn your idea into a polished digital product.</p>
                        <a href='#contact'> Click Here</a>
                    </div>
                </div>

                <div className='services-card reveal' ref={el => setRefs(el, 4)}>
                    <div className='inside-services-card'>
                         <h1>Consultant</h1>
                        <p>We are a trusted education consultancy specializing in guiding students to pursue higher education in Italy. Our agency offers
                             personalized support throughout the entire process — from selecting the right university and course to application,
                              visa assistance, and pre-departure preparation — ensuring a smooth and successful journey for every student.</p>
                        <a href='#contact'> Click Here</a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Services;