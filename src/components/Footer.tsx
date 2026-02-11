"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="w-full border-t bg-gray-50 py-12 text-sm text-gray-600">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:px-6">
                <div className="flex flex-col gap-4">
                    <div className="relative h-10 w-40 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                        <Image
                            src="/logo.png"
                            alt="SCFA Logo"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left" }}
                        />
                    </div>
                    <p className="max-w-xs leading-relaxed">
                        {t.footer.tagline}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-900">{t.footer.quickLinks}</h3>
                    <Link className="hover:text-scfa-red transition-colors" href="/about">{t.nav.about}</Link>
                    <Link className="hover:text-scfa-red transition-colors" href="/events">{t.nav.events}</Link>
                    <Link className="hover:text-scfa-red transition-colors" href="/contact">{t.nav.contact}</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-900">{language === 'en' ? 'Contact' : '联系方式'}</h3>
                    <p>5 Toh Tuck Link, Singapore 596224</p>
                    <p>+65 6466 5401</p>
                    <p>contact@singapore-china.org</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-900">{t.aboutPage.documentsTitle}</h3>
                    <a className="hover:text-scfa-red transition-colors" href="/SCFA_Constitution.pdf" download="SCFA_Constitution.pdf">{t.aboutPage.constitution}</a>
                    <a className="hover:text-scfa-red transition-colors" href="/SCFA_Membership_Application_Form.doc" download="SCFA_Membership_Application_Form.doc">{t.aboutPage.membershipForm}</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-900">{t.contactPage.followUs}</h3>
                    <div className="flex gap-4">
                        <Link className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-scfa-red hover:text-white transition-colors" href="#">
                            FB
                        </Link>
                        <Link className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-scfa-red hover:text-white transition-colors" href="#">
                            LN
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 px-4 pt-8 md:flex-row md:px-6">
                <p>© 2026 Singapore-China Friendship Association. {t.footer.rights}</p>
                <div className="flex gap-4">
                    <Link className="hover:underline" href="/privacy">{t.footer.privacy}</Link>
                    <Link className="hover:underline" href="/terms">{t.footer.terms}</Link>
                </div>
            </div>
        </footer>
    );
}
