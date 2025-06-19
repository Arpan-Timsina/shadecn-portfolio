import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";


 
const contactPage = () => {
  return (
    // CONTACT PAGE
    <main className="container mx-auto min-h-screen px-4 py-8 pt-16 flex flex-col items-start gap-8"> {/* Standardized top padding */}
      <Badge className="gap-2 self-start">
        <Phone className="h-5 w-5" />
        Contact
      </Badge>

      <div className="flex flex-col gap-5 w-full items-center"> {/* Centering content for this page */}
        <Heading>Contact Me!</Heading>
        <div className="w-full max-w-lg mt-4"> {/* Max width for the form container */}
          <ContactForm />
        </div>
        {/* Empty paragraph removed */}
      </div>
    </main>
  );
};

export default contactPage;
