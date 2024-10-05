import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For star and search icons
import { FontAwesome5 } from 'react-native-vector-icons'; // For doctor icons

// Sample Data for the doctors
const doctors = [
  { id: '1', name: 'Dr. John Smith', specialty: 'Dermatologist', rating: '4.9', gender: 'male' },
  { id: '2', name: 'Dr. Anna Dinn', specialty: 'Psychologist', rating: '4.9', gender: 'female' },
  { id: '3', name: 'Dr. Angela Rayez', specialty: 'Therapist', rating: '4.8', gender: 'female' },
  { id: '4', name: 'Dr. Chris Bronte', specialty: 'Dentist', rating: '5.0', gender: 'male' },
];

// DoctorCard component to display each doctor's information
const DoctorCard = ({ name, specialty, rating, gender }) => {
  return (
    <View style={styles.card}>
      {/* Gender-specific icons */}
      {gender == 'male' ? (
        <FontAwesome5 name="user-md" size={50} color="#ffffff" />
      ) : (
        <FontAwesome5 name="user-nurse" size={50} color="#ffffff" />
      )}
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <View style={styles.ratingContainer}>
        {/* Star icon for rating */}
        <Icon name="star" size={16} color="#ff0000" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};

const DoctorSearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search bar with search icon */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search conditions, doctors..."
        />
      </View>

      {/* Header text */}
      <Text style={styles.header}>Let's find your doctor</Text>

      {/* FlatList to display doctor cards */}
      <FlatList
        data={doctors}
        renderItem={({ item }) => (
          <DoctorCard
            name={item.name}
            specialty={item.specialty}
            rating={item.rating}
            gender={item.gender}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // To display cards in grid format
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

// StyleSheet for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color similar to the image
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  cardContainer: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ff0000',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  specialty: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  rating: {
    color: '#800000',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default DoctorSearchScreen;