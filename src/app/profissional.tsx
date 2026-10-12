import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfissionalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Experiência 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="briefcase-outline" size={22} color="#1E3A8A" />
            </View>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.roleTitle}>Jovem Aprendiz</Text>
              <Text style={styles.companyName}>Camed MicroCrédito</Text>
            </View>
            <View style={styles.badgeCurrent}>
              <Text style={styles.badgeCurrentText}>Atual</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Auxiliar nas demandas internas, gerenciando tarefas e documentos em equipe. Responsável pelo desenvolvimento e organização de planilhas operacionais.
          </Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Gestão de Documentos</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Trabalho em Equipa</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Planilhas</Text>
            </View>
          </View>
        </View>

        {/* Experiência 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="school-outline" size={22} color="#1E3A8A" />
            </View>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.roleTitle}>Monitor de Matemática</Text>
              <Text style={styles.companyName}>ETE Cícero Dias • Estado de PE</Text>
            </View>
            <View style={styles.badgeYear}>
              <Text style={styles.badgeYearText}>2024</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Atuação como monitor, ministrando aulas de reforço para estudantes. Desenvolvimento de competências chave como liderança, comunicação assertiva e trabalho em equipa.
          </Text>

          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Liderança</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Comunicação</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Aulas de Reforço</Text>
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
  roleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  companyName: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 2,
  },
  badgeCurrent: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeCurrentText: {
    color: '#15803D',
    fontSize: 11,
    fontWeight: '700',
  },
  badgeYear: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeYearText: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
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