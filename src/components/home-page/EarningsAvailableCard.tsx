import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { IHomeEarningStats } from '../../lib/interfaces';
import { Link } from 'react-router-dom';

interface IProps {
  earningsStats: IHomeEarningStats;
}

const EarningsAvailableCard: React.FC<IProps> = ({ earningsStats = {} }) => {
  const { earningsAvailable = 0, lastPayment = 0 } = earningsStats;
  return (
    <Card className='mb-3'>
      <Container className='py-3'>
        <h2>Earnings Available</h2>
        <h3 className='big-number'>
          $
          {earningsAvailable.toFixed(2)}
        </h3>
        <p>
          Last Payment: $
          {lastPayment.toFixed(2)}
        </p>
        <span className='text-secondary'>
          Balances greater than $5.00 will be automatically sent every 2 weeks.
        </span>
        <div className='d-flex mt-3'>
          <Link to='/settings#payment' className='button-link'>
            <Button>PAYMENT SETTINGS</Button>
          </Link>
        </div>
      </Container>
    </Card>
  );
};

export default EarningsAvailableCard;
