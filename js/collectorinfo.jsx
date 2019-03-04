import React from "react";


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
                // active przygotowane pod scrollIntoView
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
                        <ul className={"colUl"}>{list}</ul>
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

    export default CollectorInfo;