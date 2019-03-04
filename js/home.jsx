import React from "react";


    // Strona główna
    class Home extends React.Component {
        constructor(props){
            super(props);

            this.state={
                currentUser: this.props.currentUser,
            }
        }

        render(){
            return (
                <div>
                    <h1>HOME</h1>
                    <article className="articleLeft">
                        <h2>Witamy na Stuff I OWN</h2>
                        <p>Witam cię na stronie StuffIOWN - portalu służącemu wprowadzaniu swoich kolekcji. Możesz tutaj pochwalić się czymś, co zbierasz - czy to znaczki, czy książki, czy kolekcja płyt. Na kolejnych podstronach możesz: przejrzeć założone profile użytkowników - kolekcjonerów, a po wybraniu któregoś zobaczyć wszystkie wprowadzone przez niego kolekcje; zobaczyć pełną listę wprowadzonych kolekcji (po kliknięciu widok rozwija się i widać poszczególne przedmioty); wprowadzić swój własny zbiór poprzez formularz. Strona cały czas jest w budowie i zostało na niej bardzo dużo rzeczy do poprawy i wiele funkcjonalności do wprowadzenia, zachęcam więc aby wszystkie pomysły i uwagi przesyłać mi mailowo. Adres znajdziesz w zakładce Kontakt. Zapraszam! </p>
                        <p>Tutaj będzie już tylko gibberish po łacinie i trochę losowo wrzuconych przekleństw. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consectetur facere id mollitia, odio quas voluptatem? Debitis deserunt ipsam laudantium natus porro. Aliquam autem beatae ducimus eaque esse    exercitationem impedit ipsam iusto nesciunt nisi numquam perferendis perspiciatis quam quia recusandae repudiandae rerum, sit suscipit ullam ut velit voluptates voluptatum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium blanditiis consequatur, consequuntur corporis cupiditate dignissimos dolor eaque est illo incidunt magnam magni nobis nulla officia, provident ratione sapiente vero! Aliquam animi aperiam asperiores, atque blanditiis commodi cupiditate debitis distinctio dolor dolore eaque, eligendi eos error eum explicabo impedit in incidunt ipscotusieodjebujeam minima nobis odit optio perspiciatis porro praesentium saepe sapiente ut. Enim eum fuga iste labore laborum, magnam nostrum perferendis quasi rem repudiandae sequi temporibus ut voluptas? Aspernatur, fuga, nam. Ab aliquam autem corporis, debitis delectus doloremque enim ipsum, molestiae nemo nulla pariatur perspiciatis reiciendis reprehenderit. Aliquid, provident quod.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda deleniti eius, eos eveniet facilis in ipsum modi molestias nostrum, vero voluptas voluptatibus! Consectetur id illum inventore natus           quos. Assumenda nesciunt nihil voluptanie dziala tem voluptatibus.sasasasas Ad aliquam dignissimos dolor eius esse explicabo fugiat fugit harum illum ipsum minus nihil obcaecati provident sed sit, soluta sunt tenetur unde ut voluptate? Ad delectus dignissimos, explicabo itaque laboriosam laborum obcaecati perferendis quos recusandae temporibus? Autem dolor earum eum explicabo magnam omnis perspiciatis praesentium voluptatem.</p>
                    </article>
                    {/*articleRight jest przygotowany pod jakąś treść lub obrazek, który miałby znajdować się po prawej stronie strony głównej, póki co nic takiego nie mam, przy poprawnym przeszukiwaniu po tagach i filtrowaniu mógłby to być na przykład jakiś flowchart*/}
                    <article className="articleRight">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, temporibus?</p>
                    </article>
                </div>
            )
        }
    };

    export default Home;