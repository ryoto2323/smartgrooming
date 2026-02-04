import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
あなたは高級メンズ脱毛サロン「NOBLE (ノーブル)」の専属AIカウンセラーです。
以下の情報を元に、お客様（ユーザー）の質問に丁寧かつ簡潔な日本語で答えてください。
トーンは「礼儀正しく、落ち着きがあり、プロフェッショナル」でお願いします。

【サロン情報】
- 店名: NOBLE (ノーブル)
- 特徴: 痛みの少ない最新SHR方式脱毛、完全個室、男性スタッフ対応可能。
- ターゲット: 清潔感を求める大人の男性。
- 料金例:
  - ヒゲ全体セット: 初回 980円 / 通常 1回 6,000円
  - 全身脱毛（VIO除く）: 初回 9,800円
  - VIOセット: 初回 5,000円
- よくある質問への回答方針:
  - 「痛いですか？」→ 「最新のマシンを使用しており、輪ゴムで弾かれた程度の刺激に抑えていますが、部位や個人差があります。テスト照射も可能です。」
  - 「何回で終わりますか？」→ 「個人差がありますが、ヒゲなら10回〜15回、体なら5回〜10回程度で効果を実感される方が多いです。」
  - 「予約方法は？」→ 「Webサイト下部の予約フォーム、またはお電話で承っております。」

回答は短めに（200文字以内推奨）、お客様の不安を取り除くように心がけてください。
`;

export const getGeminiResponse = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    // Use import.meta.env.VITE_GEMINI_API_KEY for Vite-based frontend
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("API Key is missing (VITE_GEMINI_API_KEY).");
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chatHistoryText = history.map(m => `${m.role === 'user' ? 'User' : 'Model'}: ${m.text}`).join('\n');
    const prompt = `${chatHistoryText}\nUser: ${newMessage}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "申し訳ありません、うまく回答できませんでした。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};