import { useEffect } from "react"
import { router } from "expo-router"
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const IntroductionScreen = () => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            router.navigate("/home")
        },10000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])
    
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <MaterialIcons name="person" size={80} color="#007AFF" style={styles.headerIcon} />
        <Text style={styles.title}>Giới thiệu bản thân</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <FontAwesome5 name="user" size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.info}>Tên: Đặng Minh Nhật</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="id-card" size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.info}>Mã số sinh viên: 21110842</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="university" size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.info}>Trường: Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="laptop-code" size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.info}>Khoa: Công nghệ thông tin</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="code-branch" size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.info}>Chuyên ngành: Công nghệ phần mềm</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    width: 24,
  },
  info: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default IntroductionScreen;





