import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from '@tremor/react';

const QueueManagement = () => {
  const queueData = [
    { id: 1, service: 'Counter Service', customer: 'John Doe', waitTime: '5 mins', status: 'Waiting' },
    { id: 2, service: 'Money Order', customer: 'Jane Smith', waitTime: '2 mins', status: 'In Progress' },
    { id: 3, service: 'Parcel Booking', customer: 'Mike Johnson', waitTime: '10 mins', status: 'Waiting' },
    { id: 4, service: 'Speed Post', customer: 'Sarah Wilson', waitTime: '7 mins', status: 'Waiting' },
  ];

  return (
    <div className="space-y-6">
      <Title>Queue Management</Title>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Token</TableHeaderCell>
              <TableHeaderCell>Service</TableHeaderCell>
              <TableHeaderCell>Customer</TableHeaderCell>
              <TableHeaderCell>Wait Time</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queueData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.waitTime}</TableCell>
                <TableCell>
                  <Badge color={item.status === 'Waiting' ? 'red' : 'green'}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default QueueManagement;