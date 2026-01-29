import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

// Menu item component for reuse
const MenuItem = ({ icon, title, color = "#1A1A1A" }: { icon: any, title: string, color?: string }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <View style={[styles.iconContainer, { backgroundColor: color + '10' }]}>
        <Feather name={icon} size={20} color={color} />
      </View>
      <Text style={styles.menuTitle}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#A0A0A0" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 1. Profile Header */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Profile</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Feather name="edit-3" size={20} color="#1A1A1A" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }} 
              style={styles.avatar} 
            />
            <View style={styles.activeBadge} />
          </View>
          <Text style={styles.userName}>Jenny Wilson</Text>
          <Text style={styles.userEmail}>jenny.wilson@example.com</Text>
        </View>

        {/* 2. Stats Section */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={[styles.statBox, styles.statBorder]}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>850</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* 3. Menu Options */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionLabel}>Account Settings</Text>
          <MenuItem icon="user" title="Personal Information" color="#6C63FF" />
          <MenuItem icon="credit-card" title="Payment Methods" color="#4CAF50" />
          <MenuItem icon="bell" title="Notifications" color="#FF9800" />
          <MenuItem icon="shield" title="Security" color="#F44336" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionLabel}>Support</Text>
          <MenuItem icon="help-circle" title="Help Center" color="#2196F3" />
          <MenuItem icon="info" title="About SalonEase" color="#9C27B0" />
        </View>

        {/* 4. Logout */}
        <TouchableOpacity style={styles.logoutBtn}>
          <MaterialIcons name="logout" size={20} color="#F44336" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 25, 
    paddingTop: 20 
  },
  screenTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  editBtn: { padding: 8, backgroundColor: '#F8F8F8', borderRadius: 12 },
  
  profileInfo: { alignItems: 'center', marginTop: 30 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  activeBadge: { 
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: '#4CAF50', 
    borderWidth: 3, 
    borderColor: '#FFF' 
  },
  userName: { fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#1A1A1A' },
  userEmail: { fontSize: 14, color: '#A0A0A0', marginTop: 5 },

  statsRow: { 
    flexDirection: 'row', 
    marginHorizontal: 25, 
    marginTop: 30, 
    backgroundColor: '#F8F8F8', 
    borderRadius: 20, 
    paddingVertical: 20 
  },
  statBox: { flex: 1, alignItems: 'center' },
  statBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#E0E0E0' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  statLabel: { fontSize: 12, color: '#A0A0A0', marginTop: 4 },

  menuSection: { marginTop: 30, paddingHorizontal: 25 },
  sectionLabel: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  menuItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 12 
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { padding: 10, borderRadius: 12, marginRight: 15 },
  menuTitle: { fontSize: 15, fontWeight: '500', color: '#1A1A1A' },

  logoutBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 40, 
    marginHorizontal: 25, 
    paddingVertical: 15, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: '#FEE2E2' 
  },
  logoutText: { color: '#F44336', fontWeight: 'bold', marginLeft: 10, fontSize: 16 }
});