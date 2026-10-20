import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useUser } from '../context/UserContext';
import api from '../services/api';
import { User } from '../types/curriculum';

const fotoPerfil = require('../../assets/images/foto.png');

export default function HomeScreen() {
  const { userId } = useUser();
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserData() {
      setLoading(true);
      try {
        const response = await api.get(`/users/${userId}/full`);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUserData();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0052CC" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        {userId === 1 ? (
          <Image source={fotoPerfil} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarLetter}>{data?.name?.charAt(0)}</Text>
          </View>
        )}

        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.title}>{data?.title}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.bio}>{data?.bio}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.infoText}>Email: {data?.email}</Text>
        <Text style={styles.infoText}>Localização: Recife - PE</Text>
      </View>

      <Text style={styles.footer}>© 2026 {data?.name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, alignItems: 'center' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 24, marginTop: 10 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#0052CC',
  },
  avatarPlaceholder: { backgroundColor: '#DBEAFE', justifyContent: 'center', alignItems: 'center' },
  avatarLetter: { fontSize: 32, fontWeight: 'bold', color: '#1E3A8A' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  title: { fontSize: 16, color: '#64748B', marginTop: 4, textAlign: 'center' },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 10 },
  bio: { fontSize: 15, color: '#475569', lineHeight: 22 },
  infoText: { fontSize: 15, color: '#475569', marginBottom: 6 },
  footer: { marginTop: 20, color: '#94A3B8', fontSize: 12 },
});