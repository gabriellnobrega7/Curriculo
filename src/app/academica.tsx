import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AcademicaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Formação 1: UNICAP */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="school-outline" size={22} color="#1E3A8A" />
            </View>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.degreeTitle}>Sistemas para Internet</Text>
              <Text style={styles.institutionName}>UNICAP • 3° Período</Text>
            </View>
            <View style={styles.badgeYear}>
              <Text style={styles.badgeYearText}>2025 - 2027</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Cursando o 3° período do curso de Sistemas para Internet na UNICAP. O curso abrange uma variedade de disciplinas, incluindo programação, desenvolvimento web, banco de dados e design de interfaces, focando no desenvolvimento prático de projetos acadêmicos.
          </Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Desenvolvimento Web</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Banco de Dados</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Dispositivos Móveis</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Design UI/UX</Text>
            </View>
          </View>
        </View>

        {/* Formação 2: ETE Cícero Dias */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="code-slash-outline" size={22} color="#1E3A8A" />
            </View>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.degreeTitle}>Técnico em Programação</Text>
              <Text style={styles.institutionName}>ETE Cícero Dias</Text>
            </View>
            <View style={styles.badgeYear}>
              <Text style={styles.badgeYearText}>Concluído 2024</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Ensino médio integrado ao curso técnico de programação de jogos digitais e sistemas, estabelecendo a base sólida em lógica, algoritmos e desenvolvimento de software.
          </Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Lógica de Programação</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Algoritmos</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Ensino Técnico</Text>
            </View>
          </View>
        </View>

        {/* Rodapé */}
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitleContainer: {
    flex: 1,
  },
  degreeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  institutionName: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 2,
  },
  badgeYear: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  badgeYearText: {
    color: '#1E3A8A',
    fontSize: 11,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 14,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tagText: {
    fontSize: 12,
    color: '#475569',
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