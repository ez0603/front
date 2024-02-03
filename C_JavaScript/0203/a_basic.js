// 좌측 메뉴바의 탐색기 단축키 : ctrl + b

// ! 자바스크립트의 기본 출력
// : 자바스크립트의 실행 결과를 웹 브라우저에 표시해야 할 때 사용

// 1. 알림 창 출력
// (alert : 알리다, 경고하다)
// : alert() 함수를 사용
// : > 소괄호 안에 출력할 메세지를 입력
alert('Hello JS!');

// 2. 확인 창 출력
// (confirm : 확인하다)
// : 사용자가 [확인or취소] 버튼 중에서 직접 클릭
// : 사용자가 선택한 결과(동작)에 맞게 프로그램 구현
// : confirm() 함수 사용
// : > 소괄호 안에 메세지를 출력
confirm('로그인 하시겠습니까 ?')

// 3. 프롬프트 창에서 입출력받기
// : 텍스트 필드가 있는 작은 창
// : 간단한 메시지 입력 가능
// : >> 해당 내용을 가져와서 프로그램에서 사용 가능
// : prompt() 함수 사용
// : > 소괄호 안에 메시지 or 메시지, 기본값 설정 가능
// - promtp('메시지');
// - promtp('메시지', '기본값');
// 기본값 : 입력창에 넣을 값
// prompt('이름을 입력하세요.');
let name = prompt('이름을 입력하세요.', '홍길동');
alert(name);

// 4. 웹 브라우저 화면에 출력
// : 브라우저 화면에서 결과값 확인을 위한 용도의 출력

// document.write() 명령문 사용
// : document(웹 문서)에서 괄호 안의 내용을 write(표시)하는 명령문
// >> 괄호 안에는 실제 웹 브라우저 화면에 표시할 내용, 어떤 결과값이 저장된 변수 삽입 가능
document.write('<h1>자바스크립트 출력</h1>');
// 더하기 기호(+)는 숫자 이외의 연산에서 연결 연산자
document.write(name + '님, 반갑습니다.');

// 5. 콘솔 창 출력
// : 개발자 도구(f12)의 콘솔 창에서 내용을 출력
// console.log() 명령문을 사용
console.log(name);