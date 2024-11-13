import { Card, Title, TextInput, Select, SelectItem, Button } from '@tremor/react';
import { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    officeName: 'Main Post Office',
    region: 'North',
    maxQueueSize: '50',
    alertThreshold: '15',
  });

  const handleChange = (name, value) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <Title>System Settings</Title>
      
      <Card className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Office Name</label>
          <TextInput
            value={settings.officeName}
            onChange={(e) => handleChange('officeName', e.target.value)}
            placeholder="Enter office name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Region</label>
          <Select
            value={settings.region}
            onValueChange={(value) => handleChange('region', value)}
          >
            <SelectItem value="North">North</SelectItem>
            <SelectItem value="South">South</SelectItem>
            <SelectItem value="East">East</SelectItem>
            <SelectItem value="West">West</SelectItem>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Max Queue Size</label>
          <TextInput
            type="number"
            value={settings.maxQueueSize}
            onChange={(e) => handleChange('maxQueueSize', e.target.value)}
            placeholder="Enter maximum queue size"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Alert Threshold (minutes)</label>
          <TextInput
            type="number"
            value={settings.alertThreshold}
            onChange={(e) => handleChange('alertThreshold', e.target.value)}
            placeholder="Enter alert threshold"
          />
        </div>

        <Button size="lg" className="mt-4">
          Save Settings
        </Button>
      </Card>
    </div>
  );
};

export default Settings;