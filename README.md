# seb43_pre_001 : E1I5

## Stack Overflow Clone

<img src="https://camo.githubusercontent.com/dcc135bf022f0d6dfb72e0d8616d1d4db4a6c6c0aed4261baccd27e6cb722c1b/68747470733a2f2f636f6e74656e742e7072657373706167652e636f6d2f75706c6f6164732f323635382f63313932305f6c6f676f2d737461636b6f766572666c6f772d62616e6e65722e6a70673f3634323234" width="600px" height="200px" alt="스택오버플로우 이미지"></img><br/>

#### **팀 이름 : E1I5**

#### **프로젝트 이름 : 스택오버플로우**

#### **설명 : 스택오버플로우 기능 구현**

#### **프로젝트 기간 : 2023.04.14 ~ 2023.04.27**

</br>

---

</br>

# 팀소개

|                              이호승                              |                                 조원호                                 |                             최현아                              |                                   홍승현                                    |                                남지훈                                 |                             김현지A                             |
| :--------------------------------------------------------------: | :--------------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :-------------------------------------------------------------: |
| <a href="https://github.com/leekoby" target="_blank">leekoby</a> | <a href="https://github.com/Joe-wonho " target="_blank">Joe-wonho </a> | <a href="https://github.com/tata-v " target="_blank">tata-v</a> | <a href="https://github.com/seunghyun711" target="_blank">seunghyun711 </a> | <a href="https://github.com/skawlgns1" target="_blank">skawlgns1 </a> | <a href="https://github.com/HJKKIM" target="_blank">HJKKIM </a> |

</br>

# 프로젝트 소개

<a href ="http://e1i5.s3-website.ap-northeast-2.amazonaws.com/"><img src = "./client/src/assets/stack-logo.svg"/> 배포 링크 </a>

## 주기능

- 로그인, 회원가입
- 질문 등록, 질문 조회, 질문 업데이트, 질문 삭제
- 답글 등록, 답글 조회, 답글 업데이트, 답글 삭제
- 마이페이지, 닉네임 수정 기능

</br>

---

# 툴소개

</br>

### 공통

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>

</br>

## FE

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/redux%20toolkit-593d88?style=for-the-badge&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"/> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/TOAST%20UI-5A29E4?style=for-the-badge&logo=&logoColor=white"/>

</br>

## BE

<img src="https://img.shields.io/badge/JAVA-ffffff?style=for-the-badge&logo=JAVA&logoColor=black"/> <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white"/> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
<img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-4B32C3?style=for-the-badge&logo=JWT&logoColor=white"/> <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/> <img src="https://img.shields.io/badge/lombok-DE4F54?style=for-the-badge&logo=lombok &logoColor=white"/> <img src="https://img.shields.io/badge/H2-DE4F54?style=for-the-badge&logo=H2 &logoColor=white"/>

</br>

---

## API 명세서

</br>

<a href = "https://pre-project.gitbook.io/pre-project-stack-overflow/" target = "_blank"> API 명세서 </a>

---

</br>

## DB Diagram (사진)

![DB_Diagram](https://cdn.discordapp.com/attachments/1095220334778667018/1101036568539566111/Pre-ProjectStackOverFlow.png)

---

## 📎Git

</br>

### 🌲 Branch

`main` : 서비스 운영 브랜치 dev : 메인 브랜치 배포전 릴리즈 브랜치
</br>
`dev-fe` : FE 개발 환경 브랜치
</br>
`dev-be` : BE 개발 환경 브랜치
</br>
`feat/개발명` : 기능 개발 브랜치 ex) `feat/Login`
</br>

```
### 📌 Pull Request Merge 담당 📌

>❗️주의 : 해당 브랜치별로 담당 인원분들은 전부 모여 코드리뷰 및 동의 후에 Merge를 진행합니다.

main <- dev : 이호승 홍승현

dev <- dev-fe : 이호승 홍승현
dev <- dev-be : 이호승 홍승현

dev-fe <- feat : 이호승  (조원호, 최현아)
dev-be <- feat : 홍승현 (남지훈, 김현지A)
```

### ✉️ Commit Message

| Message  |                         설명                         |
| :------: | :--------------------------------------------------: |
|   init   |                     브랜치 시작                      |
|   feat   | 새로운 기능을 추가할 경우 ex) feat: 로그인 기능 추가 |
|   fix    |                버그 수정에 대한 커밋                 |
| refactor |        효율을 위한 코드 리팩토링에 대한 커밋         |
|  rename  |             파일 및폴더명/ 경로 변경 시              |
|  style   |  컨벤션에 맞춘 코드 스타일 또는 포맷 등에 관한 커밋  |
|   docs   |                  문서 및 주석 수정                   |

2.prefix - 영어, 제목 - 한글

3.full 문장으로 쓰지 않는다.

4.뒤에 마침표를 찍지 않는다.

| 예시                                                            |
| :-------------------------------------------------------------- |
| feat: Todo 추가 기능                                            |
| style: 변수 네이밍 컨벤션에 맞게 변수명 변경 (ismale => isMale) |
| refactor: 불필요한 for 루프 삭제                                |
