import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import ViewComments from "./view-comments";
import FlagPost from "./flag-post";

const Feeds = props => {
  const [show, setShow] = useState(false);
  const [showComments, viewComment] = useState(false);
  const [showSearch, search] = useState(false);
  const [showBookmarks] = useState(false);
  const [alertBookmarks] = useState(false);


  const [showBookmarks, alertBookmarks] = useState(false);
  const [comment, addComment] = useState("");

  useEffect(() => {
    Axios.get("localhost:3001/article/likes/")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  function pushToStorage(username, comment, article) {
    var date = new Date();
    // var dd = today.getDate();
    var store = [];
    var value = store.push({ "user": username, "comment": comment, "date":date });

    localStorage.setItem("comment", JSON.stringify(value))

    return { article: article, comments: value }
  }

  return (
    <div>
      <Modal.Dialog onClick={() => setShow(true)}>
        <Modal.Header className="imgs" closeButton>
          <Modal.Title>article title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Life • 27 March Make the most of a dark situation A lifeless
            body staggers past your desk – dull expression, slurping a coffee...
          </p>
        </Modal.Body>
      </Modal.Dialog>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="imgs" closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Life • 27 March Make the most of a dark situation A lifeless
            body staggers past your desk – dull expression, slurping a coffee,
            gnawing on a bagel, giving low guttural moans… You recognise the
            zombie-like apparition as your colleague, and realise they are in a
            sleep-deprived state. Sleep deprivation can be terrifying – it’s bad
            for your health, focus, memory, mood, productivity and any creative
            intentions. The long-term effects of sleep debt are well studied –
            they include weight gain, irritability, unhappiness and depression,
            a lack of energy, problems with memory and retaining information, as
            well as an increased risk of developing Alzheimer’s later in life.
            For this third topic in our Biohacking series, we explore ways to
            make the most of a dark situation. Not enough of a good thing Most
            of us need 7-9 hours of sleep a night to function effectively.
            Despite this, many execs are maximising work time at the expense of
            pillow time. Tesla CEO Elon Musk told the New York Times that his
            120-hour work week leaves him less than 6 hours a night for
            sleeping. Globally there has been a shift in the amount of shut-eye
            people are getting – in 1942, 8 hours of sleep was the norm,
            nowadays 6.8 is the average. In a study conducted by Wakefield
            Research, more than half (51%) of adults worldwide report they get
            less sleep than they need on an average night, and 80% say they are
            using weekend days to make up for sleep lost during the week.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="iconBackground">
            <i class="icon far fa-comments" onClick={() => viewComment(true)} />
          </div>
          <div className="iconBackground">
            <i class=" icon fas fa-sync-alt" onClick={()=> search(true)}/>
            <i class="icon fas fa-share-alt" />
          </div>
          <div className="iconBackground">
            <i class="icon far fa-thumbs-up" />
          </div>
          <div className="iconBackground">
            <i class=" icon fab fa-font-awesome-flag" />
          </div>
          <div className="iconBackground">
            <i
              class=" icon far fa-bookmark"
              onClick={() => alertBookmarks(true)}
            />
          </div>
        </Modal.Footer>
        <ViewComments postedComments={props.comments} />
      </Modal>

     ` <Modal
        show={showComments}
        onHide={() => viewComment(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" />
        </Modal.Header>
        <Modal.Body>
          <div className="commentsSection">
            <label>Comment</label>
            <input
              placeholder=" Add comment here"
              onChange={e => addComment(e.target.value)}
              type="text"
            />
          </div>
          <div className="iconBackground">
            <i
              className="icon fas fa-chevron-right"
              onClick={() => viewComment(true)}
            />
          </div>
        </Modal.Body>
        {/* <div className="iconBackground">
            <i className=" icon fas fa-sync-alt" />
          </div>
          <div className="iconBackground">
            <i className="icon far fa-thumbs-up" />
          </div>
          <div className="iconBackground">
            <i className=" icon fab fa-font-awesome-flag"><button onClick={()=>{return <FlagPost/>}}></button></i>/>
          </div>
            <i className=" icon fab fa-font-awesome-flag" />
          </div> */}
        {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
<<<<<<< HEAD
        </Modal.Footer>
=======
>>>>>>> 33eaf84b579558529a7ee965243699e1140bcf67
      </Modal>
      <Modal
        show={showBookmarks}
        onHide={() => alertBookmarks(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <p>Bookmarked</p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={showSearch}
        onHide={() => search(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            search
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="search " type="text"/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Feeds;
