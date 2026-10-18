import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import api from '../services/api';
import { User } from '../types/curriculum';

export default function HomeScreen() {
 const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserData() {
      try {
        const response = await api.get('/users/1/full');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUserData();
  }, []);

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
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>
            {data?.name ? data.name.substring(0, 2).toUpperCase() : 'GS'}
          </Text>
        </View>
        <Text style={styles.name}>{data?.name || 'Gabriel Soares'}</Text>
        <Text style={styles.title}>{data?.title || 'Desenvolvedor Full Stack'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.bio}>
          {data?.bio || 'Estudante de Sistemas para Internet na UNICAP, focado em desenvolvimento web e mobile.'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.infoText}>Email: {data?.email}</Text>
        <Text style={styles.infoText}>Localização: Recife - PE</Text>
      </View>

      <Text style={styles.footer}>© 2026 Gabriel Soares</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  content: { padding: 20, alignItems: 'center' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { alignItems: 'center', marginBottom: 24, marginTop: 10 },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#0052CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  title: { fontSize: 16, color: '#64748B', marginTop: 4 },
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