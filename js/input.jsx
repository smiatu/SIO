export class Insert extends React.Component {
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
            </div>
        )
    }
};
