import { PortalSidebar } from "@/components/PortalSidebar";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-7xl mx-auto relative">
      <PortalSidebar />
      <main className="flex-1 min-w-0 p-margin-mobile md:p-margin-desktop pb-32">
        {children}
      </main>
    </div>
  );
}
