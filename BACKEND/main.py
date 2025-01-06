from sudachipy import tokenizer, dictionary

tokenizer_obj = dictionary.Dictionary().create()
text = "LINEにログインする。"
tokens = tokenizer_obj.tokenize(text, tokenizer.Tokenizer.SplitMode.C)

# Print the tokens
print([m.surface() for m in tokens])
