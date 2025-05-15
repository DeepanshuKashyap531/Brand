import './services.styles.scss';
const Services = () => {
    return (
        <div className='services'>
            <div className='services-header'>
            <h1> Sevices We Provide </h1>
            </div>
            <div className='services-container'>
                <div className='services-card'>
                    <div className='inside-services-card'>
                        <h1>Web Development</h1>
                        <p>In today's digital-first world, a strong online presence is the backbone of every successful brand. At our agency, we specialize in custom web development that not only looks stunning but also performs flawlessly.</p>
                        <a> Click Here</a>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='inside-services-card'>
                         <h1>Graphic Designing</h1>
                        <p>In a visually-driven world, graphic design is more than just aesthetics — it’s how your brand communicates, connects, and captivates. At our agency, we combine creativity with strategy to deliver design that speaks louder than words.</p>
                        <a> Click Here</a>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='inside-services-card'>
                         <h1>App Development</h1>
                        <p>From iOS and Android apps to cross-platform solutions using Flutter or React Native, we build apps that offer seamless performance and intuitive user experiences. Whether it's an e-commerce platform, a social networking app, or a productivity tool — we turn your idea into a polished digital product.</p>
                        <a> Click Here</a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Services;