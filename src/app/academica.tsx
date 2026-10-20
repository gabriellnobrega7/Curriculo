import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useUser } from '../context/UserContext';
import api from '../services/api';
import { User } from '../types/curriculum';

export default function AcademicaScreen() {
  const { userId } = useUser();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAcademicData() {
      setLoading(true);
      try {
        const response = await api.get(`/users/${userId}/full`);
        setProfile(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados acadêmicos da API:', error);
      } finally {
        setLoading(false);
      }
    }
    loadAcademicData();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E3A8A" />
      </View>
    );
  }

  const academics = (profile as any)?.AcademicExperiences || [];

  const formatPeriod = (start?: string, end?: string | null) => {
    const s = start ? start.slice(0, 4) : '';
    const e = end ? end.slice(0, 4) : 'Atual';
    return s ? `${s} - ${e}` : '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {academics.length > 0 ? (
          academics.map((edu: any) => (
            <View key={edu.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Ionicons name="school-outline" size={22} color="#1E3A8A" />
                </View>
                <View style={styles.headerTitleContainer}>
                  <Text style={styles.degreeTitle}>{edu.course}</Text>
                  <Text style={styles.institutionName}>{edu.institution}</Text>
                </View>
                <View style={styles.badgeYear}>
                  <Text style={styles.badgeYearText}>
                    {formatPeriod(edu.startDate, edu.endDate)}
                  </Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.description}>Nenhuma formação cadastrada.</Text>
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
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 20, borderWidth: 1, borderColor: '#E2E8F0' },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { width: 42, height: 42, borderRadius: 10, backgroundColor: '#EFF6FF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  headerTitleContainer: { flex: 1 },
  degreeTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  institutionName: { fontSize: 13, color: '#2563EB', fontWeight: '600', marginTop: 2 },
  badgeYear: { backgroundColor: '#EFF6FF', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, borderWidth: 1, borderColor: '#BFDBFE' },
  badgeYearText: { color: '#1E3A8A', fontSize: 11, fontWeight: '700' },
  description: { fontSize: 14, color: '#475569', lineHeight: 22 },
  footer: { alignItems: 'center', paddingVertical: 10 },
  footerText: { fontSize: 12, color: '#94A3B8' },
});