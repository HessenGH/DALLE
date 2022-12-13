import Footer from "./Footer";

const Home = () => {
    return ( 
        <div className="home">
            <img src="./assets/dalle1.png" className="backhome" alt="ai background"/>
            <div className="lko">
            <div className="first">
                <h1>DALL·E </h1>
            <h3>What do you know about DALL·E ?</h3>
            <p className="intro">DALL·E is a neural network-based artificial intelligence created by OpenAI. It is trained to generate images from text descriptions, using a combination of generative adversarial networks and attention mechanisms. It is named after the artist Salvador Dali and the Pixar character WALL-E.</p>
            </div>
            <div className="p1">
                <img 
                src="./assets/dalle2.png"
                  alt="brain" className="imgAI"/>
            <p className="pp1">DALL·E uses a combination of generative adversarial networks (GANs) and attention mechanisms to generate images from text descriptions. GANs are a type of deep learning model that consists of two parts: a generator network, which creates synthetic data, and a discriminator network, which attempts to distinguish the synthetic data from real data. In DALL·E's case, the generator network creates images based on the text descriptions provided, while the discriminator network evaluates the images to ensure they are realistic and match the descriptions. The attention mechanism helps the network focus on specific parts of the text description when generating the images.</p>
            </div>
            <div className="p2">
            <p className="pp2">DALL·E is a large language model developed by OpenAI. It was trained to generate images from text descriptions, using a dataset of text-image pairs. The model is named after the Surrealist artist Salvador Dali, with the extra "E" at the end representing the "eye" of the model, which generates images based on the text it is given. DALL·E can generate a wide range of images, from photorealistic to highly abstract, and can even combine elements from different images to create new, unique images.</p>
            <img 
            src="./assets/dalle3.png"
                  alt="brain" className="imgAI"/>
            </div>
            </div>
            <div className="footerbottom">
            <Footer/>
            </div>
        </div>
     );
}
 
export default Home;