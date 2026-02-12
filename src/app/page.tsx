"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const SAMPLE_NEWS = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[650px] w-full overflow-hidden text-white">
                    {/* Background image using Next.js Image component for reliable rendering */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero-mbs.jpg"
                            alt="Singapore Skyline Panorama"
                            fill
                            priority
                            className="object-cover brightness-90"
                        />
                    </div>
                    {/* Subtle gradient overlay to ensure text readability without hiding the image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-scfa-navy/60 via-scfa-navy/20 to-transparent z-10" />

                    <div className="relative z-20 container mx-auto flex h-full flex-col justify-center px-4 md:px-6">
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            {t.hero.title1} <br />
                            <span className="text-white/90">{t.hero.title2}</span>
                        </h1>
                        <p className="mt-6 max-w-[700px] text-lg text-gray-200 md:text-xl">
                            {t.hero.subtitle}
                        </p>
                        <div className="mt-10 flex gap-4">
                            <a
                                href="/SCFA_Membership_Application_Form.doc"
                                download="SCFA_Membership_Application_Form.doc"
                                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-scfa-red shadow-lg transition-transform hover:scale-105 hover:bg-gray-100"
                            >
                                {t.hero.join}
                            </a>
                            <Link
                                href="/about"
                                className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                {t.hero.learnMore}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Latest News Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-12 flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t.latestNews.title}</h2>
                                <p className="mt-2 text-gray-600">{t.latestNews.subtitle}</p>
                            </div>
                            <Link href="/news" className="hidden text-sm font-semibold text-scfa-red hover:underline md:block">
                                {t.latestNews.viewAll} &rarr;
                            </Link>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {SAMPLE_NEWS.map((news) => (
                                <div key={news.id} className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100">
                                    <div className="relative h-48 w-full bg-gray-200">
                                        <Image
                                            src={news.image}
                                            alt={news.title[language]}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-2 text-xs font-semibold uppercase text-scfa-red">{news.date[language]}</p>
                                        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-scfa-navy">{news.title[language]}</h3>
                                        <p className="mb-4 text-sm text-gray-600 line-clamp-3">{news.summary[language]}</p>
                                        <Link href={`/news/${news.id}`} className="text-sm font-medium text-scfa-navy hover:underline">
                                            {t.latestNews.readMore}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <Link href="/news" className="text-sm font-semibold text-scfa-red hover:underline">
                                {t.latestNews.viewAll} &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Mission / About Teaser */}
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-300 shadow-xl">
                                <Image
                                    src="/handshake-cooperation.jpg"
                                    alt="SCFA Mission"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.mission.title}</h2>
                                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                    {t.mission.content}
                                </p>

                                <ul className="mt-8 space-y-4">
                                    {t.mission.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-scfa-red/10 text-xs text-scfa-red">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10">
                                    <Link href="/about" className="inline-flex items-center justify-center rounded-lg bg-scfa-navy px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-opacity-90">
                                        {t.mission.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Membership CTA Section */}
                <section className="bg-scfa-navy py-16 text-white">
                    <div className="container mx-auto px-4 text-center md:px-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {language === 'en' ? 'Become a Member of SCFA' : '成为新中友好协会会员'}
                        </h2>
                        <p className="mx-auto mt-4 max-w-[600px] text-lg text-gray-300">
                            {language === 'en'
                                ? 'Join us in promoting friendship and understanding between Singapore and China. Download the application form below.'
                                : '加入我们，共同促进新中两国的友谊与了解。请点击下方按钮下载入会申请表。'}
                        </p>
                        <div className="mt-8">
                            <a
                                href="/SCFA_Membership_Application_Form.doc"
                                download="SCFA_Membership_Application_Form.doc"
                                className="inline-flex items-center justify-center rounded-full bg-scfa-red px-10 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-red-700 active:scale-95"
                            >
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                {t.hero.join}
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
