import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import UserSwitcher from '../components/UserSwitcher';
import { UserProvider } from '../context/UserContext';

export default function Layout() {
  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: '#1E3A8A' },
          headerTintColor: '#FFFFFF',
          headerRight: () => <UserSwitcher />,
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#64748B',
          tabBarStyle: { paddingBottom: 5, height: 60 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            headerTitle: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            title: 'Sobre',
            headerTitle: 'Sobre Mim',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="academica"
          options={{
            title: 'Acadêmica',
            headerTitle: 'Formação Acadêmica',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profissional"
          options={{
            title: 'Profissional',
            headerTitle: 'Experiência Profissional',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            title: 'Projetos',
            headerTitle: 'Projetos Desenvolvidos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="code-slash-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Oculta os botões da barra inferior mantendo as telas acessíveis */}
        <Tabs.Screen
          name="termos"
          options={{
            href: null,
            headerTitle: 'Termos de Serviço',
          }}
        />
        <Tabs.Screen
          name="privacidade"
          options={{
            href: null,
            headerTitle: 'Política de Privacidade',
          }}
        />
      </Tabs>
    </UserProvider>
  );
}