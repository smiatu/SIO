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
                    <article>
                        <h2>Witamy na Stuff I OWN</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consectetur facere id mollitia, odio quas voluptatem? Debitis deserunt ipsam laudantium natus porro. Aliquam autem beatae ducimus eaque esse exercitationem impedit ipsam iusto nesciunt nisi numquam perferendis perspiciatis quam quia recusandae repudiandae rerum, sit suscipit ullam ut velit voluptates voluptatum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium blanditiis consequatur, consequuntur corporis cupiditate dignissimos dolor eaque est illo incidunt magnam magni nobis nulla officia, provident ratione sapiente vero! Aliquam animi aperiam asperiores, atque blanditiis commodi cupiditate debitis distinctio dolor dolore eaque, eligendi eos error eum explicabo impedit in incidunt ipsam minima nobis odit optio perspiciatis porro praesentium saepe sapiente ut. Enim eum fuga iste labore laborum, magnam nostrum perferendis quasi rem repudiandae sequi temporibus ut voluptas? Aspernatur, fuga, nam. Ab aliquam autem corporis, debitis delectus doloremque enim ipsum, molestiae nemo nulla pariatur perspiciatis reiciendis reprehenderit. Aliquid, provident quod.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda deleniti eius, eos eveniet facilis in ipsum modi molestias nostrum, vero voluptas voluptatibus! Consectetur id illum inventore natus quos. Assumenda nesciunt nihil voluptatem voluptatibus. Ad aliquam dignissimos dolor eius esse explicabo fugiat fugit harum illum ipsum minus nihil obcaecati provident sed sit, soluta sunt tenetur unde ut voluptate? Ad delectus dignissimos, explicabo itaque laboriosam laborum obcaecati perferendis quos recusandae temporibus? Autem dolor earum eum explicabo magnam omnis perspiciatis praesentium voluptatem.</p>
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
            const list = this.state.users.map( i => <li key={i.id} className={"collectors"}><img src={i.avatar} /><h3>{i.name}</h3><p>{i.description}</p></li>)
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
                     <div onClick={this.renderCollection}>
                         <h3>{i.colName}</h3>
                         <p>Właściciel: {i.author}</p>
                         <ul className={this.state.itemView}>
                             {i.data.map(j =>
                                 <li>
                                     <img src={j.image} />
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
                <div>
                    <p>dane kontaktowe</p>
                    <br />
                    <hr />
                    <p>adresy maile telefony nazwiska</p>
                    <br />
                    <h1>rodo jest dla frajerow</h1>
                    <br />

                </div>
            )
        }
    }
    class Insert extends React.Component {
        constructor(props){
            super(props);


        }

        render(){
            return (
                <div>
                    <form>

                    </form>
                </div>
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
                                <Route exact path="/collections" component={Collections} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/insert" component={Insert} />
                            </Switch>
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