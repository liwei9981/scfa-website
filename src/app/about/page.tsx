"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const HONORARY_ADVISORS = [
    { name: "Chan Soo Sen", chineseName: "曾士生", image: "/board/honorary-1.jpg" },
    { name: "Heng Swee Keat", chineseName: "王瑞杰", image: "/board/honorary-2.jpg" },
    { name: "Prof Huang Wei", chineseName: "黄维教授", image: "/board/honorary-3.jpg" },
    { name: "Dr Ker Sin Tze", chineseName: "柯新治博士", image: "/board/honorary-4.jpg" },
    { name: "Ong Keng Yong", chineseName: "王景荣", image: "/board/honorary-5.jpg" },
    { name: "Prof Shih Choon Fong", chineseName: "施春风教授", image: "/board/honorary-6.jpg" },
    { name: "Prof Su Guaning", chineseName: "徐冠林教授", image: "/board/honorary-7.jpg" },
    { name: "Prof Edwin Thumboo", chineseName: "唐爱文教授", image: "/board/honorary-8.jpg" },
    { name: "Prof Wang Gungwu", chineseName: "王赓武教授", image: "/board/honorary-9.jpg" },
    { name: "Dr Aline Wong", chineseName: "简丽中博士", image: "/board/honorary-10.jpg" },
    { name: "Prof Yang Chen Ning", chineseName: "杨振宁教授", image: "/board/honorary-11.jpg" },
    { name: "George Yeo Yong-Boon", chineseName: "杨荣文", image: "/board/honorary-12.jpg" }
];

const ADVISORS = [
    { name: "Ung Gim Sei", chineseName: "黄锦西", image: "/board/advisor-1.jpg" }
];

const MANAGEMENT_COMMITTEE = {
    president: { name: "Prof Phua Kok Khoo", chineseName: "潘国驹教授", title: "President (会长)" },
    vicePresidents: [
        { name: "Loke Gim Tay", chineseName: "骆锦地", title: "Vice President (副会长)" },
        { name: "Naseem Mimi Jumabhoy", chineseName: "朱马波", title: "Vice President (副会长)" },
        { name: "Ng Swan Meen", chineseName: "黄选民", title: "Vice President (副会长)" },
        { name: "Ng Yan Huay", chineseName: "黄延辉", title: "Vice President (副会长)" },
        { name: "Ong Eng Chang, Desmond", chineseName: "王勇诚", title: "Vice President (副会长)" }
    ],
    secretaries: [
        { name: "Hoon Tai Meng", chineseName: "雲大明", title: "Honorary Secretary (秘书长)" },
        { name: "Mu Liguo, Roddy", chineseName: "穆立国", title: "Assistant Honorary Secretary (副秘书长)" }
    ],
    treasurers: [
        { name: "Dr Chung Tang Fong, William", chineseName: "锺腾芳", title: "Honorary Treasurer (财务长)" },
        { name: "Huang Lin", chineseName: "黄琳", title: "Assistant Honorary Treasurer (副财务长)" }
    ],
    members: [
        { name: "Ang Teck Sin", chineseName: "翁德生" },
        { name: "Chen Yihan", chineseName: "陈弋寒" },
        { name: "Chew Sin Hwa", chineseName: "周新华" },
        { name: "Chua Teck Ming", chineseName: "蔡德明" },
        { name: "Dr Chong Tien Siong", chineseName: "锺天祥" },
        { name: "Fang Ying", chineseName: "方莹" },
        { name: "Giam Meng Tuck", chineseName: "严孟达" },
        { name: "Lee Sze Shyan", chineseName: "李思贤" },
        { name: "Li Liang Yi", chineseName: "李良义" },
        { name: "Dr Li Wei", chineseName: "李葳" },
        { name: "Liang Wern Ling", chineseName: "梁文宁" },
        { name: "Liu, Doreen", chineseName: "廖雪娜" },
        { name: "Xu Yanxia", chineseName: "徐砚霞" },
        { name: "Yeo Hoon Chong", chineseName: "杨云仲" }
    ]
};

export default function AboutPage() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-scfa-navy text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.aboutPage.title}</h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            {t.footer.tagline}
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-16 lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.aboutPage.historyTitle}</h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>{t.aboutPage.historyContent}</p>
                                </div>
                            </div>
                            <div className="grid gap-8 sm:grid-cols-2">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-scfa-red/10 rounded-xl flex items-center justify-center mb-6">
                                        <span className="text-scfa-red text-2xl">👁</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t.aboutPage.visionTitle}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.aboutPage.visionContent}</p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-scfa-navy/10 rounded-xl flex items-center justify-center mb-6">
                                        <span className="text-scfa-navy text-2xl">🎯</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t.aboutPage.missionTitle}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t.aboutPage.missionContent}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Official Documents Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wider">{t.aboutPage.documentsTitle}</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Constitution */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-scfa-navy/30 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-scfa-navy/10 rounded-lg flex items-center justify-center text-scfa-navy text-xl group-hover:scale-110 transition-transform">
                                            📄
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{t.aboutPage.constitution}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">PDF Document</p>
                                        </div>
                                    </div>
                                    <a
                                        href="/SCFA_Constitution.pdf"
                                        download="SCFA_Constitution.pdf"
                                        className="inline-flex items-center justify-center rounded-lg bg-scfa-navy px-4 py-2 text-sm font-medium text-white transition-all hover:bg-opacity-90 active:scale-95 shadow-sm"
                                    >
                                        {t.aboutPage.downloadConstitution}
                                    </a>
                                </div>

                                {/* Membership Form */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-scfa-red/30 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-scfa-red/10 rounded-lg flex items-center justify-center text-scfa-red text-xl group-hover:scale-110 transition-transform">
                                            📝
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{t.aboutPage.membershipForm}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">DOC Document</p>
                                        </div>
                                    </div>
                                    <a
                                        href="/SCFA_Membership_Application_Form.doc"
                                        download="SCFA_Membership_Application_Form.doc"
                                        className="inline-flex items-center justify-center rounded-lg bg-scfa-red px-4 py-2 text-sm font-medium text-white transition-all hover:bg-opacity-90 active:scale-95 shadow-sm"
                                    >
                                        {t.aboutPage.downloadForm}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white shadow-inner">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.aboutPage.boardTitle}</h2>
                            <div className="h-1.5 w-24 bg-scfa-red mx-auto rounded-full" />
                        </div>

                        {/* Honorary Advisors */}
                        <div className="mb-16">
                            <h3 className="text-center text-xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-scfa-red/20 inline-block mx-auto flex justify-center w-max">
                                {t.aboutPage.honoraryAdvisors}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center">
                                {HONORARY_ADVISORS.map((adv, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                            <Image
                                                src={adv.image}
                                                alt={adv.name}
                                                fill
                                                className="object-cover transition-all"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1 h-8 flex items-center justify-center px-2">{language === 'en' ? adv.name : adv.chineseName}</h4>
                                        {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{adv.chineseName}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advisors */}
                        <div className="mb-20">
                            <h3 className="text-center text-xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-scfa-red/20 inline-block mx-auto flex justify-center w-max">
                                {t.aboutPage.advisors}
                            </h3>
                            <div className="flex flex-wrap gap-8 justify-center">
                                {ADVISORS.map((adv, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                            <Image
                                                src={adv.image}
                                                alt={adv.name}
                                                fill
                                                className="object-cover transition-all"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1 h-8 flex items-center justify-center px-4">{language === 'en' ? adv.name : adv.chineseName}</h4>
                                        {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{adv.chineseName}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm">
                            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-scfa-navy mb-16 uppercase tracking-widest">{t.aboutPage.managementCommittee}</h2>

                            {/* President Section */}
                            <div className="flex justify-center mb-16">
                                <div className="text-center">
                                    <div className="relative w-40 aspect-[3/4] mx-auto mb-4 overflow-hidden rounded-xl bg-gray-200 shadow-md border-2 border-scfa-red/10">
                                        <Image
                                            src="/board/phua-kok-khoo.jpg"
                                            alt={MANAGEMENT_COMMITTEE.president.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                            <p className="text-white text-[10px] font-bold uppercase tracking-wider">{language === 'en' ? 'President' : '会长'}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{language === 'en' ? MANAGEMENT_COMMITTEE.president.name : MANAGEMENT_COMMITTEE.president.chineseName}</h3>
                                    {language === 'en' && <p className="text-scfa-red text-sm font-medium">{MANAGEMENT_COMMITTEE.president.chineseName}</p>}
                                </div>
                            </div>

                            {/* Vice Presidents */}
                            <div className="mb-16">
                                <h3 className="text-center text-xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-scfa-red/20 inline-block mx-auto flex justify-center w-max">{language === 'en' ? 'Vice Presidents' : '副会长'}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                                    {MANAGEMENT_COMMITTEE.vicePresidents.map((vp, i) => (
                                        <div key={i} className="text-center group">
                                            <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                                <Image
                                                    src={`/board/vp-${i + 1}.jpg`}
                                                    alt={vp.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1 h-8 flex items-center justify-center px-2">{language === 'en' ? vp.name : vp.chineseName}</h4>
                                            {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{vp.chineseName}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Secretariat & Treasury */}
                            <div className="mb-16">
                                <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
                                    <div className="flex-1">
                                        <h3 className="text-center text-lg font-bold text-gray-800 mb-8 pb-1 border-b border-gray-200">{language === 'en' ? 'Secretariat' : '秘书处'}</h3>
                                        <div className="grid grid-cols-2 gap-8 px-4 md:px-0">
                                            {MANAGEMENT_COMMITTEE.secretaries.map((sec, i) => (
                                                <div key={i} className="text-center group">
                                                    <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                                        <Image
                                                            src={`/board/sec-${i + 1}.jpg`}
                                                            alt={sec.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-[10px] text-scfa-navy font-bold uppercase mb-1 h-6 flex items-center justify-center">
                                                        {language === 'en' ? sec.title.split(' (')[0] : (i === 0 ? '秘书处' : '副秘书长')}
                                                    </p>
                                                    <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1">{language === 'en' ? sec.name : sec.chineseName}</h4>
                                                    {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{sec.chineseName}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-center text-lg font-bold text-gray-800 mb-8 pb-1 border-b border-gray-200">{language === 'en' ? 'Treasury' : '财务处'}</h3>
                                        <div className="grid grid-cols-2 gap-8 px-4 md:px-0">
                                            {MANAGEMENT_COMMITTEE.treasurers.map((tre, i) => (
                                                <div key={i} className="text-center group">
                                                    <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                                        <Image
                                                            src={`/board/tre-${i + 1}.jpg`}
                                                            alt={tre.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-[10px] text-scfa-navy font-bold uppercase mb-1 h-6 flex items-center justify-center">
                                                        {language === 'en' ? tre.title.split(' (')[0] : (i === 0 ? '财务长' : '副财务长')}
                                                    </p>
                                                    <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1">{language === 'en' ? tre.name : tre.chineseName}</h4>
                                                    {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{tre.chineseName}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Committee Members */}
                            <div className="mb-20">
                                <h3 className="text-center text-xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-scfa-red/20 inline-block mx-auto flex justify-center w-max">{language === 'en' ? 'Committee Members' : '理事'}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                                    {MANAGEMENT_COMMITTEE.members.map((member, i) => (
                                        <div key={i} className="text-center group">
                                            <div className="relative w-40 aspect-[3/4] mx-auto mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group-hover:border-scfa-red/30 transition-all group-hover:-translate-y-1">
                                                <Image
                                                    src={`/board/member-${i + 1}.jpg`}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-all"
                                                />
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-xs leading-tight mb-1 h-8 flex items-center justify-center px-2">{language === 'en' ? member.name : member.chineseName}</h4>
                                            {language === 'en' && <p className="text-scfa-red text-[10px] font-medium">{member.chineseName}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
