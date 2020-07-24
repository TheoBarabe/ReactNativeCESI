import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
import Film from './Film'
import DetailFilm from './DetailFilm'
import { getFilmsFromApiWithSearchedText } from '../API/OMDBApi'



class Search extends React.Component {
	
    constructor(props) {
        super(props)
        this.state = {
          films: [],
          searchedText: "" // Initialisation de notre donnée searchedText dans le state
        }
    }
  
    _displayDetailForFilm = (idFilm) => {
		console.log("Display film with id " + idFilm)
	}
	
	_searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
    

	_loadFilms() {
		getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
			this._films = data.Search
			this.forceUpdate()
			console.log(this._films)
		})
	}
	
  render() {

    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()}
		    />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>

        <FlatList
            data = {this._films}
            keyExtractor={(item) => item.imdbID.toString()}
            renderItem={({item}) => <Film data={item} displayDetailForFilm={this._displayDetailForFilm}/>}
        />
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