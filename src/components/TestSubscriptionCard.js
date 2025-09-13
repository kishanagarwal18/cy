// TestSubscriptionCard.js
import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const TestSubscriptionCard = () => {
  // Mock user object for testing
  const mockUser = {
    id: 'test-user-123',
    name: 'Test User',
    email: 'test@example.com'
  };

  return <SubscriptionCard user={mockUser} />;
};

export default TestSubscriptionCard;