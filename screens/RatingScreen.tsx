import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';

interface DataInterface {
    data: {
        id: String,
        joke: string,
        status: string
    }

}
function RatingScreen() {
    const [state, useState] = React.useState("hahaha");
    const getJoke = async () => {
        const data: DataInterface = await axios.get('https://icanhazdadjoke.com/',
        {
            headers: {
                "Accept": "application/json"
            }
        })
        console.log(data.data.joke);
        useState(data.data.joke);
    }

    React.useEffect(() => {
        getJoke();
    }, [])
    return(
        <View style={styles.Container}>
            <Text style={styles.Title}>
                Sony Dad Joke Generator
            </Text>
            <Text style={styles.Joke}>
                {state}
            </Text>
            <Button onPress={getJoke} title="Next Joke" style={styles.JokeButton}>Next Joke</Button>
            
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      backgroundColor: '#2fd8eb',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      paddingBottom: '100px'
    },
    Title: {
        marginTop: '100px',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    Joke: {
        textAlign: 'center',
        marginBottom: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        border: '3px solid white',
        color: 'white',
        borderRadius: 15,
        padding: '10px',
    },
    JokeButton: {
    },
  });
export default RatingScreen;