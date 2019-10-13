import React, { Component } from "react";

import "../../utils/note-analyzer";
import { connect } from "react-redux";
import {
  Container,
  ResultContainer,
  NoteName,
  Octave,
  Cents,
  Frequency
} from "./styles";

import RangeBar from "../../components/RangeBar";

class Tuner extends Component {
  render() {
    const note = this.props.currentNote;
    return (
      <Container>
        <ResultContainer tuned={-5 <= note.cents && note.cents <= 5}>
          <NoteName>
            {note.noteName}
            <Octave>{note.octave}</Octave>
          </NoteName>
          <Cents></Cents>
          <Frequency>{Math.round(note.freq)} Hz</Frequency>
        </ResultContainer>

        <RangeBar value={note.cents}></RangeBar>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  currentNote: store.noteReducer.currentNote
});

export default connect(mapStateToProps)(Tuner);
