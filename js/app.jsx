import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";
// import poniżej miał powodować scrollowanie okna do otwieranych kolekcji, niestety nie zadziałało
// import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

document.addEventListener("DOMContentLoaded", function(){

    // Nav to komponent headera, tutaj znajduje się górne menu
    class Nav extends React.Component {
        render(){
            return(
                <div>
                    <header>
                        <span className="logo">StuffI<span className="own">OWN</span></span>
                        <ul className={"navigation__bar"}>
                            <li><NavLink to="/">Strona główna</NavLink></li>
                            <li><NavLink to="/collectors">Kolekcjonerzy</NavLink></li>
                            <li><NavLink to="/collections">Kolekcje</NavLink></li>
                            <li><NavLink to="/contact">Kontakt</NavLink></li>
                            <li><NavLink to="/insert">Wprowadź swoją kolekcję</NavLink></li>
                        </ul>
                    </header>
                </div>
            )
        }
    }

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda deleniti eius, eos eveniet facilis in ipsum modi molestias nostrum, vero voluptas voluptatibus! Consectetur id illum inventore natus           quos. Assumenda nesciunt nihil voluptanie dziala gownotem voluptatibus.sasasasas Ad aliquam dignissimos dolor eius esse explicabo fugiat fugit harum illum ipsum minus nihil obcaecati provident sed sit, soluta sunt tenetur unde ut voluptate? Ad delectus dignissimos, explicabo itaque laboriosam laborum obcaecati perferendis quos recusandae temporibus? Autem dolor earum eum explicabo magnam omnis perspiciatis praesentium voluptatem.</p>
                    </article>
                    {/*articleRight jest przygotowany pod jakąś treść lub obrazek, który miałby znajdować się po prawej stronie strony głównej, póki co nic takiego nie mam, przy poprawnym przeszukiwaniu po tagach i filtrowaniu mógłby to być na przykład jakiś flowchart*/}
                    <article className="articleRight">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, temporibus?</p>
                    </article>
                </div>
            )
        }
    }

    // podstrona Kolekcjonerzy
    class Collectors extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                users: [],
            }
        }

        render(){
            // console.log(this.state.users);
            //informacja do pojawienia się przed wczytaniem danych z bazy, lub przy problemach z bazą danych
            if(this.state.users == false){
                return <h1>Proszę czekać, wczytuję listę kolekcjonerów...</h1>
            }
            //to jest render właściwej listy, każdy element jest przy okazji linkiem kierującym na podstronę o nim samym
            const list = this.state.users.map( i =>
                <li key={i.id} className={"collectors"}>
                    <NavLink to={"collectors/"+i.name}>
                        <img src={i.avatar} />
                        <h3>{i.name}</h3>
                        <p>{i.description}</p>
                    </NavLink>
                </li>)
            return (
                <div>
                    <h1>KOLEKCJONERZY</h1>
                    <ul className={"collectorsUl"}>{list}</ul>
                </div>
            )
        }
        componentDidMount(){
            fetch("http://localhost:3000/users")
                .then(resp => resp.json())
                .then(data => {
                    //console.log(data);
                    this.setState({
                        users: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // podstrona o konkretnych kolekcjonerach
    class CollectorInfo extends React.Component {
        constructor(props){
            super(props);

            this.state={
                users: [],
                usersNames: [],
                collections: [],
                itemView: "itemListHidden",
                colView: "colNormal",
                // active było przygotowane pod scrollIntoView, nie zadziałało
                // active: false,
            }
        }
        render(){
            // przygotowane pod scrollIntoView
            // const { active } = this.state;
            // sprawdza czy nazwa użytkownika podana w adresie url znajduje się w obiekcie w bazie
            if(this.state.users == false){
                return <h1>Proszę czekać, sprawdzam poprawność...</h1>
            }

            // to tutaj dzieje się magia - sprawdzamy indeks konkretnego użytkownika w this.state.usersnames, ktore mamy sciagniete na poziomie fetch, po czym sprawdzamy po nazwie czy pokrywa sie z podanym autorem ktorejkolwiek z kolekcji, jesli tak, to zwracamy kolekcję w formie listy
            if(this.state.usersNames.indexOf(this.props.match.params.collector) != -1){
                const thisUserCollections = [];
                for(let i=0; i<this.state.collections.length; i++){
                    //console.log(this.state.collections[i].author);
                    if(this.props.match.params.collector == this.state.collections[i].author){
                        //console.log(this.state.collections[i]);
                        thisUserCollections.push(this.state.collections[i]);
                    }
                }
                // tutaj render do powyzszego pieknego ifa w forze w ifie
                const list = thisUserCollections.map( i =>
                    <li key={i.id} className={this.state.colView} onClick={this.renderCollection}>
                        <div onClick={this.renderCollection} className={"fullCol", "colBasic"}>
                            <div>
                                <h3>{i.colName}</h3>
                                <p>Właściciel: {i.author}</p>
                            </div>
                            <ul className={this.state.itemView}>
                                {i.data.map(j =>
                                    <li>
                                        <img src={j.image} />
                                        <br />
                                        {j.author}
                                        <br />
                                        {j.name}
                                        <br />
                                        {j.date}
                                    </li>)}
                            </ul>
                        </div>
                    </li>
                )
                return (
                    <div>
                        <h1>{this.props.match.params.collector}</h1>
                        <ul>{list}</ul>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1>Użytkownik nie został znaleziony</h1>
                    </div>
                )
            }

        }

        // event, ktory zmienia widok: po kliknieciu kolekcja staje sie widoczna/niewidoczna, a kafelkowa reprezentacja jej naglowka rozwija sie lub zwija; active przygotowane pod scrollIntoView
        renderCollection = (e) => {
            //console.log(e.target);
            this.setState({
                itemView: this.state.itemView == "itemList" ? "itemListHidden" : "itemList",
                colView: this.state.colView == "colNormal" ? "colBig" : "colNormal",
                // active: !this.state.active,
            })
        }

        componentDidMount(){
            fetch("http://localhost:3000/users")
                .then(resp => resp.json())
                .then(data => {
                    const usersNamesList = data.map(q => q.name);
                    this.setState({
                        users: data,
                        usersNames: usersNamesList,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
            fetch("http://localhost:3000/collections")
                .then(resp => resp.json())
                .then(data => {
                    //console.log(data);
                    this.setState({
                        collections: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })

        }
    }

    // podstrona Kolekcje
    class Collections extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                collections: [],
                itemView: "itemListHidden",
                colView: "colNormal",
            }
        }

        // event na klik zwijajacy/rozwijajacy widok kolekcji - listy, zmieniajacy widok naglowka kolekcji, scrollIntoView nie dziala
        renderCollection = (e) => {
            //console.log(e.target);
            this.setState({
                itemView: this.state.itemView == "itemList" ? "itemListHidden" : "itemList",
                colView: this.state.colView == "colNormal" ? "colBig" : "colNormal"
            })
            // scrollIntoView(e, {block: 'end', behavior: 'smooth'});
        }

        render(){

            if(this.state.collections == false){
                return <h1>Proszę czekać, wczytuję kolekcje</h1>
            }

            const list = this.state.collections.map( i =>
                <li key={i.id} className={this.state.colView} onClick={this.renderCollection}>
                    <div onClick={this.renderCollection} className="fullCol">
                        <div>
                            <h3>{i.colName}</h3>
                            <p>Właściciel: {i.author}</p>
                        </div>
                        <ul className={this.state.itemView}>
                            {i.data.map(j =>
                                <li>
                                    <img src={j.image} />
                                    <br />
                                    {j.author}
                                    <br />
                                    {j.name}
                                    <br />
                                    {j.date}
                                </li>)}
                        </ul>
                    </div>
                </li>
            )


            return (
                <div>
                    <h1>KOLEKCJE:</h1>
                    <ul className={"colUl"}>{list}</ul>
                </div>
            )
        }
        componentDidMount(){
            fetch("http://localhost:3000/collections")
                .then(resp => resp.json())
                .then(data => {
                    //console.log(data);
                    this.setState({
                        collections: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // podstrona kontakt, nie wymaga za bardzo tłumaczenia
    class Contact extends React.Component {
        render(){
            return (
                <div className="contact">
                    <h2>Kontakt</h2>
                    <hr />
                    <p>W przypadku pytań lub uwag bardzo prosimy o kontakt mailowy. Jesteśmy wdzięczni za wszystkie uwagi :)</p>
                    <br />
                    <p>Adres e-mail: <a href="mailto:psmiatek@gmail.com?Subject=StuffIOWN%20staff" target="_top">psmiatek@gmail.com</a></p>
                    <br />
                    <p>Autor strony: Paweł Smiatek</p>

                </div>
            )
        }
    }

    // podstrona z formularzem do wprowadzania danych do bazy danych kolekcji, niestety najbardziej zaśmiecony element
    class Insert extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                existingCollections: [],
                id: 0,
                colName: "Nazwa kolekcji",
                author: "Autor",
                data: [],
                name: "Nazwa przedmiotu",
                artist: "Nazwa twórcy",
                image: "url zdjęcia",
                date: "data powstania",
                tags: ["tagi"],
                readyToSend: ``,
                arrToSend: [],
                // currentUser: this.props.currentUser,
            }
        }
        // każde okienko formularza ma swój event; event author docelowo miał automatycznie ściągać autora z propsów - zalogowanego użytkownika, póki co mnie to przerosło
        handleChangeId = (e) => {
            this.setState({
                id: this.state.existingCollections.length,
            })
        }
        handleChangeColName = (e) => {
            this.setState({
                colName: e.target.value,
            })
        }
        handleChangeAuthor = (e) => {
            this.setState({
                author: e.target.value,
            })
        }
        // poniższy handleClick pobiera ze state dane do stworzenia nagłówka powstającego JSONa, jest tu trochę śmieci, ale narazie strach je ruszać
        handleHeadClick = () => {
            //console.log("klik");

            this.setState({
                readyToSend: `{"id": ${this.state.id},
                "colName": "${this.state.colName}",
                "author": "${this.state.author}",
                "data": [
                    {
                    "name": "${this.state.name}",
                    "author": "${this.state.artist}",
                    "image": "${this.state.image}",
                    "date": ${this.state.date},
                    "tags": [${this.state.tags}]
                    }
                ]
            }`,
                arrToSend: [`               {"id": ${this.state.id},
                "colName": "${this.state.colName}",
                "author": "${this.state.author}",
                "data": [
                    `],
            });
        }
        handleChangeName = (e) => {
            this.setState({
                name: e.target.value,
            })
        }
        handleChangeArtist = (e) => {
            this.setState({
                artist: e.target.value,
            })
        }
        handleChangeImage = (e) => {
            this.setState({
                image: e.target.value,
            })
        }
        handleChangeDate = (e) => {
            this.setState({
                date: e.target.value,
            })
        }
        handleChangeTags = (e) => {
            this.setState({
                tags: e.target.value,
            })
        }
        // poniższy event dodaje kolejne elementy - przedmioty do powstającego JSONa
        handleAddClick = () => {
            const tagsFixer = "['" + this.state.tags.replace(/,/g, "', '") + "']";
            const nextItem = `
                    {
                        "name": "${this.state.name}",
                        "author": "${this.state.artist}",
                        "image": "${this.state.image}",
                        "date": ${this.state.date},
                        "tags": ${tagsFixer}
                    }`;

            //console.log(nextItem);
            const newArray = this.state.arrToSend;
            newArray.push(nextItem);
            //console.log(newArray);
            this.setState({
                arrToSend: newArray,
            })
        }
        // event do buttona deklarujacego chec wyslania kolekcji, domyka JSON odpowiednimi nawiasami, wysyla za pomoca POST dane do naszej lokalnej bazy danych
        handleReady = () => {
            const closingBrackets = `]
            }`;
            const readyArr = this.state.arrToSend;
            let readyString = readyArr.toString();
            readyString = readyString + closingBrackets;
            //console.log(readyString);

            fetch('http://localhost:3000/collections', {
                method: "POST",
                body:( readyString ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // ponizszy render pokazuje dwa male formularze - pierwszy od tworzenia naglowka kolekcji tj. deklaracji nazwy, nazwy uzytkownika i id, drugi od kolejnych przedmiotow. trzeci div zawiera textarea, w ktorym wyswietla sie podglad powstajacego JSON
        render(){
            return (
                <div className="collectionForm">
                    <div className="collectionHead">
                        Id: <input type="text" value={this.state.id} onChange={this.handleChangeId}/>
                        Nazwa kolekcji: <input type="text" value={this.state.colName} onChange={this.handleChangeColName}/>
                        Kolekcjoner: <input type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
                        <button onClick={this.handleHeadClick}>Stwórz input</button>
                    </div>
                    <div className="collectionBody">
                        Nazwa przedmiotu: <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        Autor: <input type="text" value={this.state.artist} onChange={this.handleChangeArtist}/>
                        Url zdjęcia: <input type="text" value={this.state.image} onChange={this.handleChangeImage}/>
                        Data utworzenia: <input type="text" value={this.state.date} onChange={this.handleChangeDate}/>
                        Tagi: <input type="text" value={this.state.tags} onChange={this.handleChangeTags}/>
                        <button onClick={this.handleAddClick}>Dodaj kolejny element</button>
                    </div>
                    <div>
                        <h3>Podgląd pliku wyjściowego:</h3>
                        <textarea value={this.state.arrToSend} className="toSend"/>
                        <br />
                        <button onClick={this.handleReady}>Kolekcja gotowa</button>
                    </div>
                </div>
            )
        }
        componentDidMount(){
            fetch("http://localhost:3000/collections")
                .then(resp => resp.json())
                .then(data => {
                    //console.log(data);
                    this.setState({
                        existingCollections: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    // footer - widoczny na kazdej podstronie
    class Foot extends React.Component {
        render(){
            return (
                <footer>
                    <div>
                        <h3>StuffI<span>OWN</span></h3>
                    </div>
                </footer>
            )
        }
    }

    // główny komponent, w którym zawierają się wszystkie inne. zawiera się tutaj okienko logowania i caly hashrouting
    class App extends React.Component {
        constructor(props){
            super(props);

            this.state={
                users: [],
                userName: "",
                password: "",
                currentUser: "",
            }
        }
        handleChangeUserName = (e) => {
            this.setState({
                userName: e.target.value,
            })
        }
        handleChangePassword = (e) => {
            this.setState({
                password: e.target.value,
            })
        }
        // event ściąga z bazy danych właściwości name i password obiektów user. zlepia je w jednego stringa, porównuje z identycznie zlepianymi wartościami name - password pobranymi z formularza. Jeśli pary zgadzają się, zostaje zalogowany użytkownik - jego name zostaje przekazany do state.currentUser
        handleLoginButton = () => {
            const usersMap = this.state.users.map(i => i.name + i.password);
            for(let i=0; i<usersMap.length; i++){
                if(this.state.userName + this.state.password == usersMap[i]){
                    this.setState({
                        currentUser: this.state.userName,
                    })
                }
            }
        }
        render(){
            let loginWindow = null;
            if(this.state.currentUser) {
                loginWindow = <h3 className="login">{this.state.currentUser}</h3>
            } else {
                loginWindow = (
                    <div className="login">
                        <input type="text" value={this.state.userName} onChange={this.handleChangeUserName}/>
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                        <button onClick={this.handleLoginButton}>Zaloguj się</button>
                    </div>
                )
            }
            return (
                <div>
                    <HashRouter>
                        <div>
                            <Nav />

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/collectors" component={Collectors} />
                                <Route exact path="/collectors/:collector" component={CollectorInfo} />
                                <Route exact path="/collections" component={Collections} />
                                <Route exact path="/insert" component={Insert} />
                                <Route exact path="/contact" component={Contact} />
                            </Switch>
                            <div>
                                {loginWindow}
                            </div>
                            <Foot />
                        </div>
                    </HashRouter>
                </div>
            )
        }
        componentDidMount(){
            fetch("http://localhost:3000/users")
                .then(resp => resp.json())
                .then(data => {
                    //console.log(data);
                    this.setState({
                        users: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    )
});