"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Header() {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
                <Link className="flex items-center gap-2" href="/">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/logo.png"
                            alt="SCFA Logo"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left" }}
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link className="text-gray-900 hover:text-scfa-red transition-colors" href="/">
                        {t.nav.home}
                    </Link>
                    <Link className="text-gray-600 hover:text-scfa-red transition-colors" href="/about">
                        {t.nav.about}
                    </Link>
                    <Link className="text-gray-600 hover:text-scfa-red transition-colors" href="/news">
                        {t.nav.news}
                    </Link>
                    <Link className="text-gray-600 hover:text-scfa-red transition-colors" href="/events">
                        {t.nav.events}
                    </Link>
                    <Link className="text-gray-600 hover:text-scfa-red transition-colors" href="/contact">
                        {t.nav.contact}
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="/SCFA_Membership_Application_Form.doc"
                        download="SCFA_Membership_Application_Form.doc"
                        className="hidden md:flex items-center justify-center rounded-full bg-scfa-red px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-opacity-90 hover:scale-105 transition-all mr-2"
                    >
                        {t.hero.join}
                    </a>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-scfa-red font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        EN
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                        onClick={() => setLanguage('zh')}
                        className={`text-sm font-medium transition-colors ${language === 'zh' ? 'text-scfa-red font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        中文
                    </button>
                </div>
            </div>
        </header>
    );
}
