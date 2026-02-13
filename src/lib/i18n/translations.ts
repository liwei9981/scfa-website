
export type TranslationType = typeof en;

const en = {
    nav: {
        home: "HOME",
        about: "ABOUT",
        news: "NEWS",
        events: "EVENTS",
        contact: "CONTACT",
    },
    hero: {
        title1: "Strengthening Bonds,",
        title2: "Fostering Friendship",
        subtitle: "The official platform for cultural, economic, and diplomatic exchange between the peoples of Singapore and China.",
        join: "Join Membership",
        learnMore: "Learn More",
    },
    latestNews: {
        title: "Latest News & Updates",
        subtitle: "Stay informed about our latest activities and announcements.",
        viewAll: "View All News",
        readMore: "Read More",
    },
    mission: {
        title: "Our Mission & Vision",
        content: "Established to promote enduring friendship, mutual understanding, and cooperation between the peoples of Singapore and China. We facilitate exchanges in culture, education, economy, and more through various initiatives and events.",
        items: [
            "Promoting Cultural Understanding",
            "Facilitating Business Collaboration",
            "Supporting Educational Exchange"
        ],
        cta: "Learn More About Us",
    },
    aboutPage: {
        title: "About Us",
        historyTitle: "Our History",
        historyContent: "The Singapore-China Friendship Association (SCFA) was formally founded on 27 July 1993. It is a non-profit organization dedicated to promoting friendship and understanding between the peoples of Singapore and China.",
        visionTitle: "Our Vision",
        visionContent: "To be the leading bridge for fostering enduring friendship and comprehensive cooperation between Singapore and China.",
        missionTitle: "Our Mission",
        missionContent: "To facilitate mutual understanding through cultural, educational, and economic exchanges, building a strong foundation for bilateral relations.",
        boardTitle: "2025/2028 Board of Directors",
        managementCommittee: "14th Management Committee",
        honoraryAdvisors: "Honorary Advisors",
        advisors: "Advisors",
        documentsTitle: "Official Documents",
        constitution: "Constitution of Society",
        membershipForm: "Membership Application Form",
        downloadForm: "Download Form",
        downloadConstitution: "Download Constitution",
    },
    newsPage: {
        title: "News & Updates",
    },
    contactPage: {
        title: "Contact Us",
        subtitle: "We'd love to hear from you. Please reach out with any questions or inquiries.",
        address: "Address",
        phone: "Phone",
        email: "Email",
        followUs: "Follow Us",
        form: {
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            send: "Send Message",
        }
    },
    footer: {
        tagline: "Fostering friendship and cultural exchange between Singapore and China.",
        quickLinks: "Quick Links",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved.",
    }
};

const zh: TranslationType = {
    nav: {
        home: "首页",
        about: "关于我们",
        news: "新闻",
        events: "活动",
        contact: "联系我们",
    },
    hero: {
        title1: "加强联系，",
        title2: "促进友谊",
        subtitle: "新加坡与中国人民之间文化、经济和外交交流的官方平台。",
        join: "加入会员",
        learnMore: "了解更多",
    },
    latestNews: {
        title: "最新动态",
        subtitle: "随时了解我们的最新活动和公告。",
        viewAll: "查看所有新闻",
        readMore: "阅读更多",
    },
    mission: {
        title: "我们的使命与愿景",
        content: "旨在促进新加坡与中国人民之间持久的友谊、相互了解与合作。我们通过各种倡议和活动，促进文化、教育、经济等领域的交流。",
        items: [
            "促进文化理解",
            "推动商业合作",
            "支持教育交流"
        ],
        cta: "了解更多",
    },
    aboutPage: {
        title: "关于我们",
        historyTitle: "协会历史",
        historyContent: "新中友好协会（SCFA）于1993年7月27日正式成立。它是一个致力于促进新中两国人民之间的友谊和了解的非营利组织。",
        visionTitle: "愿景",
        visionContent: "成为促进新中两国持久友谊和全面合作的领先桥梁。",
        missionTitle: "使命",
        missionContent: "通过文化、教育和经济交流促进相互了解，为双边关系建立坚实的基础。",
        boardTitle: "2025/2028 董事会",
        managementCommittee: "第十四届理事会",
        honoraryAdvisors: "名誉顾问",
        advisors: "会务顾问",
        documentsTitle: "官方文件",
        constitution: "协会章程",
        membershipForm: "入会申请表",
        downloadForm: "下载申请表",
        downloadConstitution: "下载章程",
    },
    newsPage: {
        title: "新闻与动态",
    },
    contactPage: {
        title: "联系我们",
        subtitle: "我们很乐意听到您的声音。如有任何问题或咨询，请随时与我们联系。",
        address: "地址",
        phone: "电话",
        email: "电子邮件",
        followUs: "关注我们",
        form: {
            name: "姓名",
            email: "电子邮件",
            subject: "主题",
            message: "留言",
            send: "发送留言",
        }
    },
    footer: {
        tagline: "促进新加坡与中国之间的友谊和文化交流。",
        quickLinks: "快速链接",
        legal: "法律信息",
        privacy: "隐私政策",
        terms: "服务条款",
        rights: "保留所有权利。",
    }
};

export const translations = {
    en,
    zh
};
