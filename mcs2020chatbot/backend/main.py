import openai

# Assuming openai is already initialized with your API key
training_data = [
  {"prompt": "Who is the instructor for this course?", "completion": "The instructor is Nicole McCallum."},
  {"prompt": "Can you tell me who the course instructor is?", "completion": "The instructor is Nicole McCallum."},
  
]

validation_data = [
  {"prompt": "What is the time limit for the final exam?", "completion": "The time limit for the final exam is 2 hours."},
  {"prompt": "How many questions will be on the final exam?", "completion": "The final exam will consist of 50 multiple-choice questions."},

]

response = openai.FineTune.create(
    training_file=training_data,
    validation_file=validation_data,
    model="curie",
    n_epochs=15,
    batch_size=2,
    learning_rate_multiplier=1
)
print(response)
