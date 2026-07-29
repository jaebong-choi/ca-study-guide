/* ═══════════════════════════════════════════════════════════
 * CA Study Guide — i18n (한국어 ko / English en)
 * ═══════════════════════════════════════════════════════════
 * 호주 사이트와 같은 설계다.
 *  - 데이터(CANADA_DATA·questionFlow·pathwayGuides)와 userProfile은 한글 원문을 유지하고,
 *    화면에 그리는 순간에만 tr()로 번역한다. 결과 공유 링크(#r=)는 옵션 val 인덱스를 쓰므로
 *    라벨 번역이 링크에 영향을 주지 않는다.
 *  - 정적 HTML 문구는 data-i18n + I18N 사전(t)으로 처리한다.
 *
 * 영어 문구 톤: QS Top Universities 안내 페이지 기준. 2인칭, 담백한 사실 전달.
 * 선택 언어는 localStorage("sgh-lang")에 저장되며 다른 사이트와 공유된다.
 * ═══════════════════════════════════════════════════════════ */

const I18N = {
    ko: {
        docTitle: "캐나다 컬리지 진학 가이드 - PGWP·편입 AI 진단 | CA Study Guide",
        docDesc: "캐나다 컬리지 유학, 전공이 취업허가(PGWP)를 결정합니다. 전공·지역·영어 준비 상황을 분석해 취업·이민까지 이어지는 진학 경로를 3분 만에 진단하는 무료 정보 가이드. 2026 IRCC 정책 기준.",

        navHub: "국가 선택",
        themeDark: "다크", themeLight: "라이트",
        themeAria: "화면 모드 전환", themeTitle: "밝게 / 어둡게",
        langAria: "언어 선택",

        qBack: "이전",
        qStep: "Step",

        resultCta: "이 결과로 무료 상담 받기",
        resultCopy: "결과 링크 복사",
        resultRestart: "다시 진단하기",

        guideMine: "내 추천 경로",
        guideFor: "이런 분께:",
        regionMatch: "선호 지역 일치",
        visitSite: "공식 홈페이지 방문",
        checkOfficial: "공식 홈페이지 확인",
        strengthPrefix: "강점: ",
        collegeLabel: "컬리지",
        tuitionLabel: "연간 학비",
        tuitionNote: "(2026 국제학생)",
        majorsLabel: "추천 전공"
    },

    en: {
        docTitle: "Study at a Canadian college — PGWP and university transfer pathways | CA Study Guide",
        docDesc: "In Canada your field of study decides whether you qualify for a post-graduation work permit. Check the routes that lead to work and residency, based on 2026 IRCC policy. Free and independent of any agency.",

        navHub: "Change country",
        themeDark: "Dark", themeLight: "Light",
        themeAria: "Switch colour mode", themeTitle: "Light / dark",
        langAria: "Select language",

        qBack: "Back",
        qStep: "Step",

        resultCta: "Get free advice on this result",
        resultCopy: "Copy result link",
        resultRestart: "Start again",

        guideMine: "Your recommended route",
        guideFor: "Suits you if:",
        regionMatch: "Matches your preferred region",
        visitSite: "Visit the official page",
        checkOfficial: "Check the official site",
        strengthPrefix: "Strength: ",
        collegeLabel: "College",
        tuitionLabel: "Annual tuition",
        tuitionNote: "(2026, international)",
        majorsLabel: "Recommended fields"
    }
};

/* ───────── 데이터 문자열 번역 (한글 원문 → 영어) ───────── */
const DATA_EN = {
    /* --- 데이터 출처 --- */
    "캐나다 공립 컬리지 지역별·전공별 데이터": "Public college data by region and field",
    "IRCC 2026 학업허가 캡(408,000) 및 PGWP 적격 전공 목록 동결(2026-01-15) 기준":
        "Based on the IRCC 2026 study permit cap (408,000) and the PGWP field-of-study list frozen on 15 January 2026",

    /* --- 주(州) --- */
    "온타리오": "Ontario",
    "브리티시컬럼비아": "British Columbia",
    "알버타": "Alberta",
    "프레리(매니토바·서스캐처원)": "The Prairies (Manitoba and Saskatchewan)",
    "애틀랜틱": "Atlantic Canada",

    /* --- 도시 --- */
    "토론토": "Toronto", "오타와": "Ottawa", "런던": "London", "해밀턴": "Hamilton",
    "밴쿠버": "Vancouver", "빅토리아": "Victoria", "켈로나": "Kelowna",
    "캘거리": "Calgary", "에드먼턴": "Edmonton",
    "위니펙": "Winnipeg", "새스커툰": "Saskatoon", "리자이나": "Regina",
    "핼리팩스": "Halifax", "샬럿타운": "Charlottetown", "세인트존스": "St. John's",
    "Halifax 등 NS 전역": "Halifax and across Nova Scotia",
    "Fredericton 등 NB 전역": "Fredericton and across New Brunswick",
    "NL 전역(17개 캠퍼스)": "Across Newfoundland and Labrador (17 campuses)",

    /* --- 지역 특징 --- */
    "최대 취업 시장": "Largest job market",
    "컬리지 24개교": "24 colleges",
    "경쟁·생활비 높음": "High competition and living costs",
    "대학 편입 제도화(BC Transfer)": "Formal transfer system (BC Transfer)",
    "테크·보건 PNP": "Provincial nominee streams for tech and health",
    "생활비 최고 수준": "Highest living costs in Canada",
    "폴리테크닉 강세": "Strong polytechnics",
    "트레이드·에너지 산업": "Trades and energy industries",
    "AAIP 지방 우대": "AAIP favours regional applicants",
    "생활비 상대적 저렴": "Relatively low living costs",
    "학비·생활비 저렴": "Low tuition and living costs",
    "MPNP·SINP 졸업생 우호": "MPNP and SINP favour graduates",
    "이민 최우선 세그먼트": "Strongest position for immigration",
    "학비 최저 수준": "Lowest tuition in Canada",
    "쿼터 경쟁 완화": "Less competition for permit quotas",
    "AIP 이민 경로": "Atlantic Immigration Program route",
    "가성비+이민 포지셔닝": "Value for money, with a clear immigration route",
    "캐나다 최저가 수준 학비": "Among the lowest tuition in Canada",

    /* --- 전공·강점 --- */
    "IT·컴퓨터": "IT and computing",
    "비즈니스": "Business",
    "항공": "Aviation",
    "보건": "Health",
    "미디어": "Media",
    "호스피탈리티": "Hospitality",
    "조리·제빵": "Culinary arts and baking",
    "디자인": "Design",
    "자동차·운송": "Automotive and transport",
    "항공정비": "Aircraft maintenance",
    "애니메이션·디자인": "Animation and design",
    "애니메이션": "Animation",
    "엔지니어링 테크": "Engineering technology",
    "기술직(트레이드)": "Skilled trades",
    "조리·와인·호텔": "Culinary arts, wine and hotels",
    "와인·양조": "Wine and brewing",
    "호텔·관광": "Hotels and tourism",
    "자동차": "Automotive",
    "관광": "Tourism",
    "환경·자원": "Environment and resources",
    "취업 직결 실무": "Job-ready practical training",
    "비즈니스 실무": "Applied business",
    "UBC 편입": "Transfer to UBC",
    "대학 편입": "University transfer",
    "간호·보건": "Nursing and health",
    "조리·실무": "Culinary and applied skills",
    "실무 기술": "Applied technical skills",
    "응급구조·공공안전": "Paramedicine and public safety",
    "사회서비스": "Social services",
    "에너지": "Energy",
    "유아교육": "Early childhood education",
    "농업": "Agriculture",
    "원예": "Horticulture",
    "해양": "Marine studies",
    "조리": "Culinary arts",
    "조리(Culinary Institute of Canada)": "Culinary arts (Culinary Institute of Canada)",
    "학사 과정 시 PGWP 전공 제한 면제": "Degree programmes are exempt from the PGWP field restriction",

    /* --- PGWP 적격 분야 --- */
    "보건의료·사회서비스": "Healthcare and social services",
    "EE 보건 카테고리 연계, 최우선 추천군": "Linked to the Express Entry health category — the strongest group",
    "유아교육·교육지원": "Early childhood education and education support",
    "2025-06 목록에 교육 분야 대거 추가": "Education was added extensively to the June 2025 list",
    "일부 세부 분야 2025 삭제 예고 후 보류 — CIP 확인 필수": "Some sub-fields were flagged for removal in 2025 and then held — check the CIP code",
    "엔지니어링 테크놀로지": "Engineering technology",
    "알버타·프레리 강세, Red Seal 연계": "Strong in Alberta and the Prairies, linked to Red Seal",
    "Trades(추정)": "Trades (indicative)",
    "프로그램별 CIP 확인 필수. 2026 EE 트레이드 목록에서 요리사 제외 보도": "Check the CIP code for each programme. Cooks were reported as excluded from the 2026 Express Entry trades list",
    "농업·농식품": "Agriculture and agri-food",
    "일부 세부 전공 삭제 예고·보류 상태": "Some sub-fields are flagged for removal and currently on hold",
    "운송·항공": "Transport and aviation",
    "물류·운송 운영 일부": "Parts of logistics and transport operations",
    "적격 범위 좁음, 개별 확인": "The eligible range is narrow — check programme by programme",
    "비즈니스·경영": "Business and management",
    "Accounting (디플로마)": "Accounting (diploma)",
    "컬리지 학사(degree) 과정 또는 대학 편입으로 우회": "Use a college degree programme or university transfer instead",
    "호스피탈리티·관광": "Hospitality and tourism",
    "컬리지 학사(degree) 과정 또는 대학 편입 트랙으로 우회": "Use a college degree programme or the university transfer track instead",
    "미디어·디자인·일반 인문": "Media, design and general humanities",
    "예외 소수, 편입 트랙으로 유도": "Few exceptions — the transfer track is the better route",
    "공립 DLI 석·박사(2026 신설)": "Master's and doctoral study at a public DLI (new for 2026)",
    "초·중·고": "Primary and secondary school",
    "동일 기관·동일 과정 연장": "Extension at the same institution and programme",
    "2026 연중 동결(2026-01-15 발표)": "Frozen for 2026 (announced 15 January 2026)",
    "보건·사회서비스": "Health and social services",
    "교육": "Education",
    "기술직": "Skilled trades",
    "운송": "Transport",
    "학사·석·박사 졸업자는 전공 제한 없음(컬리지 학사 포함)": "Bachelor's, master's and doctoral graduates face no field restriction, including college degrees",

    /* --- 기관 유형 · 등급 --- */
    "컬리지": "College", "폴리테크닉": "Polytechnic", "인스티튜트": "Institute",
    "핵심 추천": "Top pick", "주요 추천": "Strong option", "추천": "Recommended", "특화": "Specialist",

    /* --- 질문 --- */
    "현재 상태를 알려주세요.": "Where are you now?",
    "캐나다 유학에서 가장 중요한 목표는 무엇인가요?": "What matters most to you about studying in Canada?",
    "관심 있는 전공 분야를 선택해 주세요.": "Which field interests you?",
    "어떤 유학 환경을 선호하세요?": "What kind of place would you rather study in?",
    "공인 영어 성적(IELTS 등)을 보유하고 계신가요?": "Do you have an English test result, such as IELTS?",
    "목표 대학 지역이 있나요?": "Do you have a preferred region for university?",
    "희망하는 전공 계열을 선택해 주세요.": "Which broad subject area are you aiming for?",

    /* --- 선택지 --- */
    "고등학교 졸업(예정)": "Finishing secondary school",
    "대학 재학·휴학 중": "At university, or on leave",
    "대학 졸업(예정)": "Graduating, or already graduated",
    "직장인·경력자": "Working, with experience",
    "캐나다 취업과 영주권까지": "Working in Canada and applying for residency",
    "해외 경력을 쌓고 귀국": "Gaining international experience, then returning home",
    "아직 탐색 중이에요": "Still exploring",
    "잘 모르겠어요": "Not sure yet",
    "대도시 인프라 (토론토·밴쿠버)": "A large city (Toronto or Vancouver)",
    "이민에 유리하고 생활비를 아끼는 지역": "Somewhere cheaper that helps with immigration",
    "상관없음": "No preference",
    "있어요 — IELTS 6.0 이상": "Yes — IELTS 6.0 or above",
    "있어요 — IELTS 5.5 이하": "Yes — IELTS 5.5 or below",
    "아직 없어요": "Not yet",
    "중·고등학교 재학 중": "Currently at secondary school",
    "고3 · 고교 졸업": "Final year, or finished school",
    "대학 졸업": "University graduate",
    "BC — UBC · SFU 등": "British Columbia — UBC, SFU and others",
    "온타리오 — 토론토대 등": "Ontario — University of Toronto and others",
    "아직 미정이에요": "Undecided",
    "상경 계열": "Business and economics",
    "이공 계열": "Science and engineering",
    "인문·사회 계열": "Humanities and social sciences",
    "예술 계열": "Arts",

    /* --- 트랙 칩 (HTML 포함) --- */
    '<i class="fa-solid fa-briefcase"></i> 커리어·이민 트랙': '<i class="fa-solid fa-briefcase"></i> Career and immigration',
    '<i class="fa-solid fa-graduation-cap"></i> 대학 편입 트랙': '<i class="fa-solid fa-graduation-cap"></i> University transfer',

    /* --- 진학 경로 --- */
    "디플로마 직행": "Straight to a diploma",
    "College Diploma (2년)": "College diploma (2 years)",
    "고교 졸업(예정)자, 실무 커리어로 빠르게 진입하고 싶은 분. 공립 컬리지 2년 디플로마로 취업과 이민까지 노리는 대표 경로입니다.":
        "you are leaving school and want to move into a practical career quickly. A two-year public college diploma is the standard route towards work and immigration.",
    "공립 컬리지 디플로마 입학 (PAL 필수)": "Start a public college diploma (a provincial attestation letter is required)",
    "디플로마 2년 이수 → 취업허가(PGWP) 최대 3년": "Complete the two-year diploma, then a post-graduation work permit of up to three years",
    "현지 경력 12개월 → EE·PNP 이민 검토": "Build 12 months of Canadian experience, then consider Express Entry or a provincial nominee programme",
    "학비가 대학보다 낮고 실무 중심이라 취업 연결이 빠릅니다. 적격 전공이라면 졸업 후 최대 3년의 취업허가를 받을 수 있습니다.":
        "Tuition is lower than at a university and the teaching is practical, so the step into work is quicker. If your field qualifies, you can work for up to three years after graduating.",
    "비학위 과정은 적격 전공(6개 섹터)만 PGWP가 가능합니다. 전공별 CIP 코드 확인이 필수입니다.":
        "For non-degree programmes only six eligible sectors qualify for the work permit. Always check the programme's CIP code.",
    "포스트그래듀에이트": "Post-graduate certificate",
    "Post-Graduate Certificate (1~2년)": "Post-graduate certificate (1–2 years)",
    "국내 대학 졸업자·직장인. 보유한 학사 학위 위에 1~2년 실무 과정을 더해 커리어를 전환하는 경로입니다.":
        "you already hold a degree or have work experience. Adding a one- or two-year applied programme on top lets you change direction.",
    "학사 학위로 포스트그래듀에이트 과정 지원": "Apply for a post-graduate certificate with your existing degree",
    "1~2년 이수 (실무·인턴십 중심) → PGWP(적격 전공)": "Complete one to two years of applied study and placements, then the work permit if your field qualifies",
    "현지 취업 → 경력 기반 이민 검토": "Move into work in Canada, then apply through an experience-based immigration stream",
    "기간이 짧아 비용 부담이 적고, 기존 학위·경력과 결합해 취업 경쟁력을 높일 수 있습니다.":
        "It is short, so the cost is lower, and it builds on the degree and experience you already have.",
    "서티피킷도 비학위 과정이므로 PGWP 전공 제한이 동일하게 적용됩니다.":
        "A certificate is still a non-degree programme, so the same field restriction on the work permit applies.",
    "컬리지 → 대학 편입": "College, then transfer to university",
    "University Transfer (2+2년)": "University transfer (2 + 2 years)",
    "명문대 학위가 목표지만 학비·성적 부담이 있는 분. 컬리지 2년 이수 후 대학 3학년으로 편입합니다.":
        "you want a degree from a leading university but the tuition or entry grades are a stretch. Two years at college takes you into year 3 of the degree.",
    "편입 특화 컬리지 입학 (BC 트랜스퍼 등)": "Start at a college built for transfer, such as those in the BC Transfer system",
    "2년 이수 후 대학 편입 (UBC·SFU·토론토대 등)": "Complete two years, then transfer to a university such as UBC, SFU or Toronto",
    "학사 취득 → PGWP 최대 3년 (전공 제한 없음)": "Graduate with a degree, then a work permit of up to three years with no field restriction",
    "대학 4년 대비 학비를 크게 아끼고, 학위 과정이라 PGWP 전공 제한을 받지 않습니다.":
        "It costs considerably less than four years at university, and because it ends in a degree the work permit field restriction does not apply.",
    "편입은 컬리지 성적(GPA)이 좌우합니다. 대학·전공별 편입 요건 확인이 필요합니다.":
        "Transfer depends on your college GPA. Check the requirements for each university and course.",

    /* --- 사립 고교 (OSSD) --- */
    "OSSD 12학년 · 대학 진학 집중 관리": "OSSD grade 12, with close support for university entry",
    "소수정예 관리형 수업과 대학 지원 컨설팅": "Small classes with close supervision, plus university application support",
    "OSSD 12학년 · ESL 병행": "OSSD grade 12 alongside ESL",
    "유학생 대상 운영 노하우와 진학 실적": "Long experience with international students and a strong entry record",
    "유연한 입학 시기와 단계별 영어 지원": "Flexible start dates and staged English support",

    /* --- PGWP 배지 (HTML 포함) --- */
    '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> PGWP 가능</span>':
        '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> Work permit eligible</span>',
    '<span class="region-badge badge-warn"><i class="fa-solid fa-triangle-exclamation"></i> 조건부 확인</span>':
        '<span class="region-badge badge-warn"><i class="fa-solid fa-triangle-exclamation"></i> Conditional — check</span>',
    '<span class="region-badge badge-stop"><i class="fa-solid fa-circle-xmark"></i> PGWP 불가(비학위)</span>':
        '<span class="region-badge badge-stop"><i class="fa-solid fa-circle-xmark"></i> Not eligible (non-degree)</span>'
};

/* ───────── 언어 상태 · 조회 ───────── */
let LANG = (function () {
    try {
        var saved = localStorage.getItem("sgh-lang");
        if (saved === "ko" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
})();

function t(key) {
    var dict = I18N[LANG] || I18N.ko;
    return dict[key] !== undefined ? dict[key] : I18N.ko[key];
}

function tr(s) {
    if (LANG !== "en" || typeof s !== "string") return s;
    return DATA_EN[s] !== undefined ? DATA_EN[s] : s;
}

function applyLang() {
    document.documentElement.lang = LANG;
    document.title = t("docTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("docDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var v = t(el.dataset.i18nHtml); if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        var v = t(el.dataset.i18nAria); if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
        var v = t(el.dataset.i18nTitle); if (v !== undefined) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
        var v = t(el.dataset.i18nAlt); if (v !== undefined) el.setAttribute("alt", v);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
        var on = b.dataset.lang === LANG;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (typeof syncThemeLabel === "function") syncThemeLabel();
    if (typeof refreshDynamicView === "function") refreshDynamicView();
}

function setLang(l) {
    if (l !== "ko" && l !== "en") return;
    LANG = l;
    try { localStorage.setItem("sgh-lang", l); } catch (e) {}
    applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
