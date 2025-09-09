import React from 'react';
import { Mail, AlertCircle, CheckCircle, Settings } from 'lucide-react';

const EmailSetup: React.FC = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
      <div className="flex items-start space-x-3">
        <CheckCircle className="text-green-600 mt-1" size={20} />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-900 mb-2">🟢 Booking System LIVE</h3>
          <div className="space-y-3 text-sm text-green-800">
            <div className="flex items-start space-x-2 mt-4">
              <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium text-green-800">✅ Real-Time Email Delivery ACTIVE</p>
                <p className="text-green-700">All booking requests are instantly sent to <strong>physiohariom001@gmail.com</strong>. Dr. Hariom Nayak will receive immediate email notifications for every appointment request.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Settings className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium text-green-800">System Configuration:</p>
                <div className="text-green-700 space-y-1">
                  <p>• Service ID: <code className="bg-green-100 px-1 rounded">service_tf1qab8</code></p>
                  <p>• Template ID: <code className="bg-green-100 px-1 rounded">template_wqn9ahc</code></p>
                  <p>• Status: <span className="font-semibold">Fully Operational</span></p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Mail className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium text-green-800">What Happens When You Book:</p>
                <p className="text-green-700">1. Fill out the form below → 2. Instant email to Dr. Hariom → 3. You receive confirmation → 4. Dr. Hariom contacts you to confirm appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSetup;