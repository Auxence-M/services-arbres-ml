import BackToTopButtton from "../../components/BackToTopButton";
import PageImage from "../../components/PageImage";

function Pruning() {

    const pruningImageStyle = {
        backgroundImage: `url("/src/assets/images/pruning-img.jpg")`
    }

    return(
        <div className="service-pruning">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={pruningImageStyle} title={"Élagage"}></PageImage>

            <div className="container-fluid mt-3">
                <section>
                    <h4>Qu'est ce que l'élagage</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus erat ac elementum aliquam. Aliquam erat volutpat. Fusce ullamcorper justo at dui varius, ut pretium lectus rutrum. Vestibulum feugiat ante sit amet tellus lobortis sagittis. Maecenas ex quam, dapibus et vulputate pretium, luctus id augue. Phasellus vitae dolor mollis, vestibulum massa at, lobortis nunc. Suspendisse at lacus elit. Proin vehicula sem libero. Donec risus diam, mollis et congue quis, egestas ac risus. Donec non vulputate tortor. Donec condimentum justo a quam facilisis pulvinar eu nec turpis. Donec scelerisque risus eget diam iaculis sodales.
                    </p>
                </section>
                <section>
                    <h4>Comment savoir que votre arbre a besoin d'être élagager </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus erat ac elementum aliquam. Aliquam erat volutpat. Fusce ullamcorper justo at dui varius, ut pretium lectus rutrum. Vestibulum feugiat ante sit amet tellus lobortis sagittis. Maecenas ex quam, dapibus et vulputate pretium, luctus id augue. Phasellus vitae dolor mollis, vestibulum massa at, lobortis nunc. Suspendisse at lacus elit. Proin vehicula sem libero. Donec risus diam, mollis et congue quis, egestas ac risus. Donec non vulputate tortor. Donec condimentum justo a quam facilisis pulvinar eu nec turpis. Donec scelerisque risus eget diam iaculis sodales.
                    </p>
                </section>
            </div>
        </div>

        
    );
}

export default Pruning