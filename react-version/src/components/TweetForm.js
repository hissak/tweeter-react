import React from "react";

function TweetForm() {
  const tweetPlaceHolder = "What are you humming about?"
  const preventSubmit = (event) => {
    event.preventDefault();
  };
  return (
    < section className="newtweet" >
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={preventSubmit}>
        <textarea className="form__textarea" name="text" placeholder={tweetPlaceHolder}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
