// Removed unused cn and React imports
import { Download } from 'lucide-react'; // Kept one Download import
import Link from 'next/link'; // Kept one Link import
import { Button } from './ui/button';

function DownLoadResumeBtn() {
  return (
    <Button asChild variant="default" size="lg" className="gap-2">
      <Link href="/files/resume.docx" download='resume.docx'>
        <span className="flex items-center">
          <Download className="h-5 w-5 mr-2" /> {/* Re-added mr-2 as Button's gap won't apply inside span */}
          Download Resume
        </span>
      </Link>
    </Button>
  );
}

export default DownLoadResumeBtn;