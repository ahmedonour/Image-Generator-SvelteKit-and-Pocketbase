<script>
    // import { request } from '@sveltech/routify/fetch'
import axios from "axios";  
    export let inputText = '';

    async function handleSubmit() {
      const encodedParams = new URLSearchParams();
      encodedParams.append("source_language", "en");
      encodedParams.append("target_language", "ar");
      encodedParams.append("text", inputText);
  
      const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '51e505a872msha72d16d445e88fp124564jsn6e3109e85e93',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: encodedParams
      };
  
      const response = await axios.request(options);
     const translation = await response.json();
      console.log(response.data);
    }
  </script>
  
  <input type="text" bind:value={inputText} placeholder="Enter text to translate" />
  <button on:click={handleSubmit}>Translate</button>
