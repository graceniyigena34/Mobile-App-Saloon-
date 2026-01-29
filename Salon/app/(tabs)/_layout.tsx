import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1A1A1A',
        tabBarInactiveTintColor: '#A0A0A0',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          paddingBottom: 0,
        },
      }}>
      
      {/* 1. Home (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={26} color={color} />
          ),
        }}
      />

      {/* 2. Location (location.tsx) */}
      <Tabs.Screen
        name="location"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "location" : "location-outline"} size={26} color={color} />
          ),
        }}
      />

      {/* 3. Payment (payment.tsx) */}
      <Tabs.Screen
        name="payment" // Ensure this file is app/(tabs)/payment.tsx
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "card" : "card-outline"} size={26} color={color} />
          ),
        }}
      />

      
      {/* 4. Booking (Using the Chat Bubble icon per your design) */}
      <Tabs.Screen
        name="booking"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />

      {/* 5. Profile (profile.tsx) */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}