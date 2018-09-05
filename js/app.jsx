import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

document.addEventListener("DOMContentLoaded", function(){

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
    class Home extends React.Component {
        render(){
            return (
                <div>
                    <h1>HOME</h1>
                    <article className="articleLeft">
                        <h2>Witamy na Stuff I OWN</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consectetur facere id mollitia, odio quas voluptatem? Debitis deserunt ipsam laudantium natus porro. Aliquam autem beatae ducimus eaque esse    exercitationem impedit ipsam iusto nesciunt nisi numquam perferendis perspiciatis quam quia recusandae repudiandae rerum, sit suscipit ullam ut velit voluptates voluptatum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium blanditiis consequatur, consequuntur corporis cupiditate dignissimos dolor eaque est illo incidunt magnam magni nobis nulla officia, provident ratione sapiente vero! Aliquam animi aperiam asperiores, atque blanditiis commodi cupiditate debitis distinctio dolor dolore eaque, eligendi eos error eum explicabo impedit in incidunt ipscotusieodjebujeam minima nobis odit optio perspiciatis porro praesentium saepe sapiente ut. Enim eum fuga iste labore laborum, magnam nostrum perferendis quasi rem repudiandae sequi temporibus ut voluptas? Aspernatur, fuga, nam. Ab aliquam autem corporis, debitis delectus doloremque enim ipsum, molestiae nemo nulla pariatur perspiciatis reiciendis reprehenderit. Aliquid, provident quod.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda deleniti eius, eos eveniet facilis in ipsum modi molestias nostrum, vero voluptas voluptatibus! Consectetur id illum inventore natus           quos. Assumenda nesciunt nihil voluptanie dziala gownotem voluptatibus.sasasasas Ad aliquam dignissimos dolor eius esse explicabo fugiat fugit harum illum ipsum minus nihil obcaecati provident sed sit, soluta sunt tenetur unde ut voluptate? Ad delectus dignissimos, explicabo itaque laboriosam laborum obcaecati perferendis quos recusandae temporibus? Autem dolor earum eum explicabo magnam omnis perspiciatis praesentium voluptatem.</p>
                    </article>
                    <article className="articleRight">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, aperiam asperiores blanditiis consequuntur cupiditate, delectus deleniti ducimus earum ex, laborum magni modi nisi pariatur possimus praesentium provident quam quisquam quo repudiandae sapiente sit ullam veritatis. Libero magni quas voluptate!
                        </p>
                    </article>
                </div>
            )
        }
    }

    class Collectors extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                users: [],
            }
        }

        render(){
            console.log(this.state.users);
            if(this.state.users == false){
                return <h1>Proszę czekać, wczytuję listę kolekcjonerów...</h1>
            }
            const list = this.state.users.map( i =>

                //let link = "/collectors/" + i.name;
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
                    console.log(data);
                    this.setState({
                        users: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    class CollectorInfo extends React.Component {
        constructor(props){
            super(props);

            this.state={
                users: [],
                usersNames: [],
                collections: [],
                itemView: "itemListHidden",
                colView: "colNormal",
            }
        }
        render(){

            if(this.state.users == false){
                return <h1>Proszę czekać, sprawdzam poprawność...</h1>
            }

            if(this.state.usersNames.indexOf(this.props.match.params.collector) != -1){
                const thisUserCollections = [];
                for(let i=0; i<this.state.collections.length; i++){
                    console.log(this.state.collections[i].author);
                    if(this.props.match.params.collector == this.state.collections[i].author){
                        console.log(this.state.collections[i]);
                        thisUserCollections.push(this.state.collections[i]);
                    }
                }
                const list = thisUserCollections.map( i =>
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

        renderCollection = (e) => {
            console.log(e.target);
            this.setState({
                itemView: this.state.itemView == "itemList" ? "itemListHidden" : "itemList",
                colView: this.state.colView == "colNormal" ? "colBig" : "colNormal"
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
                    console.log(data);
                    this.setState({
                        collections: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })

        }
    }
    class Collections extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                collections: [],
                itemView: "itemListHidden",
                colView: "colNormal",
            }
        }
        renderCollection = (e) => {
            console.log(e.target);
            this.setState({
                itemView: this.state.itemView == "itemList" ? "itemListHidden" : "itemList",
                colView: this.state.colView == "colNormal" ? "colBig" : "colNormal"
            })
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
                    console.log(data);
                    this.setState({
                        collections: data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
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
    class Insert extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                id: 666,
                colName: "Nazwa kolekcji",
                author: "Ksywa autora",
                data: 1,
                name: 2,
                artist: 3,
                image: 4,
                date: 5,
                tags: 6,
                readyToSend: ``,
            }
        }
        handleChangeId = (e) => {
            //NIEE TU MA SIE ROBIC AUTOMATYCZNIE
            this.setState({
                id: e.target.value,
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
        handleHeadClick = () => {
            console.log("klik");
        }
        render(){
            return (
                <div>
                    <div className="collectionHead">
                        <input type="text" value={this.state.id} onChange={this.handleChangeId}/>
                        <input type="text" value={this.state.colName} onChange={this.handleChangeColName}/>
                        <input type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
                        <button onClick={this.handleHeadClick}>Stwórz nagłówek inputu</button>
                    </div>
                    <div>
                        <input type="text" value={this.state.readyToSend}/>
                    </div>
                </div>
            )
        }
    };
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
    class App extends React.Component {
        render(){
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
                            <Foot />
                        </div>
                    </HashRouter>
                </div>
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    )
})