import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: {
    default: "ghostCoder",
    template: "%s - ghostCoder",
  },
  description: "Learn fast Coding and DSA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
