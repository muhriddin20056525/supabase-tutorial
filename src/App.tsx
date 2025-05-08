import { useEffect, useState } from "react";

import TaskManager from "./components/TaskManager";
import { supabase } from "./supabase-client";
import { Auth } from "./components/Auth";

function App() {
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    // Supabase orqali joriy (hozirgi) sessiyani asinxron tarzda olish
    const currentSession = await supabase.auth.getSession();

    // Olingan sessiyani React holatiga (state) saqlash
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();
    // Supabase autentifikatsiya holati o'zgarganda (login yoki logout bo'lsa) ishlaydigan listener qo'shilyapti
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // Har safar foydalanuvchi holati o'zgarganda (masalan: login bo'lsa) session holatini yangilaymiz
        setSession(session);
      }
    );

    // Komponent unmount (yo'qolayotgan) bo'lganda listenerni tozalaymiz (memory leak bo'lmasligi uchun)
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {session ? (
        <>
          <button onClick={logout}>Log out</button>
          <TaskManager session={session} />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
