import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  badge: { 
    backgroundColor: '#e0f7fa', 
    alignSelf: 'flex-start', 
    padding: 4, 
    borderRadius: 4, 
    marginBottom: 4 
  },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#006064' },
  cardDescription: { fontSize: 14, marginBottom: 4, color: '#333' },
  cardCoords: { fontSize: 12, color: '#666', marginBottom: 4 },
  cardImage: { width: '100%', height: 180, borderRadius: 8, marginTop: 8 },
  cardDate: { fontSize: 10, color: '#999', marginTop: 8, textAlign: 'right' },
});