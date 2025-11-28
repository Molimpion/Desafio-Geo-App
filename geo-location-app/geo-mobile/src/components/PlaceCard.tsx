import React from 'react';
import { View, Text, Image } from 'react-native';
import { Place } from '../types/Place';
import { styles } from './PlaceCard.styles';

type Props = {
  item: Place;
};

export default function PlaceCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Lab: {item.laboratory}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>
      
      <Text style={styles.cardCoords}>
        Lat: {item.latitude.toFixed(5)} | Lng: {item.longitude.toFixed(5)}
      </Text>
      
      {item.photo && (
        <Image source={{ uri: item.photo }} style={styles.cardImage} />
      )}
      
      {item.createdAt && (
        <Text style={styles.cardDate}>
          {new Date(item.createdAt).toLocaleString()}
        </Text>
      )}
    </View>
  );
}