## 📛프로젝트명 - 고지식(GoJiSik)

#### 고령층 대상 지식IN 서비스

<br/>

## 🚧프로젝트 소개

고령화, 디지털 기기를 다루시는데 어려운 분들의 디지털 격차를 해소하고 키오스크, 정부24, 전자 상거래의 이용방법을 설명해주는 서비스이다.

## 👩🏻‍💻 프로젝트 참여 인원

#### Frontend - 3명
#### Backend - 3명

## ✨ 기술 스택

- 기획디자인 : <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
- 프론트엔드 : <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=html5&logoColor=white">

- 백엔드 : <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge&logo=JPA&logoColor=white"/>

- ETC : <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">


## 💡 서비스 핵심 기능

**`키오스크 , 정부24 , 전자 상거래 이용 방법`**

<br/>

  - 사진을 보면서 주민등록등본 발급 , 키오스크 이용 등 전자 서비스를 이해할 수 있습니다.

<br/>

**`게시판`**

<br/>

  - 게시글을 작성, 수정, 삭제 할 수 있습니다.
  - 게시글에 대한 답변을 작성, 수정, 삭제 할 수 있습니다.

## 🖼️ 디자인

- 메인화면
<img src ="https://github.com/user-attachments/assets/8705ef88-5ec0-48bd-abd8-ed30b0eefeae" />

- 정부24, 키오스크, 이커머스 사용법
<img src ="https://github.com/user-attachments/assets/c7a5bdb2-c811-4e90-b2f4-4b1cbb61f3f1" />

- 게시글 목록
<img src ="https://github.com/user-attachments/assets/63784936-2f34-46c5-b900-2ff8117b0737" />

- 게시글 작성
<img src ="https://github.com/user-attachments/assets/aa7bd1bc-969c-4724-8b08-f1ae129d0994" />

## 🍆 본인이 구현한 기능

- 키오스크 사용방법 페이지, 이커머스 사용방법 페이지 - 웹 퍼블리싱

- 마이페이지 - 자신이 쓴 게시글 내역 보기, 자신이 쓴 댓글 내역 보기, 정보 조회, 회원 정보 수정, 회원 탈퇴

- 회원가입 - 유효성 검사

## 🚩 트러블 슈팅

### 1. 문제 - 로그인 후 기능 사용시 토큰이 필요
#### 상황
- 기능을 사용하기 위해 토큰이 필요한데, 어떻게 토큰을 사용하는 지 모르는 문제 발생
- 토큰을 사용하지 못해 어떤 서비스도 사용할 수 없는 문제 발생

#### 해결 방법
- localStorage를 이용하여 로그인 시 토큰을 저장
- API 통신 시 토큰을 Header에 담아 통신

#### 배운 점 
- 처음엔 어떤 오류가 발생하는 지 몰랐기에 당황했지만 관련 에러를 구글링 하면 문제 해결을 쉽게 할 수 있다는 사실을 알았다.
- localStorage와 Token의 개념에 대해 알게 되었다.

### 2. 문제 - 게시글 내역과 댓글 내역의 데이터 혼합
#### 상황
- 게시글 내역을 조회하는 API와 댓글 내역을 조회하는 API의 응답이 동일하게 나오는 문제 발생

#### 해결 방법
- f12에서 Network로 API 통신 Response를 확인
- 백엔드 서버에서 잘못된 데이터를 보내는 것을 확인 후 수정 요망

#### 배운 점
- 처음 하는 API 연동이라 프론트 문제인지 백엔드 문제인지 식별하기 어려웠지만, 개발자 도구를 확인해보니 확인할 수 있다는 사실을 알게 되었다.
