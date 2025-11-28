import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button, FlatList, Alert, ScrollView, Image, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

import { Place } from '../types/Place';
import { getPlaces, savePlace } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import { styles } from './HomeScreen.styles'; // Importando o CSS externo

export default function HomeScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [laboratory, setLaboratory] = useState('');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPlaces();
  }, []);

  const loadPlaces = async () => {
    try {
      const data = await getPlaces();
      setPlaces(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os registros');
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Necessário acesso à localização.');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLatitude(loc.coords.latitude);
    setLongitude(loc.coords.longitude);
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Necessário acesso à câmera.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, quality: 0.5, base64: true,
    });

    if (!result.canceled && result.assets?.[0]) {
      const asset = result.assets[0];
      const img = asset.base64 ? `data:image/jpeg;base64,${asset.base64}` : asset.uri;
      setPhoto(img);
    }
  };

  const handleSave = async () => {
    if (!title || !description || !laboratory || latitude === null || longitude === null) {
      Alert.alert('Atenção', 'Preencha Título, Descrição, Laboratório e Localização.');
      return;
    }

    try {
      setLoading(true);
      const newPlace = await savePlace({
        title, description, laboratory, latitude, longitude, photo
      });
      
      setPlaces((prev) => [newPlace, ...prev]);
      cleanForm();
      Alert.alert('Sucesso', 'Registro salvo!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar no backend.');
    } finally {
      setLoading(false);
    }
  };

  const cleanForm = () => {
    setTitle('');
    setDescription('');
    setLaboratory('');
    setLatitude(null);
    setLongitude(null);
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.headerTitle}>Cadastro de Ocorrência</Text>

        <TextInput style={styles.input} placeholder="Título do problema" value={title} onChangeText={setTitle} />
        
        <TextInput style={styles.input} placeholder="Laboratório (ex: Lab Info 02)" value={laboratory} onChangeText={setLaboratory} />
        
        <TextInput style={[styles.input, styles.textArea]} placeholder="Descrição detalhada" value={description} onChangeText={setDescription} multiline />

        <View style={styles.btnRow}>
          <Button title="📍 Localização" onPress={getLocation} />
          <Button title="📷 Foto" onPress={takePhoto} color="#6200ee" />
        </View>

        <View style={styles.infoRow}>
            <Text style={styles.coords}>Lat: {latitude ?? '-'}</Text>
            <Text style={styles.coords}>Lng: {longitude ?? '-'}</Text>
        </View>
        
        {photo && <Image source={{ uri: photo }} style={styles.preview} />}

        <View style={styles.saveBtn}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button title="Salvar Registro" onPress={handleSave} color="#2e7d32" />
          )}
        </View>
      </ScrollView>

      <Text style={styles.listHeader}>Últimos Registros</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <PlaceCard item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}