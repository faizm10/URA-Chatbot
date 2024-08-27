import openai
import PyPDF2

# Set your OpenAI API key
API_KEY = "sk-hello-trpKudk5GlpQL1AD5bDaT3BlbkFJm32PcCNVz4MusxVrJcVT"
openai.api_key = API_KEY

# Define the model ID you want to use
model_id = "gpt-4o-mini"

# Function to get a response from ChatGPT with conversation context
def GetMessageMemory(NewQuestion, lastmessage):
    # Append the new question to the last messages
    lastmessage.append({"role": "user", "content": NewQuestion})
    
    # Make a call to ChatGPT API
    msgcompletion = openai.ChatCompletion.create(
        model=model_id,
        messages=lastmessage
    )
    
    # Get the response from ChatGPT API
    msgresponse = msgcompletion.choices[0].message['content']
    
    # Print the question and response
    print("Question: " + NewQuestion)
    print("Response: " + msgresponse)
    
    # Return the new answer back to the calling function
    return msgresponse

# Path to the PDF file containing the document
file_path = './documents/mcs2020.pdf'  # Ensure this matches your directory structure

# Open the PDF file in read mode
with open(file_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    content = ""
    for page in reader.pages:
        content += page.extract_text()
with open('./documents/assessments.txt', 'r') as file:
  content += file.read()

with open('./documents/discussions.txt', 'r') as file:
  content += file.read()
with open('./documents/excel.txt', 'r') as file:
  content += file.read()
with open('./documents/final.txt', 'r') as file:
  content += file.read()
with open('./documents/Quizzes.txt', 'r') as file:
  content += file.read()
with open('./documents/SONA.txt', 'r') as file:
  content += file.read()


# Prepare the initial question including the document content
question = "Use this text to answer my questions: " + content

# Initialize the messages list to maintain conversation context
messages = []

# Get the initial response based on the document
cresponse = GetMessageMemory(question, messages)

# Add the response to the conversation context
messages.append({"role": "assistant", "content": cresponse})

# Main loop to interact with the user
while True:
    user_input = input("Enter your question (or type 'exit' to quit): ")
    if user_input.lower() == 'exit':
        print("Goodbye!")
        break
    cresponse = GetMessageMemory(user_input, messages)
    messages.append({"role": "assistant", "content": cresponse})
