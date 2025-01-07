from quart import Quart, request, jsonify, send_file
from quart_cors import cors
from sudachipy import tokenizer, dictionary
import os

app = Quart(__name__)
cors(app)

@app.route('/tokenize', methods=['POST'])
async def tokenize():
  tokenizer_obj = dictionary.Dictionary().create()

  data = await request.json
  text = data.get('text')
  tokens = tokenizer_obj.tokenize(text, tokenizer.Tokenizer.SplitMode.C)

  token_strs = [m.surface() for m in tokens]
  return token_strs

if __name__ == "__main__":
    app.run(debug=True)