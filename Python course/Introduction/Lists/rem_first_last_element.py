'''
remove_first_and_last(list_to_clean)

html = ['<h1>', 'Some content', '</h1>']

remove_first_and_last(html)
=> Some content
-----------------------------
html_2 = ['<h1>', 'Some content', 'more', '</h1>']

remove_first_and_last(html_2)
=> ['Some content', 'more']
'''

def remove_first_and_last(list_to_clean):
    _, *content, _ = list_to_clean
    return content


html_2 = ['<h1>', 'Some content', 'more', '</h1>']
print(remove_first_and_last(html_2))