import React from 'react';
import { Container } from '../../../components/Container/styles';
import Header from '../../../components/Header';
import AddCardForm from '../../../components/AddCardForm';

import PaymentService from '../../../services/Payment';

const Payment = () => {
  const PayloadPost = async (data) => {
    const POST = await PaymentService.postPayment(data);
  };

  return (
    <Container>
      <Header />
      <AddCardForm emitPayload={PayloadPost} />
    </Container>
  );
}

export default Payment;