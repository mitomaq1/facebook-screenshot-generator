import { ExportControls } from './components/ExportControls';
import { ProfileEditor } from './components/ProfileEditor';
import { PostEditor } from './components/PostEditor';
import { FacebookProfile } from './components/FacebookProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ExportControls />
      
      <div className="flex gap-4 p-4">
        {/* Left Sidebar - Editors */}
        <div className="w-96 flex-shrink-0 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          <ProfileEditor />
          <PostEditor />
        </div>

        {/* Main Preview Area */}
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-100px)]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <FacebookProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

