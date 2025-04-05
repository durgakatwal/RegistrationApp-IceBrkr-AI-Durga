'use client'; 
import { useState } from 'react';
import styles from '../styles/RegisterPage.module.css'; // Register Page Styles

const RegisterPage = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.NEXT_PUBLIC_API_KEY,
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Prefer': 'return=minimal',
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
        alert('User registered successfully');
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
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registration Form</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
