"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function EventsPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1">
                <h1 className="text-4xl font-bold mb-6">{t.nav.events}</h1>
                <p className="text-gray-600 mb-8">{language === 'en' ? 'View upcoming and past events.' : '查看即将举行和过去的活动。'}</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{language === 'en' ? 'Upcoming Gala Dinner' : '即将举行的晚宴'}</h3>
                    <p className="text-gray-600 text-sm">{language === 'en' ? 'Date: Nov 2026' : '日期：2026年11月'}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
