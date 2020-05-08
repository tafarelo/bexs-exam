import React from 'react';
import PropTypes from 'prop-types';

import LabelAddCard from './LabelAddCard';
import CardForm from './CardForm';

import 'react-credit-cards/es/styles-compiled.css';
import { Container, Div } from './styles';

function AddCardForm(props) {
  const { emitPayload } = props;
  return (<Container>
    <LabelAddCard />
    <Div>
      <CardForm emitPayload={(data) => emitPayload(data)} />
    </Div>
  </Container>);
}

export default AddCardForm;

AddCardForm.propTypes = {
  emitPayload: PropTypes.func.isRequired,
};