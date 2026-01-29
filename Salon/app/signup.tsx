import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>

        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create a new account</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#999" style={styles.icon} />
          <TextInput placeholder="Name" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
          <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push("./verify-phone")}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.link}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 24 },
  backButton: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#1A1A1A' },
  subtitle: { fontSize: 14, color: '#A0A0A0', marginBottom: 30 },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F9F9F9', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginBottom: 16,
    height: 56
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16 },
  button: { backgroundColor: '#6C63FF', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  footerText: { color: '#A0A0A0' },
  link: { color: '#6C63FF', fontWeight: '700' }
});