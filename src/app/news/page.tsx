"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

import { NEWS_ITEMS } from "@/lib/data/news";

export default function NewsPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1">
                <h1 className="text-4xl font-bold mb-8 text-scfa-red">{t.newsPage.title}</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {NEWS_ITEMS.map((item) => (
                        <div key={item.id} className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100 flex flex-col">
                            <div className="relative h-48 w-full bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title[language]}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-xs text-scfa-red font-semibold mb-2 uppercase tracking-wider">{item.date[language]}</p>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-scfa-navy">{item.title[language]}</h3>
                                <p className="text-gray-600 text-sm line-clamp-4 mb-4 flex-1">{item.summary[language]}</p>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-scfa-navy font-bold text-sm hover:underline self-start"
                                >
                                    {t.latestNews.readMore} →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
