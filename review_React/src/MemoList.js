import "./MemoList.css";
import { useState } from "react";
import "./MemoList.css";

let dummyMemo = [
  { id: 1, priority: 1, content: "김코딩에게 만원 갚아야 함" },
  { id: 2, priority: 0, content: "박해커 집 주소 코드시 코드구 코드동" },
  { id: 3, priority: 1, content: "트위틀러 비밀번호 1234" },
  { id: 4, priority: 0, content: "코드바이블 43p 다시 읽기" },
  { id: 5, priority: 0, content: "8/31 코드캠프 등록" }
];

export default function MemoList() {
  const [memos, setMemos] = useState(dummyMemo);
  const [filter, setFilter] = useState(false);

  // 두 가지 상태를 생성합니다.
  // 1. 메모 데이터를 관리하는 memos 상태를 생성하세요.
  // 2. "메모 전체보기"와 "중요 메모 보기"를 관리하는 filter 상태를 생성하세요.

  return (
    <div className="MemoListContainer">
      <div className="HeaderPart">
        <h1>나의 메모 앱</h1>
      </div>
      <div className="MemoPart">
        <div className="radioBox">
          <div>
            <input
              type="radio"
              name="filter"
              onClick={() => setFilter(false)}
              // 상태갱신함수를 활용해 클릭이벤트에 함수를 할당하세요.
              // checked 속성을 활용해 filter 상태에 따라 체크 기본값을 적용해주세요.
            ></input>
            전체 메모 조회
          </div>
          <div>
            <input
              type="radio"
              name="filter"
              onClick={() => setFilter(true)}
              // 상태갱신함수를 활용해 클릭이벤트에 함수를 할당하세요.
              // checked 속성을 활용해 filter 상태에 따라 체크 기본값을 적용해주세요.
            ></input>
            중요 메모 조회
          </div>
        </div>
        <div className="memoBox">
          {memos
            .filter((memo) => {
              if (filter === true) {
                return memo.priority === 1;
              } else {
                return true;
              }
            })
            .map((memo) => (
              <MemoListEntry {...memo} key={memo.id} />
            ))}
          {/* 
            삼항 연산자를 활용해 필터 상태에 따라 메모를 필터랑해서 보여주세요.
            MemoListEntry에 전달해야 할 props를 전달해주세요.
          */}
        </div>
      </div>
    </div>
  );
}

function MemoListEntry(props) {
  const { id, priority, content } = props;
  // 부모 컴포넌트로부터 전달 받은 props를 활용해 보기에 주어진 완성본과 같이,
  // 컴포넌트를 작성해주세요.
  return (
    <div className="MemoListEntryContainer">
      <div className="infoPart">
        <div>{id}</div>
        <div>{priority === 1 ? "중요" : "일반"}</div>
      </div>
      <div className="contentPart">
        <div>{content}</div>
      </div>
    </div>
  );
}
