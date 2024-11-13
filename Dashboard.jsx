import { Card, Title, BarChart, DonutChart } from '@tremor/react';
import { useState } from 'react';

const Dashboard = () => {
  const [serviceData] = useState([
    { service: 'Counter Service', waiting: 12, served: 45 },
    { service: 'Money Order', waiting: 8, served: 32 },
    { service: 'Parcel Booking', waiting: 15, served: 28 },
    { service: 'Speed Post', waiting: 10, served: 40 },
  ]);

  const [customerSatisfaction] = useState([
    { name: 'Satisfied', value: 75 },
    { name: 'Neutral', value: 15 },
    { name: 'Unsatisfied', value: 10 },
  ]);

  return (
    <div className="space-y-6">
      <Title>Post Office Service Dashboard</Title>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Title>Service Queue Status</Title>
          <BarChart
            data={serviceData}
            index="service"
            categories={['waiting', 'served']}
            colors={['red', 'green']}
            className="h-72"
          />
        </Card>

        <Card>
          <Title>Customer Satisfaction</Title>
          <DonutChart
            data={customerSatisfaction}
            category="value"
            index="name"
            colors={['green', 'yellow', 'red']}
            className="h-72"
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;