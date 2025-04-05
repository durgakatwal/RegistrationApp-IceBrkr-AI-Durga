import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './app/register';



const Register = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      console.log(process.env.EXPO_PUBLIC_database_url);
      const response = await fetch(`${process.env.EXPO_PUBLIC_database_url}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.EXPO_PUBLIC_api_key,
          'Authorization': `Bearer ${process.env.EXPO_PUBLIC_api_key}`,
          'Prefer': 'return=minimal'  
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          address,
          city,
          email,
          phone,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully');
        setFirstName('');
        setLastName('');
        setAddress('');
        setCity('');
        setEmail('');
        setPhone('');
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to register');
      }
    } catch (error) {
      setError(error.message);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}
      <TextInput placeholder="First Name" value={FirstName} onChangeText={setFirstName} style={styles.input} />
      <TextInput placeholder="Last Name" value={LastName} onChangeText={setLastName} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <Button title="Submit" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default Register;