"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Header() {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
                <Link className="flex items-center gap-2" href="/">
                    <div className="relative h-10 w-32 md:h-12 md:w-48">
                        <Image
                            src="/logo.png"
                            alt="SCFA Logo"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left" }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6 text-sm font-medium">
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

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="/SCFA_Membership_Application_Form.doc"
                        download="SCFA_Membership_Application_Form.doc"
                        className="hidden sm:flex items-center justify-center rounded-full bg-scfa-red px-4 py-2 text-[10px] md:text-xs font-bold text-white shadow-sm hover:bg-opacity-90 hover:scale-105 transition-all"
                    >
                        {t.hero.join}
                    </a>

                    <div className="flex items-center gap-1.5 md:gap-2">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`text-[10px] md:text-xs font-medium transition-colors ${language === 'en' ? 'text-scfa-red font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            EN
                        </button>
                        <span className="text-gray-300 text-[10px]">|</span>
                        <button
                            onClick={() => setLanguage('zh')}
                            className={`text-[10px] md:text-xs font-medium transition-colors ${language === 'zh' ? 'text-scfa-red font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            中文
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 -mr-2 text-gray-600 hover:text-scfa-red focus:outline-none lg:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 py-4 px-6 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-4 text-base font-medium">
                        <Link
                            className="text-gray-900 hover:text-scfa-red py-2 border-b border-gray-50"
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.home}
                        </Link>
                        <Link
                            className="text-gray-600 hover:text-scfa-red py-2 border-b border-gray-50"
                            href="/about"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.about}
                        </Link>
                        <Link
                            className="text-gray-600 hover:text-scfa-red py-2 border-b border-gray-50"
                            href="/news"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.news}
                        </Link>
                        <Link
                            className="text-gray-600 hover:text-scfa-red py-2 border-b border-gray-50"
                            href="/events"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.events}
                        </Link>
                        <Link
                            className="text-gray-600 hover:text-scfa-red py-2 border-b border-gray-50"
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.contact}
                        </Link>
                        <a
                            href="/SCFA_Membership_Application_Form.doc"
                            download="SCFA_Membership_Application_Form.doc"
                            className="flex items-center justify-center rounded-lg bg-scfa-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-opacity-90 mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.hero.join}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
