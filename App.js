import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { ThemeContext } from "./src/components/ThemeContext";
import MyKeyBoard from "./src/components/MyKeyBoard";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch value={theme === 'dark'}
        onValueChange={()=>setTheme(theme === 'light' ? 'dark' : 'light')} />
        <MyKeyBoard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
