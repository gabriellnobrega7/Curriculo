import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TermosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text-outline" size={24} color="#1E3A8A" />
            <Text style={styles.cardTitle}>Termos de Serviço</Text>
          </View>
          <Text style={styles.cardText}>
            Todo o conteúdo exibido neste aplicativo (textos, imagens e projetos) possui direitos reservados e serve exclusivamente como portfólio profissional de Gabriel Soares. O uso indevido ou cópia não autorizada das informações aqui contidas para fins comerciais não é permitido.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Gabriel Soares</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { padding: 20 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 14 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  cardText: { fontSize: 14, color: '#475569', lineHeight: 22 },
  footer: { alignItems: 'center', paddingVertical: 10 },
  footerText: { fontSize: 12, color: '#94A3B8' },
});