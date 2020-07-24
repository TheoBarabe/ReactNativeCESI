import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default function DetailFilm({data }){

	return (
      <TouchableOpacity style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: data.Poster}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{data.Title}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Genres : {data.Genre}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Acteurs : {data.Actors}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Réalisateurs : {data.Director}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Producteurs : {data.Production}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Box Office {data.BoxOffice}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.description_text}>Résumé : {data.Plot}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.date_text}>Note {data.imdbRating} / 10</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti en {data.Year}</Text>
          </View>
          
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: '100%',
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  Note: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})