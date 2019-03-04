import React from "react";

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
    };

    export default Collectors;

