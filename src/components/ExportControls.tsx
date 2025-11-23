import { exportAsImage } from '../utils/exportUtils';
import { Download } from 'lucide-react';

export const ExportControls = () => {
  const handleExport = async () => {
    await exportAsImage('facebook-preview', 'facebook-screenshot');
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-fb-blue">Facebook Screenshot Generator</h1>
      <button
        onClick={handleExport}
        className="flex items-center gap-2 bg-fb-blue text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
      >
        <Download className="w-5 h-5" />
        Export Screenshot
      </button>
    </div>
  );
};

