import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 1. Import the router

export default function ForgotPassword() {
  const router = useRouter() ;// 2. Initialize the router

  return (
    <View style={styles.container}>
      {/* Back Button (Optional but recommended based on your images) */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
        <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot password</Text>
      <Text style={styles.subtitle}>Select which contact details should we use to reset your password.</Text>

      {/* Email Option - Navigates to the "Enter Email" page */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => router.push("/forgot-password-email")} 
      >
        <Ionicons name="mail-outline" size={24} color="#6C63FF" />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Via email</Text>
          <Text style={styles.optionValue}>jenny***@gmail.com</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#1A1A1A" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>

      {/* SMS Option - Navigates to the phone verification page */}
      <TouchableOpacity 
        style={styles.option}
        onPress={() => router.push("./verify-phone")}
      >
        <Ionicons name="chatbox-outline" size={24} color="#6C63FF" />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Via sms</Text>
          <Text style={styles.optionValue}>+1 713 **** 5187</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#1A1A1A" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 24, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 10 },
  subtitle: { color: '#A0A0A0', marginVertical: 20, lineHeight: 20 },
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#F0F0F0', 
    borderRadius: 16, 
    marginBottom: 16 
  },
  optionText: { marginLeft: 15 },
  optionTitle: { fontSize: 12, color: '#A0A0A0' },
  optionValue: { fontSize: 16, fontWeight: '600' }
});