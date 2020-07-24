import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
import Film from './Film'
import { getFilmsFromApiWithSearchedText } from '../API/OMDBApi'

const testData = [
   {
      id:181808,
      vote_average:7.2,
      title:"Star Wars VIII - Les derniers Jedi",
      poster_path:"",
      original_title:"Star Wars: The Last Jedi",
      overview:"Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
      release_date:"2017-12-13"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"La Guerre des étoiles",
      poster_path:"",
      original_title:"Star Wars",
      overview:"Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l’Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...",
      release_date:"1977-05-25"
   }
]


class Search extends React.Component {
	
	constructor(props) {
		super(props)
		this._films = []
  }

  _loadFilms() {


    getFilmsFromApiWithSearchedText("star").then(data => {
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
            //data={testData}
            data = {this._films}
            keyExtractor={(item) => item.imdbID.toString()}
            renderItem={({item}) => <Film data={item}/>}
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