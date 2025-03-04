import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { Divider, Button, Icon, Card } from '@rneui/base';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function HomeScreen() {

  const medicines = [
    {
      name: 'Ivermectina',
      description: 'Es efectivo contra los ectoparásitos y endoparásitos, y se aplica mediante una única inyección subcutánea o en pastillas. Sus compuestos, obtenidos a partir de la fermentación del Streptomyces avermitilis, paralizan y matan a estos molestos huéspedes que tanto hacen sufrir a nuestros compañeros.',
      date: '2025-06-28T12:35:39Z',
      quantity: '3',
    },
    {
      name: 'Amoxicilina',
      description: 'Se usa para acabar con un tipo concreto de bacterias, por lo que es necesario un diagnóstico bacteriológico previo. De este modo, el/la facultativo/a se asegurará de que las cepas son sensibles a esta medicina, que actúa sobre determinados microorganismos grampositivos y gramnegativos como el Streptococcus suis, la pasteurellosis y la colibacilosis.',
      date: '2025-04-13T20:42:39Z',
      quantity: '6',
    },
    {
      name: 'Enrofloxacina',
      description: 'La enrofloxacina es un antibiótico recomendado para tratar infecciones bacterianas de diversa índole, hablamos tanto de problemas respiratorios como gastrointestinales, cutáneos o del aparato reproductor. Eso sí, hay que evitar su administración a cachorros o a perros con problemas renales.',
      date: '2025-03-02T04:02:39Z',
      quantity: '5',
    },
  ]

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#004AAD', dark: '#004AAD' }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Registro de Medicamentos</ThemedText>
      </ThemedView>

      <ThemedView >
        <ThemedView style={styles.vertical}>
          <Button radius={"sm"} type="solid" color="#004AAD" buttonStyle={styles.buttonIcon}>
            <Icon name="sort" color="white" />
          </Button>
          <Button radius={"sm"} type="solid" color="#004AAD" buttonStyle={styles.button}>
            Registrar Nuevo
            <Icon name="add" color="white" />
          </Button>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {medicines.map((u, i) => {
          return (
            <Card key={i} containerStyle={styles.card}>
              <ThemedText type='defaultBold'>{u.name}</ThemedText>
              <ThemedText>{u.description}</ThemedText>
              <ThemedView style={styles.vertical}>
                <ThemedText type='defaultBold'>Expiracion: {u.date}</ThemedText>
                <ThemedText type='defaultBold'>Cantidad: {u.quantity}</ThemedText>
              </ThemedView>
            </Card>
          );
        })}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 0,
    marginBottom: 8,
    width: '100%',
  },
  button: {
    width: '100%',
    height: '75%'
  },
  buttonIcon: {
    width: '70%',
    height: '80%'
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card:{
    width:'100%', 
    marginLeft:0,
    borderColor:'#004AAD',
    borderRadius:5,
  }
});
