
import { useRouter } from 'expo-router';
import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


export default function LandingPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={ require('./assets/1.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Registration App</Text>
        <Button title="Register" onPress={() => router.push('/register')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { backgroundColor: 'rgba(231, 221, 221, 0.5)', padding: 20, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
});


