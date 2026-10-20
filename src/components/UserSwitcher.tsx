import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useUser } from '../context/UserContext';

const PEOPLE = [
  { id: 1, label: 'Gabriel' },
  { id: 2, label: 'Maria' },
];

export default function UserSwitcher() {
  const { userId, setUserId } = useUser();

  return (
    <View style={styles.row}>
      {PEOPLE.map((p) => {
        const active = p.id === userId;
        return (
          <Pressable
            key={p.id}
            onPress={() => setUserId(p.id)}
            style={[styles.pill, active && styles.pillActive]}
          >
            <Text style={[styles.text, active && styles.textActive]}>{p.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 6, marginRight: 12 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#93C5FD',
  },
  pillActive: { backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' },
  text: { color: '#DBEAFE', fontSize: 12, fontWeight: '600' },
  textActive: { color: '#1E3A8A' },
});