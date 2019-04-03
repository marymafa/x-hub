import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Feeds = props => {
  const [show, setShow] = useState(false);

  //   const handleHide = () => {
  //     setShow(true);
  //   };
  //   const showModal = () => {
  //     setShow(true);
  //   };
  return (
    <div>
      <Modal.Dialog onClick={() => setShow(true)}>
        <Modal.Header closeButton>
          <Modal.Title>article title</Modal.Title>
          <img
            className="articleImages"
            src="https://images.unsplash.com/photo-1553991499-7dc579547f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          />
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Life • 27 March Make the most of a dark situation A lifeless
            body staggers past your desk – dull expression, slurping a coffee...
          </p>
        </Modal.Body>
      </Modal.Dialog>

      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
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
            <i class="icon far fa-comments" />
          </div>
          <div className="iconBackground">
            <i class=" icon fas fa-sync-alt" />
          </div>
          <div className="iconBackground">
            <i class="icon far fa-thumbs-up" />
          </div>
          <div className="iconBackground">
            <i class=" icon fab fa-font-awesome-flag" />
          </div>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Feeds;