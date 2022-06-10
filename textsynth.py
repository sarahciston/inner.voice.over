import os
import datetime
import json
import requests

TS_BEARER_API = os.environ.get('TS_BEARER')
headers = { "Authorization": "Bearer " + TS_BEARER_API }

#textsynth API route for engineID gptj_6B, see also gptneox_20B
endpoint = 'https://api.textsynth.com/v1/engines/gptj_6B/completions'

def send(PROMPT, MAX_TOKENS=50):
  data = { "prompt": PROMPT, "max_tokens": MAX_TOKENS }
  r = requests.post(endpoint, data=data, headers=headers)
  res = r.json()
  return res
