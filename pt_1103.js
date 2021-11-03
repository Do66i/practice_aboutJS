// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';
// import shortid from 'shortid'
const Tweets = () => {
  const [user, setUser] = useState("packhacker");
  const [msg, setMsg] = useState('');
  const [tweets, setTweets] = useState(dummyTweets);


  const handleButtonClick = (e) => {
    const tweet = {
        id: tweets.length + 1,
        // id: shortid(), // id: tweets.length + 1
        username: user,
        picture: "https://randomuser.me/api/portraits/men/98.jpg",
        content: msg,
        createdAt: new Date(),
        updatedAt: new Date(),
      
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };
  setTweets([tweet, ...tweets])
}

  const handleChangeUser = (e) => {
    setUser(e.target.value)
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  const handleChangeMsg = (e) => {
    setMsg(e.target.value)
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button 
              className="tweetForm__submitButton"
              onClick={handleButtonClick}
              >Tweet</button>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {dummyTweets.map((tweet) => {
          return <Tweet tweet={tweet} key = {tweet.id} />
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
