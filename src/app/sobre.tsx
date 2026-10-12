import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Seção: Sobre Mim */}
        <View style={styles.sectionHeader}>
          <Ionicons name="person-circle-outline" size={26} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            Sou pernambucano, recifense, apaixonado por esportes (futebol, natação, vôlei) e desvendando o mundo da tecnologia aos poucos! 🚀
          </Text>
          <Text style={[styles.cardText, { marginTop: 10 }]}>
            Participei de diversas olimpíadas científicas desde o ensino fundamental e de projetos voluntários. O trabalho não para!
          </Text>

          {/* Badges de Interesses */}
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Ionicons name="football-outline" size={14} color="#1E3A8A" />
              <Text style={styles.badgeText}>Esportes</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="trophy-outline" size={14} color="#1E3A8A" />
              <Text style={styles.badgeText}>Olimpíadas</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="heart-outline" size={14} color="#1E3A8A" />
              <Text style={styles.badgeText}>Voluntariado</Text>
            </View>
          </View>
        </View>

        {/* Seção: Sobre o Desenvolvimento do App */}
        <View style={styles.sectionHeader}>
          <Ionicons name="code-working-outline" size={26} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Sobre o Desenvolvimento</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardSubtitle}>Arquitetura e Tecnologias Utilizadas</Text>
          <Text style={styles.cardText}>
            Este aplicativo mobile foi desenvolvido com o objetivo de conectar a interface em React Native com a API REST em Express, garantindo alto desempenho, boa usabilidade e carregamento otimizado.
          </Text>

          <View style={styles.techList}>
            
            <View style={styles.techItem}>
              <Ionicons name="logo-react" size={20} color="#2563EB" />
              <View style={styles.techTextContainer}>
                <Text style={styles.techTitle}>React Native & Expo Go</Text>
                <Text style={styles.techDesc}>Construção de componentes nativos para o aplicativo mobile.</Text>
              </View>
            </View>

            <View style={styles.techItem}>
              <Ionicons name="compass-outline" size={20} color="#2563EB" />
              <View style={styles.techTextContainer}>
                <Text style={styles.techTitle}>Expo Router</Text>
                <Text style={styles.techDesc}>Navegação por abas e rotas para gerenciamento das telas.</Text>
              </View>
            </View>

            <View style={styles.techItem}>
              <Ionicons name="server-outline" size={20} color="#2563EB" />
              <View style={styles.techTextContainer}>
                <Text style={styles.techTitle}>Node.js & Express (AOS)</Text>
                <Text style={styles.techDesc}>API REST para fornecimento dos dados dinâmicos do currículo.</Text>
              </View>
            </View>

            <View style={styles.techItem}>
             <Ionicons name="ellipse-outline" size={20} color="#2563EB" />
             <View style={styles.techTextContainer}>
                <Text style={styles.techTitle}>PostgreSQL (NeonDB)</Text>
                <Text style={styles.techDesc}>Banco de dados relacional na nuvem armazenando as informações.</Text>
             </View>
            </View>

          </View>
        </View>

        {/* Seção: Funcionalidades Extras */}
        <View style={styles.sectionHeader}>
          <Ionicons name="star-outline" size={24} color="#1E3A8A" />
          <Text style={styles.sectionTitle}>Funcionalidades Extras</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.extraItem}>
            <Ionicons name="partly-sunny-outline" size={22} color="#2563EB" />
            <Text style={styles.extraText}>
              Widget dinâmico de previsão do tempo integrado diretamente na página inicial.
            </Text>
          </View>
          <View style={styles.extraItem}>
            <Ionicons name="cloud-download-outline" size={22} color="#2563EB" />
            <Text style={styles.extraText}>
              Consumo assíncrono de API REST na nuvem para renderização das informações do portfólio.
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
  },
  cardSubtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },
  badge: {
    backgroundColor: '#EFF6FF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E3A8A',
  },
  techList: {
    marginTop: 16,
    gap: 14,
  },
  techItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  techTextContainer: {
    flex: 1,
  },
  techTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  techDesc: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  extraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  extraText: {
    fontSize: 14,
    color: '#334155',
    flex: 1,
    lineHeight: 20,
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