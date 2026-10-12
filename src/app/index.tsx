import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function HomeScreen() {
  const router = useRouter();
  const [clima, setClima] = useState<string | null>(null);
  const [loadingClima, setLoadingClima] = useState(true);

  // API Dinâmica do Clima (Open-Meteo + IP API)
  useEffect(() => {
    async function buscarClimaInteligente() {
      let cidade = "Jaboatão dos Guararapes";
      let estado = "PE";
      let lat = -8.11;
      let lon = -34.92;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const respostaGeolocalizacao = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);

        if (respostaGeolocalizacao.ok) {
          const dadosLocal = await respostaGeolocalizacao.json();
          if (dadosLocal.city && dadosLocal.latitude) {
            cidade = dadosLocal.city;
            estado = dadosLocal.region_code || "PE";
            lat = dadosLocal.latitude;
            lon = dadosLocal.longitude;
          }
        }
      } catch (erro) {
        console.log("Geolocalização dinâmica bloqueada/lenta. Usando local padrão.");
      }

      try {
        const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const respostaClima = await fetch(urlClima);
        const dadosClima = await respostaClima.json();

        const temperatura = dadosClima.current_weather.temperature;
        setClima(`📍 ${cidade}/${estado}: ${temperatura}°C (Tempo Real)`);
      } catch (erroClima) {
        setClima("Não foi possível carregar o clima.");
      } finally {
        setLoadingClima(false);
      }
    }

    buscarClimaInteligente();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerSubtitle}>BEM-VINDO AO PORTFÓLIO DE</Text>
          <Text style={styles.headerTitle}>Gabriel Soares</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Desenvolvedor & Estudante de TI</Text>
          </View>
        </View>

        {/* Card Perfil */}
        <View style={styles.profileCard}>
        <Image
        source={require('../../assets/images/foto.png')}
        style={styles.profileImage}
        />
          <Text style={styles.profileName}>Gabriel Soares</Text>
          <Text style={styles.profileRole}>Estudante na UNICAP</Text>
        </View>

        {/* Objetivo Profissional */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="flag-outline" size={24} color="#1E3A8A" />
            <Text style={styles.cardTitle}>Objetivo Profissional</Text>
          </View>
          <Text style={styles.cardText}>
            Atuar como estagiário na área de redes e infraestrutura de TI ou Desenvolvimento de Software, contribuindo para a manutenção de sistemas, enquanto desenvolvo experiência prática e aprimoro meus conhecimentos técnicos.
          </Text>
        </View>

        {/* Grid de Navegação */}
        <Text style={styles.sectionTitle}>Navegue pelas Seções</Text>
        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/sobre')}>
            <Ionicons name="person-outline" size={26} color="#2563EB" />
            <Text style={styles.menuText}>Sobre Mim</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/academica')}>
            <Ionicons name="school-outline" size={26} color="#2563EB" />
            <Text style={styles.menuText}>Formação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/profissional')}>
            <Ionicons name="briefcase-outline" size={26} color="#2563EB" />
            <Text style={styles.menuText}>Experiências</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/projetos')}>
            <Ionicons name="code-slash-outline" size={26} color="#2563EB" />
            <Text style={styles.menuText}>Projetos</Text>
          </TouchableOpacity>
        </View>

        {/* Widget Clima Real */}
        <View style={styles.climaCard}>
          <Ionicons name="partly-sunny-outline" size={22} color="#1E3A8A" />
          {loadingClima ? (
            <ActivityIndicator size="small" color="#1E3A8A" />
          ) : (
            <Text style={styles.climaText}>{clima}</Text>
          )}
        </View>

        {/* Rodapé com Links para Privacidade e Termos */}
        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => router.push('/privacidade')}>
              <Text style={styles.footerLinkText}>Política de Privacidade</Text>
            </TouchableOpacity>
            <Text style={styles.footerDivider}>•</Text>
            <TouchableOpacity onPress={() => router.push('/termos')}>
              <Text style={styles.footerLinkText}>Termos de Serviço</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>© 2026 Gabriel Soares</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  headerContainer: { marginBottom: 20, marginTop: 10 },
  headerSubtitle: { fontSize: 12, fontWeight: '700', color: '#2563EB', letterSpacing: 1.5 },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#0F172A', marginTop: 4 },
  badge: { backgroundColor: '#DBEAFE', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginTop: 8 },
  badgeText: { color: '#1E3A8A', fontSize: 12, fontWeight: '600' },
  profileCard: { backgroundColor: '#1E3A8A', borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: '#FFFFFF', marginBottom: 12 },
  profileName: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
  profileRole: { fontSize: 14, color: '#93C5FD', marginTop: 2 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 20, borderWidth: 1, borderColor: '#E2E8F0' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  cardText: { fontSize: 14, color: '#475569', lineHeight: 22 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A', marginBottom: 12 },
  menuGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 20 },
  menuItem: { backgroundColor: '#FFFFFF', width: '48%', padding: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0', gap: 8 },
  menuText: { fontSize: 14, fontWeight: '600', color: '#1E3A8A' },
  climaCard: { backgroundColor: '#EFF6FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#BFDBFE', marginBottom: 20, gap: 8 },
  climaText: { fontSize: 13, fontWeight: '600', color: '#1E3A8A' },
  footer: { alignItems: 'center', paddingVertical: 10, gap: 8 },
  footerLinks: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  footerLinkText: { fontSize: 12, color: '#2563EB', fontWeight: '600' },
  footerDivider: { color: '#94A3B8', fontSize: 12 },
  footerText: { fontSize: 12, color: '#94A3B8' },
});
