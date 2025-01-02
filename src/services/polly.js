//Amazon Polly client
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

export async function usePolly(text, 
                               accessKey,
                               secretKey,
                               sessionToken,
                               regionName
                               )
 {
    const client = new PollyClient({
        region: regionName,
        credentials: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            sessionToken:sessionToken
        },
    });
   
    const input = {
        "Engine": "generative",
        "OutputFormat": "mp3",
        "SampleRate": "16000",
        "Text": text,
        "TextType": "text",
        "LanguageCode": 'ko-KR',
        "VoiceId": 'Seoyeon'
      };
  
      const command = new SynthesizeSpeechCommand(input);
      const response = await client.send(command);
      return response;
  }