import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProjetosScreen() {
  const abrirLinkPremiado = () => {
    Linking.openURL(
      'https://www.alphalumen.ong.br/tbs-2020-revela-projetos-alinhados-com-os-objetivos-da-agenda-2030/'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Seção: Projetos Formais */}
        <View style={styles.sectionHeader}>
          <Ionicons name="trophy-outline" size={24} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Projetos Formais</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.itemRow}>
            <Ionicons name="ribbon-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Projeto sustentável premiado no TBS 2020</Text>
          </View>
          
          <View style={styles.itemRow}>
            <Ionicons name="business-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Grow Up Unicap + Porto Digital • 2026</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="rocket-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Rise Up em parceria com a Beyond • 2025</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="easel-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>
              Palestra sobre Inovação e Tecnologia: O Uso da IA • 2026
            </Text>
          </View>

          {/* Destaque / Link Externo */}
          <TouchableOpacity style={styles.linkButton} onPress={abrirLinkPremiado}>
            <Ionicons name="open-outline" size={18} color="#FFFFFF" />
            <Text style={styles.linkButtonText}>Visualizar Projeto Premiado (TBS 2020)</Text>
          </TouchableOpacity>
        </View>

        {/* Seção: Projetos Informais */}
        <View style={styles.sectionHeader}>
          <Ionicons name="cube-outline" size={24} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Projetos Informais</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.itemRow}>
            <Ionicons name="heart-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Projeto de rifa beneficente</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="shapes-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>
              Projeto de matemática: Geometria Espacial em 3D (Com premiação escolar)
            </Text>
          </View>
        </View>

        {/* Seção: Cursos Recentes */}
        <View style={styles.sectionHeader}>
          <Ionicons name="book-outline" size={24} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Cursos Recentes</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.itemRow}>
            <Ionicons name="code-slash-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Curso de Programação Web</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="language-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Curso Básico de Inglês • 2025</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="document-text-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>Curso de Excel Intermediário • 2025</Text>
          </View>

          <View style={styles.itemRow}>
            <Ionicons name="hardware-chip-outline" size={20} color="#2563EB" />
            <Text style={styles.itemText}>
              Manutenção de Sistemas Elétricos (SENAI) • 2026
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Gabriel Soares</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 14,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#334155',
    flex: 1,
    lineHeight: 20,
    fontWeight: '500',
  },
  linkButton: {
    backgroundColor: '#1E3A8A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 8,
    gap: 8,
  },
  linkButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
  },
});