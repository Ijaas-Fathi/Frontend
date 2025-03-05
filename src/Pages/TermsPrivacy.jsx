import { color } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsPrivacy() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 border rounded-lg shadow-lg p-6 bg-white"  style={{marginTop: '50px'}}>
        <h1 className="text-l font-bold" style={{color: '#0E2954'}}>Terms and Conditions</h1>
        <p className="mb-2">
          Welcome to our Tutorial Web App. By using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Users must provide accurate information during registration.</li>
          <li>Unauthorized access to the system is prohibited.</li>
          <li>We reserve the right to suspend accounts that violate our policies.</li>
          <li>All content is for educational purposes only.</li>
        </ul>
        <p>
          If you have any questions, please contact us at <a href="mailto:support@tutorialapp.com" className="text-blue-500">support@tutorialapp.com</a>.
        </p>
      </div>

      <div className="border rounded-lg shadow-lg p-6 bg-white" style={{marginTop: '45px'}}>
        <h1 className="text-l font-bold" style={{color: '#0E2954'}}>Privacy Policy</h1>
        <p className="mb-2">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
        <ul className="list-disc ml-6">
          <li>We collect personal data during registration and enrollment.</li>
          <li>Your data is stored securely and is not shared with third parties without consent.</li>
          <li>We use cookies to improve user experience.</li>
          <li>You can request data deletion by contacting us.</li>
        </ul>
        <p>
          If you have any questions, please contact us at <a href="mailto:privacy@tutorialapp.com" className="text-blue-500">privacy@tutorialapp.com</a>.
        </p>
      </div>
    </div>
  );
}

