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
            zh: "中国人民对外友好协会宋敬武副会长访问新中友协"
        },
        date: {
            en: "September 02, 2019",
            zh: "2019年9月2日"
        },
        summary: {
            en: "Vice President Song Jingwu of the Chinese People's Association for Friendship with Foreign Countries (CPAFFC) visited SCFA and engaged in in-depth exchanges with various representatives from Singapore.",
            zh: "中国人民对外友好协会副会长宋敬武访问了新中友协，并与来自新加坡的各界代表进行了深入交流。"
        },
        content: {
            en: "On September 2, 2019, a delegation of four led by Vice President Song Jingwu of the Chinese People's Association for Friendship with Foreign Countries (CPAFFC) visited the Singapore-China Friendship Association (SCFA) for in-depth exchanges with friendly personnel from various sectors in Singapore and to discuss future cooperation.\n\nOther delegation members included Zhu Dan, Deputy Director of the East Asian Department of CPAFFC, Wu Jiong, Director of the East Asian Department, and Zeng Guangming, a cadre of the East Asian Department. Consul General Qiu Yuanxing of the Chinese Embassy in Singapore, SCFA Vice Presidents Huang Jinxi, Wang Yongcheng, and Huang Xuanmin, Secretary-General Ng Yan Huay, along with directors and members, attended the exchange discussion. The meeting was chaired by SCFA President Prof Phua Kok Khoo. Heads of non-governmental organizations such as the Wu Lu Club, Nanyang Confucian Association, and Singapore Teochew Doctorate Society, as well as nearly 40 representatives from various sectors of society, attended the event.\n\nPresident Phua Kok Khoo first welcomed the delegation on behalf of the Association and briefly introduced the background and development of SCFA. He stated that since the establishment of diplomatic relations between Singapore and China nearly 30 years ago, government and people-to-people exchanges between the two countries have continuously deepened. SCFA, through exchanges in education, culture, art, and technology, has become a distinctive platform for people-to-people exchanges between the two countries. He noted that Singapore is a country with a Chinese majority and a multi-racial, multi-cultural society. The Association insists on promoting Chinese culture and advocating Chinese language to gather friendly groups and individuals committed to people-to-people exchanges, laying a civil foundation for friendship between the two countries. He expressed that SCFA is willing to carry out extensive and in-depth cooperation with CPAFFC around the \"Belt and Road\" initiative and the 30th anniversary of diplomatic relations, pushing people-to-people exchanges to a deeper and broader level.\n\nVice President Song Jingwu thanked SCFA for the warm reception. He pointed out that China-Singapore relations have entered a new era. This year marks the 70th anniversary of the founding of China. Looking back at history, the older generation of Nanyang pioneers and overseas Chinese, including Mr. Tan Kah Kee, have made outstanding contributions to China's reform and opening up and the independence of the Chinese nation. Vice President Song Jingwu, on behalf of CPAFFC, thanked President Phua Kok Khoo, the directors, and all members for their long-term efforts in promoting friendship between the two peoples. He stated that one of the purposes of this trip is to objectively and comprehensively listen to valuable opinions and suggestions from overseas Chinese and friendly personnel. Regarding relevant cooperation projects, CPAFFC and SCFA will strengthen communication and maintain contact to further enhance China-Singapore friendship and consolidate people-to-people friendship.\n\nConsul General Qiu Yuanxing stated that SCFA, as a \"golden signboard,\" plays an important role in promoting people-to-people friendly exchanges, culture, education, and scientific and technological cooperation between Singapore and China. In future work, embassy colleagues will continue to support the Association's various activities and actively build bridges to help the Association's work reach a new level.\n\nAt the symposium, heads of non-governmental organizations such as the Wu Lu Club, Nanyang Confucian Association, and Singapore Teochew Doctorate Society, as well as member representatives from Singapore's business, cultural, and educational sectors, spoke enthusiastically. They held heated discussions on practical issues such as how to strengthen people-to-people exchanges, strengthen cooperation between women's organizations in the two countries, jointly organize large-scale cultural activities, carry out film cooperation, broaden communication channels, and enrich exchange forms.\n\nAfter the discussion, President Phua Kok Khoo and Vice President Song Jingwu exchanged souvenirs on behalf of both sides and took a group photo. After the meeting, SCFA also hosted a banquet for the delegation, using local food culture to deepen the delegation's understanding of Singapore.",
            zh: "由中国人民对外友好协会宋敬武副会长率领的代表团一行四人，于2019年9月2日上午访问新中友协，与新加坡各界友好人士深入交流，围绕未来活动合作进行探讨。\n\n其他代表团成员包括全国友协东亚部副主任朱丹、东亚部处长武炯和东亚部干部曾广明。中国驻新加坡总领事邱元兴，新中友协副会长黄锦西、王勇诚、黄选民，秘书长黄延辉携董事及会员出席了交流座谈。会议由新中友协潘国驹会长主持。吾庐俱乐部、南洋孔教会、新加坡潮籍博士会等民间团体负责人，以及社会各界友好人士代表近40人出席了活动。\n\n潘国驹会长首先代表协会，对代表团一行表示欢迎，并简要介绍了新中友协的成立背景及协会发展情况。他表示，新中建交近三十年以来，两国政府和民间交往不断加深，新中友协在民间交往中，通过教育、文化、艺术和科技的交流，已经成为两国民间交往的一个有特色的平台。他表示，新加坡是一个华人比例占多数的国家，也是一个多元种族、多元文化的社会，协会坚持弘扬中华文化，通过提倡华文、推广中华文化，凝聚致力于两国民间交往的友好团体和人士，为两国友好奠定民间基础。他表示，围绕“一带一路” 热点以及新中建交三十周年时间节点，新中友协乐意与全国友协开展广泛深入合作，深层次、多角度，将两国民间交往推向纵深。\n\n宋敬武副会长对新中友协热情的接待表示感谢。他指出，中新关系进入了新的时代，今年正值中国建国七十周年，回顾历史，包括陈嘉庚先生在内的老一辈南洋先贤和海外华侨华人，为中国改革开放，为中华民族独立自主，做出了卓越贡献。宋敬武副会长代表全国友协，对潘国驹会长、协会董事及全体会员长期致力于两国民间友好做出的努力表示感谢。他表示，此行的目的之一，也是客观全面听取海外华人和民间友好人士各种宝贵的意见和建议。对于相关合作项目，全国友协与新中友协将加强沟通、保持联系，进一步增进新中友好、巩固民间友谊。\n\n中国驻新加坡总领事邱元兴表示，新中友协作为一块“金字招牌”，在促进新中两国民间友好交流、文化教育和科技合作中发挥着重要作用。在今后的工作中，使馆同仁将继续支持协会的各种活动，积极搭桥牵线，助力协会各项工作再上新的台阶。\n\n座谈会上，吾庐俱乐部、南洋孔教会和新加坡潮籍博士会等民间团体负责人，以及新加坡商界、文化界、教育界等会员代表们踊跃发言，围绕如何加强民间交往、如何加强两国间妇女组织合作、如何联办大型文化活动、如何开展电影合作及如何拓宽沟通渠道、丰富交流形式等实际问题，展开了热烈的讨论。\n\n座谈交流后，潘国驹会长和宋敬武副会长代表双方互赠纪念品，并合影留念。会后，新中友协也设宴招待代表团一行，借本地美食文化以加深代表团对新加坡的认识。"
        },
        image: "/news/news-1.jpg"
    },
    {
        id: 2,
        title: {
            en: "Public Talk: China Under Xi Jinping's New Era: Towards Year 2035",
            zh: "公开讲座：《习近平\"新时期\"的中国--如何通向2035年》"
        },
        date: {
            en: "May 12, 2018",
            zh: "2018年5月12日"
        },
        summary: {
            en: "Co-organized by Chui Huay Lim Club, Institute of Advanced Studies of Nanyang Technological University, supported by SCFA and Federation of Chinese School Alumni Associations, the public talk attracted more than 400 audiences.",
            zh: "2018年5月12日，由醉花林俱乐部、南洋理工大学高等研究所联合主办，新中友协协办的《习近平\"新时期\"的中国--如何通向2035年》公开讲座，在醉花林俱乐部成功举行，吸引逾400人出席。"
        },
        content: {
            en: "Co-organized by Chui Huay Lim Club, Institute of Advanced Studies of Nanyang Technological University, supported by SCFA and Federation of Chinese School Alumni Associations, the public talk - China Under Xi Jinping's New Era: Towards Year 2035 was successfully held at Chui Huay Lim Club, on 12th May 2018. The talk attracted more than 400 audiences. The talk was given by Prof Zheng Yongnian (Director, East Asian Institute, National University of Singapore) and chaired by Prof Phua Kok Khoo.\n\nProf Zheng indicated, after the 19th National Congress of the Communist Party of China, National People's Congress and Chinese People's Political Consultative Conference, China have introduced a long-term plan for its future: 1) the first period (until 2020): building a moderately prosperous society and eliminating poverty; 2) the second period (2020-2035): realizing socialist modernization; 3) the third period (2035-2050): becoming a leading nation of prosperous, democratic, civilized, harmonious and beautiful.\n\nProf Zheng subsequently analysed the China's long-term plan from economic, political and diplomatic aspects. From economic aspect, China must avoid the middle-income trap, and work towards the economic level of developed country. From political aspect, China will follow its own model and system - the China model. From diplomatic aspect, with Wang Qishan taking charge of the Ministry of Foreign Affairs, China's diplomacy will commence transformation, to have greater decision-making power on deciding the big picture, big diplomacy and big direction of China's diplomacy. He added, if China could reach consensuses in between Japan, India and Indonesia, a new Asian Order, that led by Asian countries, will come in shape.",
            zh: "2018年5月12日，由醉花林俱乐部、南洋理工大学高等研究所联合主办，新中友协协办的《习近平\"新时期\"的中国--如何通向2035年》公开讲座，在醉花林俱乐部成功举行，吸引逾400人出席。本次讲座由著名政治学者新加坡国立大学东亚研究所所长郑永年教授主讲，潘国驹教授担任讲座主席。郑教授指出，中共成功召开\"十九大\"、\"两会\"，诸多重大变革正在发生。最重要的是，中共高层对中国的未来长远规划提出了宏观架构：从现今到2020年全面建成小康社会，实现第一个百年奋斗目标；到2035年基本实现社会主义现代化；到本世纪中叶全面建成富强民主文明和谐美丽的社会主义现代化强国。\n\n如何通向2035年？郑教授认为，可从经济、政治和外交三方面来解析。政治方面，西方向来认为中国的制度、共产党的制度不能长久延续，对于中国共产党的研究也不多。中国改革开放初期，西方一度以为中国会向西方体制靠拢，但\"十九大\"显示，中国的体制肯定不会与西方模式相同。西方国家对于取消两任的任期限制也不能理解，有所忧虑。但实际上，中国在走自己的路、采用自己的体制。习近平就明确表示过，中国采用的是具有中国特色的模式，既不输入他国模式，也不输出中国模式。中国模式为许多国家提供了另一种参考选择，引起了一些国家的兴趣，但同时也引来西方的忌惮。\n\n西方的制度是多党制，核心是立法、行政、司法三权分立制衡机制。中国是一党制，虽然不奉行三权分立，但也有对应内部三权分立的制衡机制--决策、执行、监察。这一制度强调的是分工与合作，确保效率，同时也能反腐败；施行历史久远，历经不衰，可看作是中国传统制度的延续和发展。\n\n若着眼西方的民主制度，会发现民主制度也经历了长时间的变化：从最初的精英民主，演变成今天的大众民主（即一人一票）。这一演变最头疼的问题在于大众民主之后该怎么走？精英民主的核心是向上竞争，精英阶层对政策有较为明确的认识和理解，能够促使国家走向更好的发展；然而在大众民主的情况下，假定人人对政策都能理智判断，但实情却是大众对政策的把握不好，且容易被煽动，以致政客高举民粹主义则必胜的局面，是向下竞争的不利体现。\n\n外交方面，目前的焦点都在于中美关系博弈。举世关注的中美贸易战并不一定会全面开打，但面对美国的贸易保护政策，中国必会选择更开放的政策来应对。而相对严峻的应该是技术冷战，因为美国害怕中国掌握高科技技术，而采取相应的对策。但即便如此，也只能拖慢中国的发展，而不能阻止中国的崛起。外在的压力倒是会促使中国更加奋发研究，在科学技术上争取自主独立。\n\n就中国在国际关系和外交政策的变更，值得关注的就是王岐山掌管外交。可以说，中国终于有了全职专注思考外交事务的领导人了。一向以来，中国外交部的角色只局限于政策执行，现在迎来转型阶段，拥有更大的决策权，对于大格局、大外交、大方向有更多的思考，也取得了显著的进步。必需说的是，中国肯定不会和西方发生战争，即使冷战也是可避免的。\n\n亚洲现有的秩序其实是西方秩序在亚洲的延伸，但随着美国逐渐减少其在世界事务的介入、对其世界警察角色的力不从心，中国应当思考如何与其他亚洲大国一同建立起亚洲秩序。习近平与印度总理莫迪在武汉会晤取得良好成绩，双方大谈哲学，讨论大格局，不纠结于小细节，可谓\"哲学外交\" 。与此同时，中国与日本、印尼的关系也见改善。可以预见，若中国、日本、印度、印尼之间能达致基本共识，相信就能建立起一个由亚洲国家主导，不具排他性的亚洲秩序。"
        },
        image: "/news/2018-05-12-talk.jpg"
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
            en: "On 20th December 2017, the Delegation from Nanjing Zhongshan Mountain National Park paid a visit to SCFA, led by Mr Liu Zhenyu, Deputy Director of Zhongshan Mountain National Park.",
            zh: "2017年12月20日上午，由南京市中山陵园管理局、南京市客运交通管理处组成的考察团一行8人拜访新中友协。双方就城市管理创新等领域进行了深入探讨。"
        },
        content: {
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
    },
    {
        id: 7,
        title: {
            en: "Delegation from Shanghai International Culture Association Visited SCFA",
            zh: "上海市对外文化交流协会拜访新中友协"
        },
        date: {
            en: "October 30, 2017",
            zh: "2017年10月30日"
        },
        summary: {
            en: "A 3-person delegation from Shanghai International Culture Association visited SCFA to discuss future cooperation in arts and cultural sectors.",
            zh: "2017年10月30日上午，上海市对外文化交流协会代表团一行三人拜访新中友协。双方就文化艺术等方面的国际交流探讨了合作的可能性。"
        },
        content: {
            en: "On 30th October 2017, a 3-person delegation from Shanghai International Culture Association, led by Ms Sun Hui, Deputy Director of General Office, visited SCFA. On behalf of SCFA, Mr Loh Weng Kee and Mr Wang Shouzhi (Head and Deputy Head of External Relations & Social Activities Group) received the delegation.\n\nDuring the meeting, both sides exchanged ideas and discussed on the future cooperation in arts and cultural sector. Ms Sun said, Singapore and Shanghai is very similar, Shanghai can learn a lot from Singapore's experience. Meanwhile, she also invited SCFA to visit Shanghai in future.",
            zh: "2017年10月30日上午，上海市对外文化交流协会代表团一行三人，在办公室副主任孙晖的带领下，拜访新中友协。新中友协外事交际组主任罗荣基与副主任王守志代表接待了代表团一行。\n\n上海市对外文化交流协会自1986年成立以来，积极且广泛推动文化艺术、科学技术、经济金融、人文社会、教育体育等各领域的国际交流活动。本次拜访，双方就文化艺术如书画、戏剧、音乐等方面，探讨合作、交流的可能。\n\n孙副主任表示，新加坡与上海有许多相近之处，在中西文化交流方面有许多值得借鉴的地方，并借此机会邀请我会拜访上海。"
        },
        image: "/news/shanghai-culture-visit.jpg"
    }
];
