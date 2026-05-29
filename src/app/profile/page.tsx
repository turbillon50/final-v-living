import type { Metadata } from "next";
import { ProfileView } from "@/components/pages/ProfileView";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Tu cuenta, membresía y preferencias V Living.",
};

export default function ProfilePage() {
  return <ProfileView />;
}
