"use server";

//initialize openai
export async function startChat(): Promise<string> {

// write openai code using structured outputs. return json.stringify(response)
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ye chatgpt response hai");
        }, 2000);
    });
}