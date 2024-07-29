import json
from openai import OpenAI

# OpenAI API Key
client = OpenAI(api_key='sk-hello-trpKudk5GlpQL1AD5bDaT3BlbkFJm32PcCNVz4MusxVrJcVT')

# Function to generate variations
def generate_variations(question, answer, num_variations=5):
    prompt = f"Generate {num_variations} variations of the following question in a student's tone (I or We). Do not use numbers or bullet points:\n\n{question}"
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an assistant that generates variations of questions in a student's tone."},
            {"role": "user", "content": prompt}
        ]
    )
    
    variations = completion.choices[0].message.content.strip().split('\n')
    # Remove any empty strings or unnecessary whitespace
    variations = [variation.strip() for variation in variations if variation.strip()]
    return [(variation, answer) for variation in variations]

# Read questions and answers from the input file
with open('mgmt1000.jsonl', 'r') as infile:
    question_answer_pairs = []
    for line in infile:
        try:
            data = json.loads(line)
            question = data['messages'][0]['content']
            answer = data['messages'][1]['content']
            question_answer_pairs.append((question, answer))
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON on line: {line}")
            print(e)
            continue

total_questions = len(question_answer_pairs)
progress_intervals = max(1, total_questions // 10)

# Generate variations and write to the output file
with open('variations.jsonl', 'w') as outfile:
    for i, (question, answer) in enumerate(question_answer_pairs):
        variations = generate_variations(question, answer)
        for variation, answer in variations:
            data = {"messages": [{"role": "user", "content": variation}, {"role": "assistant", "content": answer}]}
            json.dump(data, outfile)
            outfile.write('\n')
        
        if (i + 1) % progress_intervals == 0:
            print(f"{((i + 1) // progress_intervals) * 10}% completed")

print("Variations generated and saved to variations.jsonl")
