# CA Study Guide — 캐나다 컬리지 진학 AI 진단 (커리어·이민 / 대학 편입)

캐나다 공립 컬리지 진학 경로를 진단하는 무료 정보 가이드 페이지입니다. 특정 유학원·기관과 무관하며, PGWP(졸업 후 취업허가) 적격 여부는 2026년 IRCC 공식 발표 기준으로 판정합니다.

## 주요 기능

- **커리어·이민 / 대학 편입 트랙 선택** — 트랙별 4~5문항 진단
- **PGWP 3색 배지** — 전공 분야별 적격(eligible) / 조건부(conditional) / 불가(not_eligible) 표시
- **불가 전공 경고** — 비즈니스·호스피탈리티 등 비학위 PGWP 불가 전공 선택 시 인접 적격 전공·편입 트랙 대안 제시
- **권역 점수제 추천** — 온타리오·BC·알버타·프레리·애틀랜틱 5개 권역과 컬리지 추천 (공식 홈페이지 링크)
- **OSSD 경로** — 중·고 재학생에게 국제 사립학교 → 온타리오 고교 졸업장 → 대학 직행 경로 안내
- **결과 링크 공유** — 진단 결과가 URL 해시(`#r=A-0-1-...`)에 인코딩되어 링크 전달 시 동일 결과 표시

## 데이터

- `data/canada_colleges_data.json` — 권역·컬리지·전공·정책 데이터 단일 소스 (index.html의 `CANADA_DATA`에 인라인 동기화)
- PGWP 판정은 `major_categories[].pgwp_non_degree` 값만 근거로 사용
- 학비(`tuition_intl`)는 공식 확정 전까지 null — 각 컬리지 공식 홈페이지 확인 안내로 표기

## 면책

본 페이지는 정보 제공 목적이며, 학업허가·PGWP 정책은 수시로 변경됩니다. 지원 전 반드시 [IRCC 공식 안내](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html)와 각 컬리지 공식 입학처에서 최신 정보를 확인하세요.
