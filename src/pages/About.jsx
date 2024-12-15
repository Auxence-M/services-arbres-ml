import BackToTopButtton from "../components/BackToTopButton";
import PageImage from "../components/PageImage";
import Container from 'react-bootstrap/Container';
function About() {

    const aboutImageStyle = {
        backgroundImage: `url("/src/assets/images/about-img.jpg")`
    }

    return(
        <div className="about">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={aboutImageStyle} title={"Qui Sommes Nous"}></PageImage>
            
            <Container fluid>
                <section>
                    <h4>Qu'est ce que l'élagage</h4>
                    <p>
                        Mauris at condimentum ipsum, sit amet tristique est. Phasellus ullamcorper velit tempor ipsum molestie interdum. Vivamus pretium egestas lectus eleifend lobortis. Nam non venenatis nulla. Quisque quis tristique tellus. Aenean risus neque, feugiat quis diam vitae, volutpat ultrices libero. Ut porta a orci non accumsan. Mauris sit amet imperdiet arcu.

                        In et lacus dui. In nec ultrices purus. Duis tincidunt, sapien a aliquam condimentum, elit libero eleifend velit, a luctus ligula odio sagittis nisl. Etiam dictum magna sit amet molestie fermentum. Nulla ac odio vitae velit gravida finibus. Pellentesque nisi diam, lacinia eget nibh at, cursus hendrerit ipsum. Morbi sit amet euismod odio, ac auctor quam. Fusce vel vehicula nulla. Cras sagittis molestie sollicitudin. Nullam dictum gravida purus, at lacinia sapien sagittis sed. Cras nec leo lacus.

                        Fusce pharetra nunc et justo iaculis sodales. Proin efficitur nisi vel odio congue, quis volutpat velit ultricies. Vivamus vel lacus at ex consectetur sagittis non ornare quam. Donec quam nulla, consequat nec egestas a, vestibulum tempor velit. Proin pretium commodo tristique. Integer pretium iaculis euismod. Nullam convallis ut eros vitae varius. Maecenas consectetur eu eros ac euismod. Sed arcu elit, aliquet id ultrices vel, aliquam a dolor. Sed luctus orci eget ex posuere tincidunt. Cras sed elit vehicula, ornare dolor dignissim, suscipit quam. Aliquam accumsan tortor eget ornare commodo. Praesent sagittis volutpat nibh, ac fringilla dui tincidunt ut. Vestibulum sapien magna, viverra eget ultricies et, faucibus id est.
                    </p>
                </section>
                <section>
                    <h4>Qu'est ce que l'élagage</h4>
                    <p>
                        Mauris at condimentum ipsum, sit amet tristique est. Phasellus ullamcorper velit tempor ipsum molestie interdum. Vivamus pretium egestas lectus eleifend lobortis. Nam non venenatis nulla. Quisque quis tristique tellus. Aenean risus neque, feugiat quis diam vitae, volutpat ultrices libero. Ut porta a orci non accumsan. Mauris sit amet imperdiet arcu.
                        In et lacus dui. In nec ultrices purus. Duis tincidunt, sapien a aliquam condimentum, elit libero eleifend velit, a luctus ligula odio sagittis nisl. Etiam dictum magna sit amet molestie fermentum. Nulla ac odio vitae velit gravida finibus. Pellentesque nisi diam, lacinia eget nibh at, cursus hendrerit ipsum. Morbi sit amet euismod odio, ac auctor quam. Fusce vel vehicula nulla. Cras sagittis molestie sollicitudin. Nullam dictum gravida purus, at lacinia sapien sagittis sed. Cras nec leo lacus.

                        Fusce pharetra nunc et justo iaculis sodales. Proin efficitur nisi vel odio congue, quis volutpat velit ultricies. Vivamus vel lacus at ex consectetur sagittis non ornare quam. Donec quam nulla, consequat nec egestas a, vestibulum tempor velit. Proin pretium commodo tristique. Integer pretium iaculis euismod. Nullam convallis ut eros vitae varius. Maecenas consectetur eu eros ac euismod. Sed arcu elit, aliquet id ultrices vel, aliquam a dolor. Sed luctus orci eget ex posuere tincidunt. Cras sed elit vehicula, ornare dolor dignissim, suscipit quam. Aliquam accumsan tortor eget ornare commodo. Praesent sagittis volutpat nibh, ac fringilla dui tincidunt ut. Vestibulum sapien magna, viverra eget ultricies et, faucibus id est.
                    </p>
                </section>
            </Container>
        </div>
    );
}

export default About;