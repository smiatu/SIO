import React from "react";

// podstrona z formularzem do wprowadzania danych do bazy danych kolekcji, niestety najbardziej zaśmiecony element
class Insert extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            existingCollections: [],
            id: 0,
            colName: "",
            author: "",
            data: [],
            name: "",
            artist: "",
            image: "",
            date: "",
            tags: [""],
            arrToSend: [],
            arrHead: "",
            // currentUser: this.props.currentUser,
        }
    }
    // każde okienko formularza ma swój event; event author docelowo będzie automatycznie ściągać autora z propsów - zalogowanego użytkownika,
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
    // poniższy handleClick pobiera ze state dane do stworzenia nagłówka powstającego JSONa
    handleHeadClick = () => {
        this.setState({
            arrHead: `               {"id": ${this.state.id},
            "colName": "${this.state.colName}",
            "author": "${this.state.author}",
            "data": [
                `,
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
        // const tagsFixer = this.state.tags.split("");
        const tagsFixer = '["' + this.state.tags.replace(/,/g, '", "') + '"]';
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
        let readyString = this.state.arrHead + readyArr.toString();
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
                    Id: <input type="number" value={this.state.id} onChange={this.handleChangeId}/>
                    Nazwa kolekcji: <input type="text" value={this.state.colName} onChange={this.handleChangeColName}/>
                    Kolekcjoner: <input type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
                    <button onClick={this.handleHeadClick}>Stwórz input</button>
                </div>
                <div className="collectionBody">
                    Nazwa przedmiotu: <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    Autor: <input type="text" value={this.state.artist} onChange={this.handleChangeArtist}/>
                    Url zdjęcia: <input type="text" value={this.state.image} onChange={this.handleChangeImage}/>
                    Data utworzenia: <input type="number" value={this.state.date} onChange={this.handleChangeDate}/>
                    Tagi: <input type="text" value={this.state.tags} onChange={this.handleChangeTags}/>
                    <button onClick={this.handleAddClick}>Dodaj kolejny element</button>
                </div>
                <div>
                    <h3>Podgląd pliku wyjściowego:</h3>
                    <textarea value={this.state.arrHead + this.state.arrToSend} className="toSend"/>
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
                this.setState({
                    id: this.state.existingCollections.length,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
};

// class Insert extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             id: 666,
//             colName: "Nazwa kolekcji",
//             author: "Ksywa autora",
//             data: 1,
//             name: 2,
//             artist: 3,
//             image: 4,
//             date: 5,
//             tags: 6,
//         }
//     }
//     handleChangeId = (e) => {
//         //NIEE TU MA SIE ROBIC AUTOMATYCZNIE
//         this.setState({
//             id: e.target.value,
//         })
//     }
//     handleChangeColName = (e) => {
//         this.setState({
//             colName: e.target.value,
//         })
//     }
//     handleChangeAuthor = (e) => {
//         this.setState({
//             author: e.target.value,
//         })
//     }
//     handleHeadClick = () => {
//         console.log("klik");
//     }
//     render(){
//         return (
//             <div>
//                 <div className="collectionHead">
//                     <input type="text" value={this.state.id} onChange={this.handleChangeId}/>
//                     <input type="text" value={this.state.colName} onChange={this.handleChangeColName}/>
//                     <input type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
//                     <button onClick={this.handleHeadClick}>Stwórz nagłówek inputu</button>
//                 </div>
//             </div>
//         )
//     }
// };

export default Insert;