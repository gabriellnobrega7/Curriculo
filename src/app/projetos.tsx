import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../context/UserContext';
import api from '../services/api';
import { User } from '../types/curriculum';

export default function ProjetosScreen() {
  const { userId } = useUser();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjectsData() {
      setLoading(true);
      try {
        const response = await api.get(`/users/${userId}/full`);
        setProfile(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de projetos da API:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProjectsData();
  }, [userId]);

  const abrirLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error('Não foi possível abrir o link:', err)
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E3A8A" />
      </View>
    );
  }

  const projects = profile?.Projects || (profile as any)?.projects || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash-outline" size={24} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Projetos & Repositórios</Text>
        </View>

        {projects.length > 0 ? (
          projects.map((proj: any) => (
            <View key={proj.id} style={styles.card}>
              <View style={styles.itemRow}>
                <Ionicons name="folder-open-outline" size={22} color="#2563EB" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemText}>{proj.title}</Text>
                  {proj.description ? (
                    <Text style={styles.itemSubText}>{proj.description}</Text>
                  ) : null}

                  {proj.link ? (
                    <TouchableOpacity
                      style={styles.githubButton}
                      onPress={() => abrirLink(proj.link)}
                    >
                      <Ionicons name="logo-github" size={16} color="#FFFFFF" />
                      <Text style={styles.githubButtonText}>Acessar Repositório</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.itemSubText}>Nenhum projeto cadastrado.</Text>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 {profile?.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  itemRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  itemText: { fontSize: 16, color: '#0F172A', fontWeight: '700', marginBottom: 4 },
  itemSubText: { fontSize: 14, color: '#475569', lineHeight: 20, marginBottom: 12 },
  githubButton: { backgroundColor: '#0F172A', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, gap: 6 },
  githubButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  footer: { alignItems: 'center', paddingVertical: 20 },
  footerText: { fontSize: 12, color: '#94A3B8' },
});