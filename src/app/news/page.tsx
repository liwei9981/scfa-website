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
    },
    {
        title: {
            en: "Delegation from Nanjing visited SCFA",
            zh: "南京中山陵园管理局考察团拜访新中友协"
        },
        date: {
            en: "December 20, 2017",
            zh: "2017年12月20日"
        },
        summary: {
            en: "A delegation from Nanjing Zhongshan Mountain National Park visited SCFA to explore cooperation in education, city management and technological research.",
            zh: "由南京市中山陵园管理局、南京市客运交通管理处组成的考察团访新中友协，探讨了在城市管理、教育和科技方面的合作机会。"
        },
        image: "/news/nanjing-visit.jpg"
    },
    {
        title: {
            en: "Entrepreneurship and Corporate Innovation Talk",
            zh: "我会邀请南洋科技创业中心开设专题讲座"
        },
        date: {
            en: "November 17, 2017",
            zh: "2017年11月17日"
        },
        summary: {
            en: "SCFA organized a talk on Entrepreneurship and Corporate Innovation, by Dr Xia Zhiqiang from Nanyang Technopreneurship Centre of NTU. Dr Xia shared about how to innovate at work and how to cultivate innovation competency.",
            zh: "我会邀请南洋理工大学南洋科技创业中心的项目主任夏智强博士，就创业和企业创新发表专题演讲。生动的案例和详实的数据，展示了科技创新的最新动态。"
        },
        image: "/news/innovation-talk.jpg"
    },
    {
        title: {
            en: "Delegation from Shanghai Association for Science and Technology",
            zh: "上海市科学技术协会来访"
        },
        date: {
            en: "November 06, 2017",
            zh: "2017年11月6日"
        },
        summary: {
            en: "A Delegation from Shanghai Association for Science and Technology (SAST) visited NTU and SCFA to explore scientific and technological exchange and cooperation.",
            zh: "上海市科学技术协会代表团拜访了南洋理工大学及新中友协，双方就上海自贸区人才创新基地及未来跨国科技合作进行了深入探讨。"
        },
        image: "/news/shanghai-talk.jpg"
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
