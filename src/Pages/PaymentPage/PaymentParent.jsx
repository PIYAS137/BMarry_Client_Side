import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const PaymentParent = ({reqBioId,myBioId}) => {
  return (
    <Elements stripe={stripePromise}>
        <CheckOutForm reqBioId={reqBioId} myBioId={myBioId}/>
    </Elements>
  )
}

export default PaymentParent