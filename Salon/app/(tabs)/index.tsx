import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header/Heaader';
import { AppointmentCard } from '../../components/Appointment/AppointmentCard';
import { ServiceList } from '../../components/services/servicelist';
import { SalonCard } from '../../components/saloon/SaloonCard';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* edges={['top']} ensures the header is below the status bar but allows 
          the background to flow behind the bottom tab bar seamlessly. */}
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* 1. Header Section */}
          <Header />
          
          {/* 2. Appointment Banner */}
          <AppointmentCard />

          {/* 3. Services Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Services</Text>
            <TouchableOpacity>
               <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <ServiceList />

          {/* 4. Nearest Salon Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearest salon</Text>
            <TouchableOpacity>
               <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.listPadding}>
            <SalonCard 
              name="Bella Rinova" 
              address="6391 Elgin St. Celina, Delaware 1..." 
              rating="4.8" 
              dist="5"
              image={{ uri: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800' }} 
            />
          </View>

          {/* 5. Bottom Spacer 
              Since you're using a transparent/clean tab bar, 
              this height ensures your last piece of content is fully visible 
              above the icons.
          */}
          <View style={styles.bottomSpacer} />
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20, 
    marginTop: 25 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1A1A1A'
  },
  viewAll: { 
    color: '#A0A0A0', 
    fontSize: 12 
  },
  listPadding: { 
    paddingHorizontal: 20, 
    marginTop: 15,
  },
  bottomSpacer: {
    height: 120, // Adjusted to make room for the icon-only tab bar
  }
});