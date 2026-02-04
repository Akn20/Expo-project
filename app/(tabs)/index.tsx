import React, { useEffect } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



const AppInput = (props: any) => (
  <TextInput style={styles.input} {...props} />
);

const AppButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

const AppHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);



const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <View style={styles.center}>
      <Text style={styles.logo}>Heaven</Text>
      <Text>Loading...</Text>
    </View>
  );
};

const LoginScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>

    <AppInput placeholder="Email / Mobile" />
    <AppInput placeholder="Password" secureTextEntry />

    <AppButton title="Login" onPress={() => navigation.replace('Home')} />

    <Text style={styles.link}>Forgot Password?</Text>
    <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
      Create Account
    </Text>
  </View>
);

const RegisterScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Register</Text>

    <AppInput placeholder="Name" />
    <AppInput placeholder="Email / Mobile" />
    <AppInput placeholder="Password" secureTextEntry />
    <AppInput placeholder="Confirm Password" secureTextEntry />

    <AppButton title="Register" onPress={() => navigation.replace('Home')} />
  </View>
);

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1 }}>
    <AppHeader title="Welcome, User" />

    <View style={styles.menu}>
      <AppButton title="Profile" onPress={() => navigation.navigate('Profile')} />
      <AppButton title="Settings" onPress={() => {}} />
      <AppButton title="About" onPress={() => {}} />
      <AppButton title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1 }}>
    <AppHeader title="Profile" />

    <View style={styles.content}>
      <Text>Name: Wang Li</Text>
      <Text>Email: Wangli@gmail.com</Text>
      <Text>Mobile: 9996786745</Text>

      <AppButton title="Edit Profile" onPress={() => {}} />
    </View>
  </View>
);



export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    height: 48,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    padding: 16,
    backgroundColor: '#007bff',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    padding: 20,
  },
  content: {
    padding: 20,
    gap: 10,
  },
  logoImage: {
  width: 120,
  height: 120,
  marginBottom: 16,
},

});
