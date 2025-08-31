import { Stack } from "expo-router";
import { useRouter } from "expo-router";

export default function RootLayout() {
  
  const router = useRouter();

   return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" , headerShown: false}} />
      <Stack.Screen name="about" options={{ title: "About Us", headerShown: false }} />
      <Stack.Screen name="reset" options={{ title: "Reset", headerShown: false }} />
      <Stack.Screen name="profile/[id]" options={{ title: "Profile", headerShown: false }} />

    </Stack>
  );
}
