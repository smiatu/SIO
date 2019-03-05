import React, { Component } from 'react';

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

    // event na klik zwijajacy/rozwijajacy widok kolekcji - listy, zmieniajacy widok naglowka kolekcji, scrollIntoView poki co nie dziala
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
};

export default Collections;