"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { NEWS_ITEMS } from "@/lib/data/news";

export default function NewsDetailPage() {
    const params = useParams();
    const id = parseInt(params.id as string);
    const { language } = useLanguage();
    const t = translations[language];

    const news = NEWS_ITEMS.find((item) => item.id === id);

    if (!news) {
        return (
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Header />
                <main className="container mx-auto px-4 py-20 flex-1 text-center">
                    <h1 className="text-2xl font-bold mb-4">News not found</h1>
                    <Link href="/news" className="text-scfa-navy hover:underline">Back to News</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <Link href="/news" className="text-scfa-navy hover:underline mb-8 inline-block">
                    ← {language === 'en' ? 'Back to News' : '返回新闻列表'}
                </Link>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="relative h-[400px] w-full">
                        <Image
                            src={news.image}
                            alt={news.title[language]}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        <p className="text-scfa-red font-semibold mb-4 uppercase tracking-wider">{news.date[language]}</p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
                            {news.title[language]}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {news.summary[language]}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
