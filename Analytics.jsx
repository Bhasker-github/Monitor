import { Card, Title, AreaChart, BarList, Grid, Col } from '@tremor/react';

const Analytics = () => {
  const servicePerformance = [
    { date: '2024-01', "Average Wait Time": 12, "Service Time": 8 },
    { date: '2024-02', "Average Wait Time": 10, "Service Time": 7 },
    { date: '2024-03', "Average Wait Time": 8, "Service Time": 6 },
  ];

  const serviceDistribution = [
    { name: 'Counter Service', value: 456 },
    { name: 'Money Order', value: 351 },
    { name: 'Parcel Booking', value: 271 },
    { name: 'Speed Post', value: 191 },
  ];

  return (
    <div className="space-y-6">
      <Title>Service Analytics</Title>
      
      <Grid numItems={1} numItemsSm={2} className="gap-6">
        <Col>
          <Card>
            <Title>Service Performance Trends</Title>
            <AreaChart
              className="h-72 mt-4"
              data={servicePerformance}
              index="date"
              categories={["Average Wait Time", "Service Time"]}
              colors={["red", "blue"]}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Title>Service Distribution</Title>
            <BarList
              data={serviceDistribution}
              className="mt-4"
              valueFormatter={(number) => Intl.NumberFormat('us').format(number).toString()}
            />
          </Card>
        </Col>
      </Grid>
    </div>
  );
};

export default Analytics;