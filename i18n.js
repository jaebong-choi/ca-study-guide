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
        majorPageHint: (major) => `${major} 전공 페이지 열기`,
        strengthPrefix: "강점: ",
        collegeLabel: "컬리지",
        tuitionLabel: "연간 학비",
        tuitionNote: "(국제학생 · 수업료 · 전공별 상이)",
        basisWithFees: "필수비 포함 금액",
        hubDetail: "학비·요건 상세",
        majorsLabel: "추천 전공",
        regionLabel: "권역",
        subLineTier: (region, tier) => `${region} ${tier} 컬리지`,

        /* 국제 사립학교 카드 */
        pointLabel: "추천 포인트",
        programLabel: "과정",

        /* 트랙 A: 커리어·이민 */
        careerTitleBlocked: (m) => `${m} 경로, 재설계가 필요합니다`,
        careerDescBlocked: (m) => `선택하신 ${m} 분야의 컬리지 디플로마는 2026년 기준 졸업 후 취업허가(PGWP) 대상이 아닙니다. 하지만 경로를 바꾸면 목표는 유효합니다. 아래 추천 전공 카드에서 대안 경로를 확인해 주세요.`,
        careerTitle: (m, post) => m + (post ? " 준석사 경로" : " 커리어·이민 경로"),
        careerDescBase: (m, sector) => `${m} 분야는 2026년 기준 비학위 과정 PGWP 적격 섹터(${sector})에 해당합니다. `,
        careerDescPostgrad: "보유하신 학사 학위 위에 1~2년 준석사 과정을 더해 취업허가와 현지 커리어로 연결하는 경로를 추천합니다.",
        careerDescDiploma: "공립 컬리지 디플로마 2년 → 취업허가(PGWP) 최대 3년 → 경력 12개월 → 이민 검토로 이어지는 경로를 추천합니다.",
        careerDescConditional: " 다만 이 분야는 프로그램별로 적격 여부가 갈리는 조건부 분야이므로, 지원 전 CIP 코드 확인이 꼭 필요합니다.",
        engShortNote: " 공인 영어 성적이 아직 부족하다면, 어학연수·패스웨이 과정을 병행해 입학 요건을 맞출 수 있습니다.",
        summaryUndecided: (m) => `미정 → ${m}`,
        recTitleSuffixPost: " · 준석사 과정",
        recTitleSuffixDiploma: " · 디플로마 과정",
        recDescCommon: "대표 프로그램은 아래와 같으며, 실제 지원 전에는 프로그램 단위(CIP 코드)로 PGWP 적격 여부를 IRCC 공식 목록에서 확인하세요.",
        noteConditional: (c) => `⚠ 조건부 분야: ${c}`,
        noteCaution: (c) => `※ ${c}`,
        warnText: "이 전공의 컬리지 디플로마는 2026년 기준 졸업 후 취업허가(PGWP) 대상이 아닙니다.",
        warnAlt: (alt) => `대안: ${alt}`,
        warnAltDefault: "학위 과정 또는 대학 편입 트랙으로 우회를 검토해 보세요.",
        altBtn: (name) => `인접 적격 전공 보기 — ${name}`,
        regionNote: (regions, tags) => `※ 진단 결과, ${regions} 권역을 우선 추천합니다. (${tags})`,
        routePostgrad: "준석사 과정",
        routeDiploma: "디플로마",

        /* 트랙 B: 대학 편입 */
        transferTitle: "컬리지 → 대학 편입 경로 (2+2)",
        transferDescBC: "BC주는 컬리지 학점이 대학으로 그대로 인정되는 BC 트랜스퍼 시스템이 제도화되어 있습니다. Langara·Douglas 등 편입 특화 컬리지에서 2년을 이수하면 UBC·SFU 등 명문대 3학년 편입에 도전할 수 있습니다.",
        transferDescON: "온타리오는 Seneca·Humber·Sheridan 등 대학 학위·편입 협정을 갖춘 컬리지가 많습니다. 컬리지 2년 후 토론토대 등으로의 편입 또는 컬리지 학사 과정으로 학위까지 이어갈 수 있습니다.",
        transferDescCommon: " 무엇보다 편입·학위 과정은 전공 제한 없이 취업허가(PGWP)가 가능합니다.",
        transferEngNote: " 영어 성적이 아직 부족해도 조건부 입학과 어학연수·패스웨이 병행으로 시작할 수 있습니다.",
        degreeBadge: '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> PGWP 가능 (학위 취득 시 전공 제한 없음)</span>',
        fieldUndecided: "전공 탐색형",
        transferTrackSuffix: " · 대학 편입 트랙",
        transferDescPartUndecided: "다양한 교양·기초 과목을 들으며 전공을 정하고",
        transferDescPartField: (f) => `${f} 기초 과목을 이수하고`,
        transferMajorDesc: (part) => `컬리지 1~2학년 과정에서 ${part}, 성적(GPA)을 관리해 대학 3학년으로 편입하는 경로입니다. 편입 후 학사 학위를 취득하면 전공과 무관하게 취업허가(PGWP)를 받을 수 있습니다.`,
        transferPrograms: ["University Transfer (편입 과정)", "Associate Degree (준학사)", "College Bachelor (컬리지 학사)"],
        transferNote: "※ 편입·학위 과정은 PGWP 전공 제한을 받지 않습니다. 편입 인정 학점·요건은 대학과 전공에 따라 다릅니다.",
        transferRegionBC: "※ BC 트랜스퍼 시스템 기반의 편입 특화 컬리지를 추천합니다. UBC·SFU 인접 통학권 중심입니다.",
        transferRegionON: "※ 온타리오의 학위·편입 협정 중심 컬리지를 추천합니다. 토론토 광역권 중심입니다.",
        majorTransfer: "대학 편입",
        routeTransfer: "편입",

        /* 트랙 B (중·고 재학): OSSD */
        ossdTitle: "국제 사립학교 → 대학 직행 경로 (OSSD)",
        ossdDesc: "중·고등학교 재학 중이라면 컬리지를 거치지 않고, 토론토의 국제 사립학교(BICC·TAIE·UMC 하이스쿨 등)에서 온타리오 고교 졸업장(OSSD)을 취득해 캐나다 대학 1학년으로 바로 진학하는 경로를 추천합니다. 12학년 내신(Top 6 과목)으로 토론토대·UBC 등 명문대에 지원하며, 학사 학위 취득 시 전공 제한 없이 취업허가(PGWP)가 가능합니다.",
        ossdEngNote: " 영어는 사립학교의 ESL 과정과 병행해 준비할 수 있어, 지금 공인 성적이 없어도 시작할 수 있습니다.",
        ossdTrackSuffix: " · 대학 직행 트랙",
        ossdDescPartUndecided: "적성에 맞는 12학년 과목을 탐색하며",
        ossdDescPartField: (f) => `${f} 관련 12학년 과목을 이수하며`,
        ossdMajorDesc: (part) => `국제 사립학교에서 ${part} 온타리오 고교 졸업장(OSSD)을 취득하고, 12학년 내신으로 캐나다 대학 1학년에 직행 지원하는 경로입니다. 컬리지 편입 없이 대학으로 바로 이어지며, 학위 취득 시 전공과 무관하게 취업허가(PGWP)를 받을 수 있습니다.`,
        ossdPrograms: ["OSSD (온타리오 고교 졸업장)", "ESL + 12학년 정규 과목", "대학 1학년 직행 지원"],
        ossdNote: "※ 학교별 입학 시기·학비·기숙사는 각 학교 공식 페이지에서 확인하세요. 대학별 영어 요건(IELTS 등)은 별도 충족이 필요합니다.",
        ossdRegionNote: "※ 토론토 지역의 대표적인 국제 사립학교 예시입니다. 학생의 나이·성향·예산 등 상황에 따라 캐나다 공립 교육청 소속 학교의 관리형 유학도 대안이 될 수 있으니, 두 경로를 함께 비교해 보세요.",
        majorPrivate: "국제 사립학교",
        routeUniDirect: "대학 직행",

        /* 트랙 B (고3·고교 졸업): 세 경로를 모두 안내 */
        hsAllTitle: "고교 졸업 후 캐나다 대학 진학, 세 가지 경로",
        hsAllDesc: "고교를 마쳤다면 길이 하나로 좁혀지지 않습니다. 국제 사립학교에서 온타리오 고교 졸업장(OSSD)을 채워 대학 1학년으로 직행하는 길, 컬리지에서 2년을 이수하고 3학년으로 편입하는 길, 대학 부설 패스웨이로 1학년을 대체하고 2학년으로 올라가는 길이 모두 열려 있습니다. 셋 다 학사 학위로 끝나므로 졸업 후 취업허가(PGWP)에 전공 제한이 붙지 않습니다.",
        hsAllEngNote: " 공인 영어 성적이 아직 없다면 세 경로의 출발점이 달라집니다. 아래 경로 카드에서 각각의 영어 기준을 비교해 보세요.",
        hsAllTrackSuffix: " · 학사 학위 경로",
        hsAllMajorDesc: (part) => `어느 경로로 가든 ${part} 캐나다 4년제 대학에서 학사 학위를 받는 것이 목표입니다. 학위 과정이라 졸업 후 취업허가(PGWP)에 전공 제한이 없고, 차이는 대학에 몇 학년으로 들어가느냐와 준비 기간·비용입니다.`,
        hsAllNote: "※ 세 경로 모두 학사 학위로 끝나므로 PGWP 전공 제한을 받지 않습니다. 성적·영어·예산에 따라 유리한 경로가 달라집니다.",
        hsAllRegionNote: (region) => `※ ${region} 기준으로 경로별 대표 학교를 함께 보여드립니다. 아래 세 묶음을 나란히 비교해 보세요.`,
        regionBCName: "BC (밴쿠버권)",
        regionONName: "온타리오 (토론토권)",
        hsGroupOssd: "국제 사립고에서 OSSD 채우기",
        hsGroupOssdSub: "이전 학력을 학점으로 인정받고 남은 과목만 이수한 뒤, 캐나다 내신으로 대학 1학년에 지원합니다.",
        hsGroupTransfer: "컬리지에서 2년 뒤 편입",
        hsGroupTransferSub: "컬리지 학점을 대학으로 옮겨 3학년으로 들어갑니다. 학비를 가장 많이 아끼는 경로입니다.",
        hsGroupPathway: "대학 부설 패스웨이",
        hsGroupPathwaySub: "대학 캠퍼스에서 1학년 과정을 듣고 2학년으로 올라갑니다. 학위 기간은 4년 그대로입니다.",
        routeNo: (n) => `경로 ${n}`,
        schoolFeeLabel: "학비",
        routeMajorsLabel: "진학 가능 전공",
        ossdCreditCell: (credits, hours, left) => `최대 ${credits}학점 · 봉사 ${hours}시간 인정 → 남은 ${left}과목`,
        majorHsAll: "고교 졸업 후",
        routeHsAll: "대학",

        /* 공통 블록 */
        boardTitle: (major, route) => `${major} ${route} 진학, 다음 단계로 이어가세요`,
        infoRead: "읽는 데 {0}분 · 정보 확인 {1}",
        cat_pathway: "진학 경로",
        cat_cost: "학비·비용",
        cat_english: "영어·요건",
        cat_major: "전공 선택",

        /* 경로 가이드 · 영어 안내 */
        guideSubMatched: "진단 결과, 아래 경로가 가장 적합합니다. 단계별 준비 과정을 확인해 보세요.",
        guideSubCompare: "같은 목표라도 학력과 전공에 따라 최적의 경로는 다릅니다. 진학 경로를 비교해 보세요.",
        langNoticeOssd: "공인 영어 점수가 아직 없어도 괜찮습니다. 국제 사립학교의 ESL 과정을 12학년 정규 수업과 병행해 영어를 끌어올리며, 학교 성적으로 대학 조건부 입학 허가(Conditional Offer)를 받는 방식으로 진행할 수 있습니다.",
        langNoticeDefault: "공인 영어 점수가 아직 없어도 괜찮습니다. 현지 어학연수(패스웨이) 과정을 먼저 이수한 뒤, 어학원 수료 성적으로 컬리지·대학에 조건부 입학 허가(Conditional Offer)를 받을 수 있습니다. 별도의 IELTS 없이 진학한 사례도 많습니다.",

        /* ---------- 정적 HTML ---------- */
        heroEyebrow: "Canada College Pathway Guide",
        heroTitle: "3분 진단 캐나다 유학<br><span class=\"text-[#FF7059]\">내 상태로 진학 학교 체크</span>",
        heroGo: "진단 시작",
        heroCareerTitle: "커리어·이민 트랙",
        heroCareerDesc: "고졸·대졸·직장인. 공립 컬리지 디플로마로 취업허가(PGWP), 그리고 이민까지.",
        heroTransferTitle: "대학 편입 트랙",
        heroTransferDesc: "컬리지 2년 후 명문대 편입. BC 트랜스퍼 등 제도화된 편입 시스템 활용.",
        heroNote: "특정 유학원과 무관한 무료 정보 가이드입니다.<br>PGWP 적격 여부는 2026년 IRCC 공식 발표 기준으로 판단합니다.",
        heroPhotoAlt: "캐나다 로키 설산 앞에서 캐나다 국기를 든 사람",
        resultDone: "분석이 완료되었습니다.",
        shareHint: "무료 상담 신청 시 이 진단 결과가 자동으로 첨부됩니다. 링크를 복사해 카카오톡·문자로 전달하면 같은 결과 페이지가 열립니다.",
        switchTrackBtn: "학위·편입 트랙으로 전환",
        hsExtraBadge: "중·고 재학생과 고교 졸업자 모두 가능",
        hsTitle: "국제 사립학교 → 대학 직행 경로",
        ontarioPrivateLink2: "온타리오 사립학교 공식 안내 (Ontario.ca)",
        langNoticeTitle: "영어 성적이 없어도 시작할 수 있습니다",
        guideSectionTitle: "캐나다 진학 경로 가이드",
        guideSectionSub: "같은 목표라도 학력과 전공에 따라 최적의 경로는 다릅니다. 세 가지 진학 경로를 비교해 보세요.",
        guideNote: "※ 경로별 입학 요건·편입 인정 범위는 컬리지와 전공에 따라 다릅니다. 지원 전 각 컬리지 공식 입학처에서 최신 기준을 확인하세요.",
        policyNote: "※ 본 안내는 2026년 IRCC 발표 기준이며 정책은 변동될 수 있습니다. 결과는 안내용이며, 프로그램별 최종 확인은 공식 채널에서 하시기 바랍니다.",
        boardSub: "정부·학교 공식 자료만으로 작성한 글입니다. 이 결과와 관련된 것만 골라 뒀습니다.",
        visaTitle: "비자 · 공식 정보",
        panoramaAlt: "캐나다 국기와 CANADA 레터링",
        saveTitle: "이 결과, 저장해 두세요.",
        footerTagline: "캐나다 컬리지 진학 정보 가이드 — PGWP·편입 AI 진단",
        footerDisclaimer: "본 사이트는 특정 유학원·기관과 무관한 무료 정보 페이지입니다. PGWP 적격 여부는 2026년 IRCC 공식 발표 기준이며, 지원 전 반드시 각 기관과 IRCC 공식 채널에서 최신 정보를 확인하세요.",
        footerLinksTitle: "공식 정보 바로가기",
        footerLink1: "EduCanada (캐나다 정부 유학 포털)",
        footerLink2: "학업허가 (Study Permit) 공식 안내",
        footerLink3: "졸업 후 취업허가 (PGWP) 공식 안내",
        footerLink4: "BC Transfer Guide (편입 공식 시스템)",
        footerQuebec: "※ 본 가이드는 퀘벡(CEGEP) 컬리지 진학을 다루지 않습니다.",
        footerCopy: "© CA Study Guide. 정보 제공 목적으로 제작된 페이지입니다.",

        tuitionPending: "※ 표기된 학비는 모두 국제학생 기준이며, 같은 학교라도 전공에 따라 차이가 있습니다. 별도 표시가 없으면 연간(2학기) 수업료이고, '필수비 포함'으로 표시된 학교는 수업료와 필수비를 나눠 공시하지 않아 합산 금액입니다. 금액이 없는 학교는 프로그램별로만 조회할 수 있으니 각 컬리지 공식 페이지에서 확인하세요.",
    costTitle: "학비와 생활비",
    costSub: "원화는 조회 시점 환율로 함께 보여드립니다.",
    costColItem: "구분",
    costColRange: "연간 금액",
    costColNote: "비고",
    costHs: "국제 사립고 (OSSD)",
    costHsNote: "기숙·홈스테이 별도",
    costCollege: "공립 컬리지",
    costCollegeNote: "코업은 대개 유급",
    costUni: "4년제 대학",
    costUniNote: "매니토바가 하단, 토론토대 상경이 상단",
    costLiving: "생활비",
    costLivingNote: "스터디 퍼밋 증빙 기준액",
    costIns: "의료보험",
    costInsNote: "주 보험 또는 사보험",
    costFoot: "※ 생활비는 실제 지출 추정이 아니라 스터디 퍼밋에서 증빙하도록 정한 기준액입니다. 토론토·밴쿠버 실제 생활비는 대개 이보다 높습니다.",
        saveDesc: "진단 결과는 링크 하나에 담겨 있습니다. 복사해서 나에게 보내 두거나, 함께 고민하는 친구·가족과 공유하세요.",
        nextSteps: [
            ["프로그램 확정:", "관심 전공의 PGWP 적격 여부를 프로그램 단위(CIP 코드)로 확인하고 지원 프로그램을 확정하세요."],
            ["서류·영어 준비:", "영문 졸업·성적 증명서와 IELTS 등 공인 영어 성적을 준비합니다. 조건부 입학(Conditional Offer)도 활용할 수 있습니다."],
            ["학업허가 신청:", "입학허가서(LOA)와 주정부 승인서(PAL)를 갖춰 학업허가(Study Permit)를 신청하세요."]
        ],
        visaItem1Head: "학업허가 (Study Permit):",
        visaItem1Body: "신청 요건·PAL·처리 기간은 IRCC 공식 안내에서 확인하세요.",
        visaItem1Link: "IRCC 공식 안내",
        visaItem2Head: "졸업 후 취업허가 (PGWP):",
        visaItem2Body: "적격 전공 목록과 요건은 IRCC PGWP 공식 페이지가 유일한 기준입니다.",
        visaItem2Link: "IRCC PGWP 공식 페이지",
        visaItem3Head: "공식 유학 포털:",
        visaItem3Body: "캐나다 정부가 운영하는 EduCanada에서 장학금·생활비 정보를 찾아보세요.",
        policyTitle: "2026 캐나다 유학, 무엇이 달라졌나",
        policySub: "캐나다 이민부(IRCC) 발표 기준, 컬리지 진학 전 반드시 알아야 할 세 가지 변화입니다.",
        policy1Head: "학업허가 총량 제한",
        policy1Body: "— 2026년 캐나다 전체 학업허가는 408,000건으로 제한되며, 컬리지 지원자는 주정부 승인서(PAL)가 필수입니다.",
        policy2Head: "비학위 과정은 적격 전공만 PGWP 가능",
        policy2Body: "— 디플로마 등 비학위 과정은 보건·교육·기술직·농업·STEM·운송 6개 섹터의 적격 전공만 졸업 후 취업허가를 받을 수 있습니다.",
        policy3Head: "학위 과정은 전공 제한 없음",
        policy3Body: "— 학사·석·박사 학위 과정 졸업자는 전공과 무관하게 PGWP가 가능합니다(컬리지 학사 포함).",
        policyFoot: "※ 정책은 변동될 수 있으며, 최신 기준은 IRCC 공식 발표에서 확인하세요.",
        policyFootLink: "IRCC 공식 발표",
        hsIntro: "토론토의 국제 사립학교(BICC·TAIE·UMC 하이스쿨 등)에서 온타리오 고교 졸업장(OSSD)을 취득한 뒤 캐나다 대학에 바로 지원하는 경로입니다. 중·고등학교 재학 중은 물론 이미 고교를 마친 뒤에도 고를 수 있습니다.",
        hsStep1: "국제 사립학교 입학 — 재학생은 학년에 맞춰, 고교 졸업자는 이전 학력을 학점으로 인정받고 남은 과목만 이수 (ESL 병행 가능)",
        hsStep2: "온타리오 고교 졸업장(OSSD) 취득 — 12학년 내신(Top 6 과목)으로 대학 지원",
        hsStep3: "토론토대·UBC 등 대학 1학년 직행 → 학위 취득 시 PGWP 전공 제한 없음",
        hsPros: "수능·한국 내신 부담 없이 현지 내신으로 명문대에 도전할 수 있고, 컬리지 편입 단계를 건너뜁니다.",
        hsOssdReq: "OSSD 졸업 요건은 30학점(필수 18 + 선택 12)과 봉사활동 40시간, 10학년 문해력 시험입니다.",
        hsCreditTitle: "※ 어느 학년을 마치고 들어가느냐에 따라 인정 학점과 남은 과목 수가 정해집니다 (BICC 안내서 기준).",
        hsMature: "고교를 이미 마쳤다면 온타리오 규정상 만 18세 이상은 성인 학생으로 분류됩니다. 이전 학력으로 9·10학년 최대 16학점, 11·12학년 최대 10학점까지 인정받고 11·12학년 4학점만 실제로 이수하면 졸업 요건 30학점을 채울 수 있습니다.",
        hsCaution: "학점 인정 범위는 학교장이 서류를 보고 정하고, 사립학교는 이 인정 절차를 의무가 아니라 선택으로 운영합니다. 실제로 몇 과목을 들어야 하는지와 학비·기숙사는 지원 전 각 학교 공식 페이지에서 확인하세요."
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
        majorPageHint: (major) => `Open the ${major} program page`,
        strengthPrefix: "Strength: ",
        collegeLabel: "College",
        tuitionLabel: "Annual tuition",
        tuitionNote: "(international, tuition only, varies by programme)",
        basisWithFees: "includes compulsory fees",
        hubDetail: "Fees and requirements",
        majorsLabel: "Recommended fields",
        regionLabel: "Region",
        subLineTier: (region, tier) => `${region} · ${tier}`,

        /* 국제 사립학교 카드 */
        pointLabel: "Why this school",
        programLabel: "Programme",

        /* 트랙 A: 커리어·이민 */
        careerTitleBlocked: (m) => `${m}: this route needs rethinking`,
        careerDescBlocked: (m) => `As of 2026, a college diploma in ${m} does not qualify for a post-graduation work permit. Your goal is still reachable on a different route — see the alternatives in the field card below.`,
        careerTitle: (m, post) => m + (post ? " — post-graduate route" : " — career and immigration route"),
        careerDescBase: (m, sector) => `As of 2026, ${m} falls within an eligible sector for non-degree programmes (${sector}). `,
        careerDescPostgrad: "Adding a one- to two-year post-graduate certificate on top of your existing degree is the route we would suggest, leading to a work permit and a career in Canada.",
        careerDescDiploma: "The route we would suggest runs from a two-year public college diploma, to a work permit of up to three years, to 12 months of experience, and then an immigration application.",
        careerDescConditional: " Note that eligibility in this field varies from programme to programme, so check the CIP code before you apply.",
        engShortNote: " If your English score is not there yet, a language or pathway programme alongside can bring you up to the entry requirement.",
        summaryUndecided: (m) => `Undecided → ${m}`,
        recTitleSuffixPost: " · post-graduate certificate",
        recTitleSuffixDiploma: " · diploma",
        recDescCommon: "Representative programmes are listed below. Before you apply, confirm each programme's eligibility by its CIP code on the official IRCC list.",
        noteConditional: (c) => `Conditional field: ${c}`,
        noteCaution: (c) => `Note: ${c}`,
        warnText: "As of 2026, a college diploma in this field does not qualify for a post-graduation work permit.",
        warnAlt: (alt) => `Alternative: ${alt}`,
        warnAltDefault: "Consider a degree programme or the university transfer track instead.",
        altBtn: (name) => `See a related eligible field — ${name}`,
        regionNote: (regions, tags) => `Based on your answers we would look at ${regions} first. (${tags})`,
        routePostgrad: "post-graduate",
        routeDiploma: "diploma",

        /* 트랙 B: 대학 편입 */
        transferTitle: "College, then transfer to university (2 + 2)",
        transferDescBC: "British Columbia has a formal BC Transfer system, so college credit carries directly into a university degree. Two years at a transfer-focused college such as Langara or Douglas puts you in a position to apply for year 3 at UBC, SFU and others.",
        transferDescON: "Ontario has many colleges with degree and transfer agreements, including Seneca, Humber and Sheridan. After two years you can transfer to a university such as Toronto, or continue to a degree through the college's own bachelor's programme.",
        transferDescCommon: " Just as importantly, degree and transfer routes qualify for a post-graduation work permit with no field restriction.",
        transferEngNote: " Even if your English score is not there yet, you can start on a conditional offer with a language or pathway programme alongside.",
        degreeBadge: '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> Work permit eligible — no field restriction with a degree</span>',
        fieldUndecided: "Still deciding",
        transferTrackSuffix: " · university transfer",
        transferDescPartUndecided: "take a broad set of introductory subjects and settle on a field",
        transferDescPartField: (f) => `take the introductory subjects for ${f}`,
        transferMajorDesc: (part) => `Over the first two years at college you ${part}, keep your GPA up, and transfer into year 3 of a degree. Once you graduate with that degree, the work permit carries no field restriction.`,
        transferPrograms: ["University Transfer", "Associate Degree", "College Bachelor's"],
        transferNote: "Degree and transfer routes are not subject to the work permit field restriction. How much credit transfers, and on what conditions, differs by university and course.",
        transferRegionBC: "These are transfer-focused colleges within the BC Transfer system, mostly within commuting distance of UBC and SFU.",
        transferRegionON: "These are Ontario colleges with degree and transfer agreements, mostly in the Greater Toronto Area.",
        majorTransfer: "University transfer",
        routeTransfer: "route",

        /* 트랙 B (중·고 재학): OSSD */
        ossdTitle: "International private school, then straight to university (OSSD)",
        ossdDesc: "If you are still at secondary school, you can skip college altogether. Studying at an international private school in Toronto — BICC, TAIE or UMC High School, for example — earns you the Ontario Secondary School Diploma and takes you straight into year 1 at a Canadian university. Applications are assessed on your grade 12 results (top six subjects) at universities including Toronto and UBC, and a degree carries no field restriction on the work permit.",
        ossdEngNote: " English can be built up through the school's own ESL programme alongside your subjects, so you can start without a test score.",
        ossdTrackSuffix: " · straight to university",
        ossdDescPartUndecided: "explore the grade 12 subjects that suit you",
        ossdDescPartField: (f) => `take the grade 12 subjects related to ${f}`,
        ossdMajorDesc: (part) => `At an international private school you ${part}, earn the Ontario Secondary School Diploma, and apply directly to year 1 at a Canadian university on your grade 12 results. There is no college transfer step, and a degree carries no field restriction on the work permit.`,
        ossdPrograms: ["OSSD (Ontario Secondary School Diploma)", "ESL plus mainstream grade 12 subjects", "Direct application to year 1"],
        ossdNote: "Intake dates, tuition and boarding differ by school — check each school's own page. University English requirements such as IELTS must be met separately.",
        ossdRegionNote: "These are well-known international private schools in the Toronto area. Depending on the student's age, temperament and budget, a supported placement at a public school board can also work — it is worth comparing both.",
        majorPrivate: "International private school",
        routeUniDirect: "route",

        /* 트랙 B (고3·고교 졸업): 세 경로를 모두 안내 */
        hsAllTitle: "Three ways into a Canadian university once school is behind you",
        hsAllDesc: "Finishing school does not narrow you to one route. You can top up your credits at an international private school, earn the Ontario Secondary School Diploma and go straight into year 1; you can spend two years at a college and transfer into year 3; or you can take a university pathway that replaces first year and move up into year 2. All three end in a bachelor degree, which carries no field restriction on the post-graduation work permit.",
        hsAllEngNote: " Without a test score yet, the three routes start in different places. Compare the English requirement on each route card below.",
        hsAllTrackSuffix: " · degree route",
        hsAllMajorDesc: (part) => `Whichever route you take, the destination is the same: ${part} and graduate with a bachelor degree from a Canadian university. Because it is a degree, the work permit carries no field restriction. What differs is the year you enter, how long it takes and what it costs.`,
        hsAllNote: "All three routes end in a degree, so none of them run into the work-permit field restrictions. Which one suits you depends on your grades, your English and your budget.",
        hsAllRegionNote: (region) => `The schools below are the main options for ${region}, grouped by route. Compare the three groups side by side.`,
        regionBCName: "British Columbia (Vancouver area)",
        regionONName: "Ontario (Greater Toronto)",
        hsGroupOssd: "Top up your credits at an international private school",
        hsGroupOssdSub: "Your previous schooling is assessed for credit, you take only the subjects still missing, and you apply to year 1 on Canadian grades.",
        hsGroupTransfer: "Two years at a college, then transfer",
        hsGroupTransferSub: "College credits carry across and you enter year 3. This is the route that saves the most on tuition.",
        hsGroupPathway: "University pathway college",
        hsGroupPathwaySub: "You take first-year courses on the university campus and move into year 2. The degree still takes four years in total.",
        routeNo: (n) => `Route ${n}`,
        schoolFeeLabel: "Fees",
        routeMajorsLabel: "Degrees you can enter",
        ossdCreditCell: (credits, hours, left) => `Up to ${credits} credits and ${hours} volunteer hours → ${left} courses left`,
        majorHsAll: "Leaving school",
        routeHsAll: "for university",

        /* 공통 블록 */
        boardTitle: (major, route) => `${major} ${route} — what to do next`,
        infoRead: "{0} min read · verified {1}",
        cat_pathway: "Entry routes",
        cat_cost: "Fees and costs",
        cat_english: "English and entry",
        cat_major: "Choosing a field",

        /* 경로 가이드 · 영어 안내 */
        guideSubMatched: "Based on your answers, this is the route that fits best. Here is what each stage involves.",
        guideSubCompare: "Even with the same goal, the best route depends on your background and field. Compare them below.",
        langNoticeOssd: "Not having an English test score yet is not a problem. At an international private school you can build your English through the ESL programme alongside your grade 12 subjects, and apply to university on a conditional offer based on your school results.",
        langNoticeDefault: "Not having an English test score yet is not a problem. You can complete a language or pathway programme first and use that result to receive a conditional offer from a college or university. Many students progress this way without ever taking IELTS.",

        /* ---------- 정적 HTML ---------- */
        heroEyebrow: "Canada College Pathway Guide",
        heroTitle: "Study in Canada:<br><span class=\"text-[#FF7059]\">find the route that fits you</span>",
        heroGo: "Start",
        heroCareerTitle: "Career and immigration",
        heroCareerDesc: "For school leavers, graduates and working professionals. A public college diploma leading to a work permit, and on to residency.",
        heroTransferTitle: "University transfer",
        heroTransferDesc: "Two years at college, then transfer to a leading university through an established system such as BC Transfer.",
        heroNote: "A free information guide, independent of any agency.<br>Work permit eligibility follows the official 2026 IRCC announcements.",
        heroPhotoAlt: "Someone holding the Canadian flag in front of the snow-capped Rockies",
        resultDone: "Here is your result.",
        shareHint: "Your result is attached automatically when you request advice. Copy the link to share it — anyone who opens it sees the same result page.",
        switchTrackBtn: "Switch to the degree and transfer track",
        hsExtraBadge: "Open to students still at school and to those who have finished",
        hsTitle: "International private school, then straight to university",
        ontarioPrivateLink2: "Official guide to Ontario private schools (Ontario.ca)",
        langNoticeTitle: "You can start without an English score",
        guideSectionTitle: "Entry routes in Canada",
        guideSectionSub: "Even with the same goal, the best route depends on your background and field. Compare the three below.",
        guideNote: "Entry requirements and the amount of credit recognised differ by college and field. Check the current requirements with each college's admissions office before you apply.",
        policyNote: "This guide follows the 2026 IRCC announcements, and policy can change. Treat the result as guidance and confirm the details for each programme through official channels.",
        boardSub: "Written from government and institutional sources only. These are the ones that bear on your result.",
        visaTitle: "Visa and official information",
        panoramaAlt: "The Canadian flag with CANADA lettering",
        saveTitle: "Keep this result",
        footerTagline: "A pathway guide to Canadian colleges — work permits and university transfer",
        footerDisclaimer: "This site is a free information resource and is not affiliated with any agency or institution. Work permit eligibility follows the official 2026 IRCC announcements; always confirm the current details with the institution and through official IRCC channels before you apply.",
        footerLinksTitle: "Official sources",
        footerLink1: "EduCanada (Canadian Government study portal)",
        footerLink2: "Study permit — official guide",
        footerLink3: "Post-graduation work permit — official guide",
        footerLink4: "BC Transfer Guide (the official transfer system)",
        footerQuebec: "This guide does not cover CEGEP study in Quebec.",
        footerCopy: "© CA Study Guide. Published for information purposes.",

        costTitle: "Tuition and living costs",
    costSub: "Won amounts are converted at today's rate.",
    costColItem: "Item",
    costColRange: "Per year",
    costColNote: "Notes",
    costHs: "Private high school (OSSD)",
    costHsNote: "Boarding or homestay on top",
    costCollege: "Public college",
    costCollegeNote: "Co-op terms are usually paid",
    costUni: "University",
    costUniNote: "Manitoba at the bottom, Toronto commerce at the top",
    costLiving: "Living costs",
    costLivingNote: "Study permit proof-of-funds figure",
    costIns: "Health insurance",
    costInsNote: "Provincial plan or private cover",
    costFoot: "The living figure is not a spending estimate: it is the amount a study permit requires you to show. Actual costs in Toronto and Vancouver usually run higher.",
    tuitionPending: "All tuition shown is the international rate and varies by programme even within one college. Unmarked figures are tuition for a two-semester year; those marked as including compulsory fees come from colleges that do not publish the two separately. Where no figure appears, the college prices by programme only, so check its own site.",
        saveDesc: "Your result lives in a single link. Send it to yourself, or share it with family and friends who are helping you decide.",
        nextSteps: [
            ["Choose the programme:", "Check whether the programmes you are interested in qualify for the work permit, by CIP code, and settle on where to apply."],
            ["Documents and English:", "Prepare your certificate and transcript in English along with an accepted English test result such as IELTS. A conditional offer is also an option."],
            ["Apply for the study permit:", "With your letter of acceptance and provincial attestation letter in hand, apply for the study permit."]
        ],
        visaItem1Head: "Study permit:",
        visaItem1Body: "Check the requirements, the provincial attestation letter and processing times on the IRCC site.",
        visaItem1Link: "IRCC official guide",
        visaItem2Head: "Post-graduation work permit:",
        visaItem2Body: "The official IRCC page is the only authority on the eligible field list and the requirements.",
        visaItem2Link: "IRCC work permit page",
        visaItem3Head: "Official study portal:",
        visaItem3Body: "EduCanada, run by the Canadian Government, covers scholarships and living costs.",
        policyTitle: "What changed for 2026",
        policySub: "Three changes announced by Immigration, Refugees and Citizenship Canada that you should know before applying to a college.",
        policy1Head: "A cap on study permits",
        policy1Body: "— Canada will issue no more than 408,000 study permits in 2026, and college applicants must hold a provincial attestation letter.",
        policy2Head: "Non-degree programmes: only eligible fields qualify",
        policy2Body: "— For diplomas and other non-degree programmes, only eligible fields within six sectors — health, education, trades, agriculture, STEM and transport — lead to a post-graduation work permit.",
        policy3Head: "Degrees carry no field restriction",
        policy3Body: "— Graduates of bachelor's, master's and doctoral programmes qualify regardless of field, including college bachelor's degrees.",
        policyFoot: "Policy can change. Confirm the current position in the official IRCC announcements.",
        policyFootLink: "official IRCC announcements",
        hsIntro: "Study at an international private school in Toronto — BICC, TAIE or UMC High School, for example — earn the Ontario Secondary School Diploma, and apply directly to a Canadian university. The route is open whether you are still at school or have already finished.",
        hsStep1: "Join an international private school — at your current year group, or, if you have finished school, with your previous studies assessed for credit so you take only the subjects still missing (ESL alongside if needed)",
        hsStep2: "Earn the Ontario Secondary School Diploma and apply on your grade 12 results (top six subjects)",
        hsStep3: "Enter year 1 at a university such as Toronto or UBC — a degree carries no field restriction on the work permit",
        hsPros: "You are assessed on Canadian school results rather than the Korean CSAT, and you skip the college transfer step altogether.",
        hsOssdReq: "The diploma takes 30 credits — 18 compulsory and 12 optional — plus 40 hours of community service and the grade 10 literacy test.",
        hsCreditTitle: "How many credits are recognised, and how many courses are left, depends on the year you finish before you arrive. Figures from BICC's brochure.",
        hsMature: "If you have already finished school, Ontario treats anyone aged 18 or over as a mature student. Previous study can be recognised for up to 16 grade 9 and 10 credits and up to 10 grade 11 and 12 credits, so taking just four grade 11 and 12 courses completes the 30 credits the diploma requires.",
        hsCaution: "How much is recognised is decided by the principal from your documents, and private schools apply this assessment by choice rather than obligation. Confirm how many courses you would actually take, along with fees and boarding, on each school's own page before applying."
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
    "준석사 과정": "Post-graduate certificate",
    "Post-Graduate Certificate (1~2년)": "Post-graduate certificate (1–2 years)",
    "국내 대학 졸업자·직장인. 보유한 학사 학위 위에 1~2년 실무 과정을 더해 커리어를 전환하는 경로입니다.":
        "you already hold a degree or have work experience. Adding a one- or two-year applied programme on top lets you change direction.",
    "학사 학위로 준석사 과정 지원": "Apply for a post-graduate certificate with your existing degree",
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

    "국제 사립고 → 대학 직행": "International private school, then straight to university",
    "중·고 재학생은 물론 고3·고교 졸업자도 고를 수 있습니다. 캐나다 고교 내신을 만들어 대학 1학년으로 바로 들어가는 경로입니다.":
        "you are still at school, or have just left it. Either way you build a Canadian school record and enter year 1 directly.",
    "온타리오 인가 사립고 입학 (공인 영어 성적 없이 ESL 병행 가능)": "Enrol at a licensed Ontario private school — no test score needed, with ESL alongside",
    "이전 학력을 온타리오 학점으로 인정받고 남은 과목만 이수 → OSSD": "Have your previous study recognised as Ontario credits and take only what is missing, to the diploma",
    "12학년 내신(Top 6)으로 토론토대·UBC 등 1학년 지원": "Apply to year 1 at Toronto, UBC and others on your top six grade 12 results",
    "고교를 이미 마쳤다면 온타리오 규정상 만 18세 이상은 성인 학생으로 분류되어, 이전 학력으로 최대 26학점까지 인정받고 11·12학년 4학점만 실제로 이수하면 졸업장 30학점을 채울 수 있습니다.":
        "If you have already finished school, Ontario treats anyone aged 18 or over as a mature student: up to 26 credits can be recognised from previous study, so four grade 11 and 12 courses complete the 30 the diploma requires.",
    "학점 인정 범위는 학교장이 서류를 보고 판단하고, 사립학교는 이 인정 절차를 의무가 아니라 선택으로 운영합니다. 지원 전 학교에 몇 과목을 들어야 하는지부터 확인하세요.":
        "How much is recognised is the principal's judgement on your documents, and private schools run this assessment by choice rather than obligation. Ask how many courses you would take before you apply.",

    "대학 부설 패스웨이": "University pathway college",
    "University Pathway (UTP)": "University pathway (UTP)",
    "고교 졸업 성적이나 영어가 직접 지원에 조금 모자란 분. 대학 캠퍼스 안에서 1학년 과정을 듣고 2학년으로 올라갑니다.":
        "your school results or English fall a little short of applying directly. You take first-year courses on the university campus and move up into year 2.",
    "패스웨이 컬리지 입학 (IELTS 5.5 내외부터)": "Start at the pathway college, from around IELTS 5.5",
    "학부 1학년 과정(UTP) 8~12개월 이수": "Complete the first-year programme (UTP) over 8 to 12 months",
    "기준 성적 충족 시 본교 2학년 편입 → 학위 기간은 4년 그대로": "Meet the grade threshold and enter year 2 at the university — the degree still takes four years",
    "직접 입학보다 낮은 성적·영어로 시작하는데 수업은 본교 캠퍼스에서 듣고, 1학년을 대체하는 방식이라 졸업이 늦어지지 않습니다.":
        "You start on lower grades and English than direct entry, but study on the university's own campus, and because it replaces first year it does not delay graduation.",
    "학교가 정해져 있어 대학을 자유롭게 고를 수 없고, 학비는 본교 1학년과 비슷한 수준입니다.":
        "The university is fixed, so you cannot shop around, and fees sit close to first-year undergraduate level.",

    /* --- 사립 고교 (OSSD) · 편입·패스웨이 학교 카드 --- */
    "OSSD 9~12학년 · 대학 진학 집중 관리": "OSSD grades 9-12, with close support for university entry",
    "2025년 한국 학생 95명이 1인당 평균 7.5개 오퍼 · 진학은 캐나다 30%, 영국 30%, 호주 20%":
        "In 2025 its 95 Korean students averaged 7.5 offers each, and went on to Canada (30%), the UK (30%) and Australia (20%)",
    "OSSD 7~12학년 · 고교 졸업자용 UPC 운영": "OSSD grades 7-12, plus a UPC programme for school leavers",
    "연 6학기제라 원하는 달에 시작할 수 있고 기숙사를 직접 운영": "Six terms a year, so you can start almost any month, and the school runs its own residences",
    "OSSD 9~12학년 · ESL 병행": "OSSD grades 9-12 alongside ESL",
    "8주 학기제로 필요한 과목만 빠르게 채울 수 있음": "Eight-week terms let you clear just the subjects you need, quickly",
    "OSSD 취득 → 대학 직행": "Earn the OSSD, then year 1",
    "OSSD 또는 UPC → 대학 직행": "OSSD or UPC, then year 1",
    "연 C$20,000 (8과목)": "C$20,000 a year for 8 courses",
    "10학점 C$29,950 · 8학점 C$24,760": "C$29,950 for 10 credits · C$24,760 for 8",
    "과목당 C$2,300 (학기 8과목 이상)": "C$2,300 a course, taking 8 or more a term",

    "사립 컬리지 · BC 편입 제도 소속": "Private college, inside the BC Transfer system",
    "준학사를 마치고 UBC·SFU·UVic 3학년으로 편입": "Finish the associate degree and enter year 3 at UBC, SFU or UVic",
    "준학사 2년 → 대학 3학년": "Associate degree, two years, then year 3",
    "학점당 C$660 (연 24~30학점)": "C$660 a credit, at 24-30 credits a year",
    "사립 컬리지 과정만으로는 PGWP가 나오지 않고, 편입한 대학에서 학사를 마쳐야 대상이 됩니다.":
        "The private college programme alone does not lead to a work permit; you qualify by finishing the degree at the university you transfer into.",
    "사이먼프레이저대(SFU) 캠퍼스 안": "On the Simon Fraser University campus",
    "UTP 1학년을 마치면 SFU 2학년으로 진학": "Complete the UTP first year and move into year 2 at SFU",
    "UTP 1학년 → SFU 2학년": "UTP year 1, then SFU year 2",
    "UTP 2단계 C$39,162 (30학점)": "UTP Stage II, C$39,162 for 30 credits",
    "고교 졸업(12학년 이수)이 지원 조건이고, 직접 입학은 IELTS 6.0부터 시작합니다.":
        "You must have completed year 12 to apply, and direct entry starts at IELTS 6.0.",
    "토론토메트로폴리탄대(TMU) 연계": "Partnered with Toronto Metropolitan University",
    "UTP 1학년을 마치면 TMU 2학년으로 진학": "Complete the UTP first year and move into year 2 at TMU",
    "UTP 1학년 → TMU 2학년": "UTP year 1, then TMU year 2",
    "UTP 2단계 C$36,468": "UTP Stage II, C$36,468",
    "고교 졸업(12학년 이수)이 지원 조건이고, 직접 입학은 IELTS 5.5부터 시작합니다. 학비는 2026/27학년도 기준입니다.":
        "You must have completed year 12 to apply, and direct entry starts at IELTS 5.5. The fee shown is for 2026/27.",

    "국제 사립학교": "International private school",
    "사립 컬리지": "Private college",
    "패스웨이 컬리지": "Pathway college",

    /* --- 진학 가능 전공 --- */
    "준학사 인문(Arts) · 이학(Science) — 편입 후 대학에서 전공 확정":
        "Associate of Arts and Associate of Science — you settle the major at the university you transfer into",
    "인문·사회 · 경영 · 커뮤니케이션 · 컴퓨터사이언스 · 엔지니어링 · 환경 · 보건 · 자연과학":
        "Arts and social sciences · Business · Communication · Computing science · Engineering science · Environment · Health sciences · Sciences",
    "인문 · 커머스 · 크리에이티브 인더스트리 · 공학 · 경제·금융 · 자연과학":
        "Arts · Commerce · Creative industries · Engineering · Economics and finance · Science",

    /* --- OSSD 학점 전환표 (BICC 안내서) --- */
    "중3(9학년) 수료": "Finished grade 9",
    "고1(10학년) 수료": "Finished grade 10",
    "고2(11학년) 수료": "Finished grade 11",
    "고3 이수·졸업": "Finished school",
    "성인 학생(Mature Student)": "Mature student",
    "10학년": "grade 10",
    "11학년": "grade 11",
    "12학년": "grade 12",

    /* --- 전공 미정 시 자동 배정 안내 --- */
    "전공을 아직 정하지 않으셨다면, 대졸·경력자에게는 1~2년 준석사 과정으로 진입할 수 있는 보건·IT 분야를 우선 추천합니다.":
        "If you have not settled on a field yet, health and IT are the strongest starting points for graduates and people already working, since both can be entered through a one- to two-year post-graduate certificate.",
    "전공을 아직 정하지 않으셨다면, 취업·이민 목표에는 기술직(트레이드)·보건 디플로마가 가장 확실한 선택지입니다.":
        "If you have not settled on a field yet, a diploma in the skilled trades or health is the surest choice when work and immigration are the goal.",
    "전공을 아직 정하지 않으셨다면, 취업 수요가 넓은 IT·엔지니어링 테크·보건 분야부터 검토해 보시길 추천합니다.":
        "If you have not settled on a field yet, start with IT, engineering technology and health, where demand for graduates is broadest.",

    /* --- 컬리지 카드 배지 --- */
    "전공 특화": "Specialist in your field",

    /* --- PGWP 배지 (HTML 포함) --- */
    '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> PGWP 가능</span>':
        '<span class="region-badge"><i class="fa-solid fa-circle-check"></i> Work permit eligible</span>',
    '<span class="region-badge badge-warn"><i class="fa-solid fa-triangle-exclamation"></i> 조건부 확인</span>':
        '<span class="region-badge badge-warn"><i class="fa-solid fa-triangle-exclamation"></i> Conditional — check</span>',
    '<span class="region-badge badge-stop"><i class="fa-solid fa-circle-xmark"></i> PGWP 불가(비학위)</span>':
        '<span class="region-badge badge-stop"><i class="fa-solid fa-circle-xmark"></i> Not eligible (non-degree)</span>'
};

/* ───────── 언어 상태 · 조회 ───────── */
/* 기본값은 한국어(브라우저 언어와 무관하게 항상 동일).
 * 저장된 선택이 없으면 "ko"를 저장까지 해서 다른 사이트에도 그대로 이어지게 한다. */
let LANG = (function () {
    try {
        var saved = localStorage.getItem("sgh-lang");
        if (saved === "ko" || saved === "en") return saved;
        localStorage.setItem("sgh-lang", "ko");
    } catch (e) {}
    return "ko";
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
    // 원화 표기는 언어별로 형식이 달라 언어를 바꿀 때 다시 그린다.
    // 컬리지 카드는 refreshDynamicView가 다시 그리므로 그 뒤에 호출해야 한다.
    if (typeof renderKrw === "function") renderKrw();
}

function setLang(l) {
    if (l !== "ko" && l !== "en") return;
    LANG = l;
    try { localStorage.setItem("sgh-lang", l); } catch (e) {}
    applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
