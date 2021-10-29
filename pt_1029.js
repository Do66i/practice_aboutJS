import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div><footer>어질어질하누</footer></div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* 클래스 두 개 지정시 띄어쓰기 사용 */}
                <span className={tweet.username === "parkhacker" ? "tweet__username tweet__username--purple" : "tweet__username"}>{tweet.username}</span>
                {/* tweet__username tweet__username--purple << 왜 이렇게 지정해야하는지 궁금하다면 css파일을 보도록 하라 */}
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
