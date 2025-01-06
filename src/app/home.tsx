import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="university" size={60} color="#007AFF" />
        <Text style={styles.title}>Xin chào đến với trang chủ</Text>
      </View>
      
      <View style={styles.universityInfo}>
        <Text style={styles.sectionTitle}>Đại học Sư phạm Kỹ thuật TP.HCM</Text>
        <Text style={styles.description}>
          Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh (HCMUTE) là một trong những trường đại học hàng đầu về đào tạo kỹ thuật và công nghệ tại Việt Nam. Được thành lập vào năm 1962, trường đã đào tạo hàng ngàn kỹ sư, giáo viên kỹ thuật và nhà quản lý cho đất nước.
        </Text>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="location-on" size={24} color="#007AFF" />
          <Text style={styles.infoText}>1 Võ Văn Ngân, Thủ Đức, TP.HCM</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="school" size={24} color="#007AFF" />
          <Text style={styles.infoText}>Đào tạo đa ngành, đa lĩnh vực</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="emoji-events" size={24} color="#007AFF" />
          <Text style={styles.infoText}>Chất lượng giáo dục hàng đầu</Text>
        </View>
      </View>
      
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="user-circle" size={20} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Xem giới thiệu cá nhân</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  universityInfo: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;

