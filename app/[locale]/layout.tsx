import { I18nProviderClient } from "@/locales/client";

export const runtime = 'edge'

export default function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: React.ReactElement }) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
}
