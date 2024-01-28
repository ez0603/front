/*
! 버전 관리 시스템
: 파일 변경 이력을 관리하는 소프트웨어 시스템

  ? 중요성
    : 협업 강화, 변경 이력 추적, 데이터 백업 및 복구

! Git 사용 방법

1. 설치
: 구글 > git > http://git-scm.com(공식 웹사이트)
  > 운영체제에 맞는 git 설치

  MacOs에서 git 설치(추가방법)
  : Homebrew 사용 시
    >> brew install git 명령어 실행

  : 깃 설치 확인 명령어
    git --version

2. 기본 설정 (Git에 사용자 이름과 이메일 설정)

- 시작 버튼 > 자격 증명 관리자
  > windows 자격 증명 > 일반 자격 증명
  > git / github / sourcetree 에서 타인의 아이디로 설정 되어 있는 경우 삭제
  > 브라우저에서 github에 로그인 상태 확인

- 사용자 이름과 이메일 설정
  : windows(Git Bash, cmd)
  : MacOs (Git bashm, 터미널)
  >> 복사한거 붙여넣기 : shift + insert 
  >> 새로운 명령어 환경 열기 - ctrl + c
  >> 방향키(위/아래) : 이전 또는 앞전의 명령어 붙여넣기

  ? 사용자 이름 설정
  git config --global user.name 본인 아이디

  ? 사용자 이메일 주소 설정
  git config --global user.email 본인 이메일

  ? 설정 확인
  git config --global user.name
  git config --global user.email

! Git의 구조적 요소
1. workspace : 개발자가 코드를 작성하는 공간

2. staging area : 커밋하기 전에 파일의 변경사항을 준비하는 장소, 기존의 로컬 스토리지와의 변경사항을 검토하고 커밋할 항목을 결정

3. local repository : 사용자의 개인 컴퓨터에 위치한 저장소, 개인 작업을 진행하고 저장

4. remote repository : 인터넷이나 네트워크에 위치한 저장소, GtiHub의 호스팅 서비스를 사용

! Git의 주요 명령어
1. 깃 저장소 초기화
>>  명령어 사용 시 해당 폴더에 .git 디렉토리가 생성
: git init 

2. 깃 상태 확인
>> 현재 저장소의 상태를 보여줌
  (변경된 파일, 스테이징된 파일, 커밋되지 않은 사항을 확인)
: git status

3. 깃 사용 명령어
? git add .
  : 파일을 스테이징 영역에 추가하여 Git이 추적하게 함
  : git add 파일명 / git add . (모든 변경사항 추가)

? git commit -m "커밋 메세지"
  : 스테이징 영역의 변경사항을 (로컬)저장소의 기록으로 작성
  : 20240128 ljo grid layout

? git push
  : 로컬 변경사항을 리모트 저장소에 업로드
  : git push origin main

? git pull
  : 리모트 저장소의 변경사항을 로컬로 가져오는 명령어
  : 로컬에서 작업환경(work space)까지 바로 사용 가능
  : git pull origin main

! 깃과 깃허브 연동

! 연동된 저장소에 새로운 파일 추가

1. 변경된 사항 확인
: git status

2. workspace에서 remote repository까지 파일 업로드
: git add .
: git commit -m ""
: git push orign main

? 리모트 저장소 추가
새롭게 작업할 로컬 환경에서 새폴더에 git bash 열기

1. 깃 초기화
: git init

2. 브랜치 이름 변경
: git branch -M main

3. 작업하는 환경(workspace)가 원격 리포지토리를 연결
: git remote add origin 리모트 저장소 URL

4. 원격 리포지토리의 내용을 받아오기
: git pull origin main
*/