
import React from 'react';
import { StyleSheet, Image, Platform, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {

  const [textNombre, onChangeTextNombre] = React.useState('');
  const [textCantidad, onChangeTextCantidad] = React.useState('');
  const [textFecha, onChangeTextFecha] = React.useState('');
  const [textDescripcion, onChangeTextDescripcion] = React.useState('');



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#004AAD', dark: '#004AAD' }}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Registrar Medicamentos</ThemedText>
      </ThemedView>
      <ThemedText>Nombre</ThemedText>
      <TextInput
          style={styles.input}
          onChangeText={onChangeTextNombre}
          value={textNombre}
        />
      <ThemedText>Cantidad</ThemedText>
      <TextInput
          style={styles.input}
          onChangeText={onChangeTextCantidad}
          value={textCantidad}
        />
      <ThemedText>Fecha de Caducidad</ThemedText>
      <TextInput
          style={styles.input}
          onChangeText={onChangeTextFecha}
          value={textFecha}
        />
      <ThemedText>Descripcion</ThemedText>
      <TextInput
          style={styles.input}
          onChangeText={onChangeTextDescripcion}
          value={textDescripcion}
        />
        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor:'#004AAD',
    padding: 0,
  },
});
