import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50 },
  form: { padding: 16 },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#1a1a1a' 
  },
  input: { 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    marginBottom: 12, 
    fontSize: 16 
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  btnRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 12 
  },
  infoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    marginBottom: 10 
  },
  coords: { fontSize: 12, color: '#666', fontFamily: 'monospace' },
  preview: { 
    width: '100%', 
    height: 200, 
    borderRadius: 8, 
    marginVertical: 10, 
    borderWidth: 1, 
    borderColor: '#ccc' 
  },
  saveBtn: { marginTop: 10, marginBottom: 20 },
  listHeader: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginHorizontal: 16, 
    marginBottom: 10, 
    color: '#333' 
  },
  list: { paddingHorizontal: 16, paddingBottom: 40 },
});