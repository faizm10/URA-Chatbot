"use client"
import NavBar from "@/components/NavBar"
import { ContactUs } from "@/components/ContactUs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, AlertCircle, Zap, Shield } from "lucide-react"

// Define FAQs
const faqCategories = [
  {
    category: "General Usage",
    icon: <HelpCircle className="h-6 w-6" />,
    faqs: [
      {
        id: "general-1",
        title: "How do I start using the chatbot?",
        content:
          "To start using the chatbot, simply type your question or command into the chat input area and press enter.",
      },
      {
        id: "general-2",
        title: "What can I ask the chatbot?",
        content:
          "You can ask the chatbot questions related to the course content. While it can understand natural language, keeping questions clear and to the point helps in getting accurate responses.",
      },
    ],
  },
  {
    category: "Troubleshooting and Errors",
    icon: <AlertCircle className="h-6 w-6" />,
    faqs: [
      {
        id: "trouble-1",
        title: "What should I do if the chatbot doesn't understand my question?",
        content:
          "Try rephrasing your question or use simpler, more direct language. Ensure that your questions are within the scope of the chatbot's capabilities.",
      },
      {
        id: "trouble-2",
        title: "Why isn't the chatbot responding to my commands?",
        content:
          "Check your internet connection first. If the connection is fine, the chatbot may be undergoing maintenance. Try again later or contact support if the issue persists.",
      },
      {
        id: "trouble-3",
        title: "How do I report a problem or bug in the chatbot?",
        content: "Go to Contact Us which is located below",
      },
      {
        id: "trouble-4",
        title: "The chatbot gave an incorrect or unexpected answer. What should I do?",
        content:
          "Provide feedback if there's an option. Many chatbots improve over time by learning from user interactions.",
      },
    ],
  },
  {
    category: "Advanced Features",
    icon: <Zap className="h-6 w-6" />,
    faqs: [
      {
        id: "advanced-1",
        title: "Can the chatbot handle complex queries or follow-up questions?",
        content: "Currently, the chatbot can not handle complex queries or follow-up questions.",
      },
    ],
  },
  {
    category: "Privacy and Security",
    icon: <Shield className="h-6 w-6" />,
    faqs: [
      {
        id: "privacy-1",
        title: "What information does the chatbot collect about me?",
        content: "The chatbot collects data from your interactions to improve responses and service.",
      },
      {
        id: "privacy-2",
        title: "Is my conversation with the chatbot private?",
        content: "Yes, conversations with chatbots are stored for analysis and improvement of the service.",
      },
    ],
  },
]

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h1>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category) => (
              <Card key={category.category} className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    {category.icon}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {category.faqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left font-medium">{faq.title}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="py-16 px-4 mx-auto max-w-screen-md text-center mt-12">
            <ContactUs />
          </div>
        </div>
      </main>
    </div>
  )
}

