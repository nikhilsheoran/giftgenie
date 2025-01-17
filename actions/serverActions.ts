"use server";

export async function startChat(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ye chatgpt response hai");
        }, 2000);
    });
}