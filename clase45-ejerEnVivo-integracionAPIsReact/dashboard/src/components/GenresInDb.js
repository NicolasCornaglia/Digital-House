import React, { Component } from 'react';
import Genre from './Genre';

class GenresInDb extends Component {

    constructor() {
        super()
        this.state = {
            genresList: [],
            classCard: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                console.log(genres)
                this.setState({ genresList: genres.data })
            })
            .catch(error => console.log(error))
    }

    changeBgColor = () => {
        if (this.state.classCard == "") {
            this.setState({
                classCard: "bg-secondary"
            })
        } else {
            this.setState({
                classCard: ""
            })
        }
    }


render() {
    return (
        <React.Fragment>
            <h6 onMouseOver={this.changeBgColor} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
            <div className={`card-body fondoCaja ${this.state.classCard}`}>
                <div className="row">
                    {this.state.genresList.map((genre, index) => {
                        return <Genre name={genre.name} key={index} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

}

export default GenresInDb;

/* let genres = [
    { genre: 'Acción' },
    { genre: 'Animación' },
    { genre: 'Aventura' },
    { genre: 'Ciencia Ficción' },
    { genre: 'Comedia' },
    { genre: 'Documental' },
    { genre: 'Drama' },
    { genre: 'Fantasia' },
    { genre: 'Infantiles' },
    { genre: 'Musical' }
] */

/* function GenresInDb(){
    return (
        <React.Fragment>
               // <!-- Categories in DB -->
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

} */