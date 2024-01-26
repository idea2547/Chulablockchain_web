import { client } from "@gradio/client";


async function run() {

	const response_0 = await fetch("https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav");
	const exampleAudio = await response_0.blob();
						
	const app = await client("https://phakpaphon-rvc-models.hf.space/");
	const result = await app.predict(0, [
				exampleAudio, 	// blob in 'Input audio (less than 20 seconds)' Audio component		
				7, // number  in 'Transpose' Number component		
				"pm", // string  in 'Pitch extraction algorithm, PM is fast but Harvest is better for low frequencies' Radio component		
				0.6, // number (numeric value between 0 and 1) in 'Retrieval feature ratio' Slider component		
				true, // boolean  in 'tts (use edge-tts as input)' Checkbox component		
				"สวัสดีมีอะไรให้ชั้นช่วยไหม", // string  in 'TTS text (100 words limitation)' Textbox component		
				"th-TH-PremwadeeNeural-Female", 
	]);
    console.log('pass')
	console.log(result?.data);
}

run();