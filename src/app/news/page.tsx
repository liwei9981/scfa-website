"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const NEWS_ITEMS = [
    {
        title: {
            en: "Visit by Vice President Song Jingwu of CPAFFC",
            zh: "涉及中国人民对外友好协会副会长宋敬武的访问"
        },
        date: {
            en: "September 02, 2019",
            zh: "2019年9月2日"
        },
        summary: {
            en: "Vice President Song Jingwu of the Chinese People's Association for Friendship with Foreign Countries (CPAFFC) visited SCFA and engaged in in-depth exchanges with various representatives from Singapore.",
            zh: "中国人民对外友好协会副会长宋敬武访问了新中友协，并与来自新加坡的各界代表进行了深入交流。"
        },
        image: "/news/news-1.jpg"
    },
    {
        title: {
            en: "Public Talk: China Under Xi Jinping's New Era: Towards Year 2035",
            zh: "公开讲座：习近平新时代下的中国：迈向2035年"
        },
        date: {
            en: "May 17, 2018",
            zh: "2018年5月17日"
        },
        summary: {
            en: "A public lecture discussing China's development strategies and the path toward the 2035 national goals under the leadership of President Xi Jinping.",
            zh: "一场公开讲座，讨论了在习近平主席领导下的中国发展战略以及迈向2035年国家目标的道路。"
        },
        image: "/news/news-2.jpg"
    },
    {
        title: {
            en: "SCFA Delegation Visit to Beijing and Shanghai",
            zh: "新中友协代表团访问北京和上海"
        },
        date: {
            en: "March – April 2018",
            zh: "2018年3月-4月"
        },
        summary: {
            en: "A delegation from SCFA conducted a visit to Beijing and Shanghai to strengthen ties and promote bilateral understanding.",
            zh: "新中友协代表团对北京和上海进行了访问，以加强联系并促进双边了解。"
        },
        image: "/news/news-3.jpg"
    }
];

export default function NewsPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1">
                <h1 className="text-4xl font-bold mb-8 text-scfa-red">{t.newsPage.title}</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100 flex flex-col">
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
                                <button className="text-scfa-navy font-bold text-sm hover:underline self-start">{t.latestNews.readMore} →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
