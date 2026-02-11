"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function ContactPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">{t.contactPage.title}</h1>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">{language === 'en' ? 'Get in Touch' : '与我们联系'}</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.contactPage.address}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    5 Toh Tuck Link<br />
                                    Singapore 596224
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">{language === 'en' ? 'Contact Details' : '联系详情'}</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-3">
                                        <span className="font-medium min-w-[60px]">{t.contactPage.phone}:</span>
                                        <a href="tel:+6564665401" className="hover:text-scfa-red transition-colors">+65 6466 5401</a>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="font-medium min-w-[60px]">{language === 'en' ? 'Fax' : '传真'}:</span>
                                        <span>+65 6467 7667</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <span className="font-medium min-w-[60px]">{t.contactPage.email}:</span>
                                        <a href="mailto:contact@singapore-china.org" className="hover:text-scfa-red transition-colors">contact@singapore-china.org</a>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500">
                                    {language === 'en' ? 'Office Hours: Monday - Friday, 9:00 AM - 6:00 PM' : '办公时间：周一至周五，上午9:00 - 下午6:00'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">{language === 'en' ? 'Send us a Message' : '给我们留言'}</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700">{t.contactPage.form.name}</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-scfa-red/50" placeholder={t.contactPage.form.name} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700">{t.contactPage.form.email}</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-scfa-red/50" placeholder={t.contactPage.form.email} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700">{t.contactPage.form.subject}</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-scfa-red/50" placeholder={t.contactPage.form.subject} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700">{t.contactPage.form.message}</label>
                                <textarea className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-scfa-red/50" placeholder={t.contactPage.form.message}></textarea>
                            </div>
                            <button className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                                {t.contactPage.form.send}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
