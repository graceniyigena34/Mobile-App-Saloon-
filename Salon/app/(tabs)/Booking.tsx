import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SALONS = [
  { id: '1', name: 'Green Apple', address: '6391 Elgin St. Celina, Delaware', rating: '5.0', dist: '15 km', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
  { id: '2', name: 'Bella Rinova', address: '8502 Preston Rd. Inglewood', rating: '4.0', dist: '22 km', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400' },
  { id: '3', name: 'The Galleria', address: '4140 Parker Rd. Allentown', rating: '3.0', dist: '48 km', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400' },
  { id: '4', name: 'Michael Saldana', address: '3891 Ranchview Dr. Richardson', rating: '4.0', dist: '89 km', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400' },
];

const ARTISTS = [
  { id: '1', name: 'Lily', role: 'Hair Stylist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
  { id: '2', name: 'Lee', role: 'Sr. Barber', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
  { id: '3', name: 'Connor', role: 'Makeup Artist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
];

const CATEGORIES = ['All', 'Haircuts', 'Make up', 'Massage', 'Skin care'];

export default function BookingScreen() {
  const [selectedCat, setSelectedCat] = useState('All');
  const router = useRouter();

  const renderHeader = () => (
    <View style={{ backgroundColor: '#FFF' }}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#A0A0A0" />
          <TextInput placeholder="Search Salon" style={styles.input} placeholderTextColor="#A0A0A0" />
          <TouchableOpacity style={styles.filterBtn}>
            <Feather name="sliders" size={18} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 50, marginTop: 15 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catList}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity 
              key={cat} 
              onPress={() => setSelectedCat(cat)}
              style={[styles.catItem, selectedCat === cat && styles.catItemActive]}
            >
              <Text style={[styles.catText, selectedCat === cat && styles.catTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>Popular artists</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.artistList}>
        {ARTISTS.map((artist) => (
          <View key={artist.id} style={styles.artistCard}>
            <Image source={{ uri: artist.image }} style={styles.artistImg} />
            <Text style={styles.artistName}>{artist.name}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.resultsInfo}>
        <Text style={styles.resultsCount}>Results found (246)</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SALONS}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.salonCard}>
            <Image source={{ uri: item.image }} style={styles.salonImg} />
            <View style={styles.salonDetails}>
              <View>
                <Text style={styles.salonName}>{item.name}</Text>
                <Text style={styles.salonAddress} numberOfLines={1}>{item.address}</Text>
              </View>
              
              <View style={styles.footerRow}>
                <View style={styles.ratingBox}>
                  <Ionicons name="star" size={14} color="#FFB800" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.distText}> | {item.dist}</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.bookBtn}
                  onPress={() => router.push({
                    // FIX: Use absolute path and pass id in params
                    pathname: `../appointment/[id].tsx`,
                    params: { 
                      name: item.name, 
                      address: item.address, 
                      image: item.image 
                    }
                  })}
                >
                  <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 10 },
  searchBar: { flex: 1, flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 15, paddingHorizontal: 15, height: 50, alignItems: 'center' },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  filterBtn: { borderLeftWidth: 1, borderLeftColor: '#E0E0E0', paddingLeft: 10 },
  catList: { paddingHorizontal: 20 },
  catItem: { paddingHorizontal: 15, justifyContent: 'center', height: 40, marginRight: 10 },
  catItemActive: { borderBottomWidth: 2, borderBottomColor: '#6C63FF' },
  catText: { color: '#A0A0A0', fontWeight: '500' },
  catTextActive: { color: '#6C63FF', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 25 },
  artistList: { paddingHorizontal: 20, marginTop: 15 },
  artistCard: { alignItems: 'center', marginRight: 25 },
  artistImg: { width: 65, height: 65, borderRadius: 35, backgroundColor: '#EEE' },
  artistName: { marginTop: 8, fontSize: 13, fontWeight: '500', color: '#1A1A1A' },
  resultsInfo: { paddingHorizontal: 20, marginTop: 25, marginBottom: 10 },
  resultsCount: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A' },
  salonCard: { flexDirection: 'row', marginHorizontal: 20, backgroundColor: '#FFF', borderRadius: 20, padding: 12, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 } },
  salonImg: { width: 90, height: 90, borderRadius: 15 },
  salonDetails: { flex: 1, marginLeft: 15, justifyContent: 'space-between' },
  salonName: { fontSize: 17, fontWeight: 'bold', color: '#1A1A1A' },
  salonAddress: { fontSize: 13, color: '#A0A0A0', marginTop: 2 },
  footerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  ratingBox: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { marginLeft: 4, fontWeight: 'bold', fontSize: 13, color: '#1A1A1A' },
  distText: { fontSize: 13, color: '#A0A0A0' },
  bookBtn: { backgroundColor: '#6C63FF', paddingHorizontal: 22, paddingVertical: 10, borderRadius: 12 },
  bookText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 }
});