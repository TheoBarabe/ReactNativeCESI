import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function DetailFilm({data }){

	return (
		<ScrollView style={styles.scrollview_container}>
			<Image
				style={styles.image}
				source={{uri: data.Poster}}
			/>
			<Text style={styles.title_text}>{data.Title}</Text>
			<Text style={styles.description_text}>{data.Plot}</Text>
			<Text style={styles.default_text}>Sorti le {data.Released}</Text>
			<Text style={styles.default_text}>Durée : {data.Runtime}</Text>
			<Text style={styles.default_text}>Acteurs : {data.Actors}</Text>
			<Text style={styles.default_text}>Note : {data.imdbRating} / 10</Text>
			<Text style={styles.default_text}>Box Office : {data.BoxOffice}</Text>
			<Text style={styles.default_text}>Genre(s) : {data.Genre}</Text>
			<Text style={styles.default_text}>Récompenses : {data.Awards}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5,
	resizeMode: 'contain'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})