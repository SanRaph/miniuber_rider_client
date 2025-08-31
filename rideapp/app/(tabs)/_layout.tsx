import { Stack } from "expo-router";
import { useRouter } from "expo-router";

export default function RootLayout() {
  
  const router = useRouter();

   return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
       <Stack.Screen name="profile/[id]" options={{ title: "Profile" }} />
    </Stack>
  );
}
