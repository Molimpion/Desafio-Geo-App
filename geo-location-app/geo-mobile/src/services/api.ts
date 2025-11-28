import { Place } from '../types/Place';

// SUBSTITUA PELO SEU IP DO BACKEND
const API_URL = 'http://172.26.47.72:3000'; 

export const getPlaces = async (): Promise<Place[]> => {
  try {
    const res = await fetch(`${API_URL}/api/places`);
    return await res.json();
  } catch (error) {
    throw new Error('Erro ao buscar locais');
  }
};

export const savePlace = async (placeData: Omit<Place, '_id' | 'createdAt'>) => {
  try {
    const res = await fetch(`${API_URL}/api/places`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(placeData),
    });

    if (!res.ok) {
      throw new Error('Falha ao salvar');
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
};