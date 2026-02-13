export interface NewsItem {
    id: number;
    title: {
        en: string;
        zh: string;
    };
    date: {
        en: string;
        zh: string;
    };
    summary: {
        en: string;
        zh: string;
    };
    content?: {
        en: string;
        zh: string;
    };
    image: string;
}

export const NEWS_ITEMS: NewsItem[] = [
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
    },
    {
        id: 4,
        title: {
            en: "Delegation from Nanjing visited SCFA",
            zh: "南京中山陵园管理局考察团拜访新中友协"
        },
        date: {
            en: "December 20, 2017",
            zh: "2017年12月20日"
        },
        summary: {
            en: "On 20th December 2017, the Delegation from Nanjing Zhongshan Mountain National Park paid a visit to SCFA, Mr Liu Zhenyu, Deputy Director of Zhongshan Mountain National Park led the Delegation, members of the Delegation included 7 officers from Jiaxing Municipal Government.\n\nSCFA President Prof Phua Kok Khoo, Honorary Secretary Mr Ng Yan Huay and committee member Mr Wang Shouzhi received the delegation. Mr Liu gave a brief introduction about the itinerary of the delegation and the purpose of the visit. In the meeting, both sides exchanged views and ideas to further strengthen cooperation in education, city government and technological research cooperation between SCFA and Nanjing.",
            zh: "2017年12月20日上午，由南京市中山陵园管理局、南京市客运交通管理处组成的考察团一行8人，在中山陵园管理局刘振宇副局长的带领下，前来新中友协交流考察。新中友协会长潘国驹教授、秘书长黄延辉先生以及董事王守志先生接待了考察团一行。\n\n潘教授对考察团一行表示欢迎。他表示，新中友协历年来不断加强与中国各省、直辖市及各大城市的交流沟通，南京有很好的生态环境、历史沉淀和教育资源，加强新加坡与南京市的合作联系很有必要。他表示，南京市可以借鉴新加坡现代化的管理经验，同时，新加坡也可以与南京众多大学和科研机构合作，在城市管理创新方面开展新的合作，促进两地对交通管理的科学研究。新中友协将择机拜访南京、上海等华东城市，探讨在教育、科技方面的友好合作。\n\n刘振宇副局长对新中友协的热情接待表示感谢，并介绍了此行的目的。他表示，希望通过与新加坡交通管理、市政管理相关的政府部门和企业交流，为缓解南京中山陵园景区交通管理、优化园区电子收费系统积累经验。同时，将积极向市政府反馈友协提出的各种建议，期待与新中友协进一步合作。访问结束后，宾主双方还互赠了纪念品，并合影留念。"
        },
        image: "/news/nanjing-visit.jpg"
    },
    {
        id: 5,
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
        id: 6,
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
