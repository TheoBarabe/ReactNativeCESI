import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
import Film from './Film'
import DetailFilm from './DetailFilm'
import { getFilmsFromApiWithSearchedText, getFilmFromApiWithId } from '../API/OMDBApi'

class Search extends React.Component {
	
  constructor(props) {
      super(props)
      this.state = {
        films: [],
        searchedText: "", // Initialisation de notre donnée searchedText dans le state
        isDetail: false
      }
  }
  
  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)

    getFilmFromApiWithId(idFilm).then(data => {
      this._films = data
      this.setState({isDetail: true});
      this.forceUpdate()
    })

	}
	
	_searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
    

	_loadFilms() {
		getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
      this._films = data.Search
      this.setState({isDetail: false});
			this.forceUpdate()
		})
  }
	
  render() {

    
    const isDetail = this.state.isDetail;
    let affichage;

    if (isDetail) {
      affichage = <DetailFilm data = {this._films}></DetailFilm>;
    } else {
      affichage = <FlatList
                    data = {this._films}
                    keyExtractor={(item) => item.imdbID.toString()}
                    renderItem={({item}) => <Film data={item} displayDetailForFilm={this._displayDetailForFilm}/>}
      />;
    }

    console.log(affichage);

    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()}
		    />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>

        {affichage}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
	marginLeft: 5,
    marginRight: 5,
    marginTop: 20
  },
  textinput: {
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search